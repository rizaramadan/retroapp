<template>
  <div id="board-list">
    <a-row :gutter="16">
      <a-col v-for="board in boards" :key="board.name" :span="6">
          <a-card :title="board.name" :bordered="false" style="margin-bottom: 16px">
          <p>{{board.description}}</p>
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
  private boards: Array<BoardViewModel> = [
    {
      name: 'Preetish',
      description: '26'
    },
    {
      name: 'John',
      description: '30'
    },
    {
      name: 'Doe',
      description: '34'
    },
    {
      name: 'air',
      description: '34'
    },
    {
      name: 'lagi',
      description: '34'
    }
  ]
}
</script>

<style scoped>
#board-list {
  padding: 20px
}
</style>
