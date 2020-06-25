import axios from 'axios'
import { BoardViewModel } from '@/entities/BoardViewModel'

export class BoardService {
  private apiClient = axios.create({
    baseURL: 'http://localhost:1323/api',
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  public async getAll (): Promise<BoardViewModel[]> {
    const response = await this.apiClient.get<BoardViewModel[]>('/boards')
    console.log(`calling /boards get: ${JSON.stringify(response.data)}`)
    return response.data
  }
}
