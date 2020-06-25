<template>
  <div id="board-list">
    <a-row style="margin-bottom:16px">
      <a-form-model layout="inline" @submit="newBoard" @submit.native.prevent>
        <a-form-model-item>
          <a-input v-model="user" placeholder="Input board name here">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button
            type="primary"
            html-type="submit"
            icon="plus"
            :disabled="user === ''"
          >
            Create
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-row>
    <a-row :gutter="16">
      <!--TODO: click each board to go to details -->
      <a-col v-for="board in boards" :key="board.Name" :span="6">
          <a-card style="margin-bottom: 16px">
            <p v-if="!onEdit.get(board.Name)" @click="toggle(board.Name)" key=""> {{board.Name}} </p>
            <!-- TODO: when enter, change name -->
            <a-input
              v-if="onEdit.get(board.Name)"
              placeholder="Basic usage"
              v-on:keyup.enter="toggle(board.Name)"
              :default-value='board.Name'
            />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { BoardViewModel } from '@/entities/BoardViewModel'
import { BoardService } from '@/services/BoardService'

@Component
export default class BoardList extends Vue {
  private user = ''
  private onEdit = new Map()
  private boards: Array<BoardViewModel> = []
  private boardService: BoardService = new BoardService()

  public async mounted () {
    const boards = await this.boardService.getAll()
    for (let i = 0; i < boards.length; i++) {
      this.onEdit.set(boards[i].Name, false)
    }
    this.boards = boards
  }

  public newBoard () {
    this.boards.push(new BoardViewModel(this.user, 'baru'))
  }

  public toggle (key: string) {
    this.onEdit.set(key, !this.onEdit.get(key))
    this.$forceUpdate()
  }
}
</script>

<style scoped>
#board-list {
  padding: 20px
}
</style>
