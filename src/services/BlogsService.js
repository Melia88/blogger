import { AppState } from '../AppState'
import { api } from './AxiosService'

class BlogsService {
  async getAll() {
    const res = await api.get('api/blogs')
    AppState.blogs = res.data
  }

  async getActive(_id) {
    const res = await api.get('api/blogs/' + _id)
    AppState.activeBlog = res.data
  }
}

export const blogsService = new BlogsService()
