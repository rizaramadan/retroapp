<template>
  <div id="board-list">
    <a-row :gutter="16">
      <a-col v-for="board in boards" :key="board.Name" :span="6">
          <a-card :title="board.Name" :bordered="false" style="margin-bottom: 16px">
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
    const response = await this.axios.get<BoardViewModel[]>('http://localhost:1323/api/boards')
    this.boards = response.data
  }
}
</script>

<style scoped>
#board-list {
  padding: 20px
}
</style>
