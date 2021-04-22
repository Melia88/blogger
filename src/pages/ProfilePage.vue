<template>
  <div class="ProfilePage">
    <h1>Helerrrr</h1>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { profileService } from '../services/ProfileService'
import { computed, onMounted, reactive } from 'vue'
export default {
  name: 'ProfilePage',
  setup() {
    const state = reactive({
      profile: computed(() => AppState.profile),
      activeProfile: computed(() => AppState.activeProfile)
    })
    onMounted(async() => {
      await profileService.getByProfileId()
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
