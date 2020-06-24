<template>
  <div id="board-list">
    <a-row style="margin-bottom:16px">
      <a-button type="primary" icon="plus" :size="size" @click="newBoard">
        New board
      </a-button>
    </a-row>
    <a-row :gutter="16">
      <!--TODO: click each board to go to details -->
      <a-col v-for="board in boards" :key="board.Name" :span="6">
          <a-card :title="board.Name" :bordered="false"
            style="margin-bottom: 16px" :size="small"
          >
          <p>{{board.Description}}</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { BoardViewModel } from '@/entities/BoardViewModel'

@Component
export default class BoardList extends Vue {
  @Prop() private msg!: string;
  private boards: Array<BoardViewModel> = []

  public async mounted () {
    // TODO: move this code to some sort of service
    const response = await this.axios.get<BoardViewModel[]>('http://localhost:1323/api/boards')
    this.boards = response.data
  }

  public newBoard () {
    this.boards.push(new BoardViewModel('baru', 'baru'))
  }
}
</script>

<style scoped>
#board-list {
  padding: 20px
}
</style>
