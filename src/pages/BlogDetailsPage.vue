<template>
  <div class="BlogDetailsPage col-12" v-if="state.blog">
    <!-- <img class="card-img-top" :src="state.creator.picture" alt=""> -->
    <h1 class="mb-4">
      Blog Details
    </h1>
    <div class="card m-2 shadow">
      <div class="card-body">
        <h4 class="card-title">
          <!-- {{ route.params._id }} -->
          {{ state.blog.title }}
        </h4>
        <p>
          {{ state.blog.body }}
        </p>
        <router-link :to="{name: 'ProfilePage', params: {id: state.blog._id}}">
          <p>
            {{ state.blog.creator.name }}
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { blogsService } from '../services/BlogsService'
import Notification from '../utils/Notification'
import { useRoute } from 'vue-router'
export default {
  name: 'BlogDetailsPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      blog: computed(() => AppState.activeBlog)

    })

    onMounted(async() => {
      try {
        await blogsService.getActive(route.params._id)
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
    })
    return {
      route,
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
