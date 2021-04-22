<template>
  <div class="blog container flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="row">
      <!-- :blog= this comes from props and is what we call the variable -->
      <!-- "blog" in :blog="blog" comes from the v-for="blog << that << in " -->
      <BlogComponent v-for="blog in state.blogs" :key="blog._id" :blog="blog" />
    </div>
    <!-- {{ state.blogs }} -->
    <h1 class="my-5 bg-dark text-light p-3 rounded d-flex align-items-center">
      <span class="mx-2 text-white">Vue 3 Starter</span>
    </h1>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { logger } from '../utils/Logger'
import { blogsService } from '../services/BlogsService'
import { AppState } from '../AppState'
export default {
  name: 'BlogPage',
  setup() {
    const state = reactive({
      blogs: computed(() => AppState.blogs)
    })
    onMounted(async() => {
      try {
        await blogsService.getAll()
      } catch (error) {
        logger.log(error)
      }
    })
    return {
      state
    }
  }
}

</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
