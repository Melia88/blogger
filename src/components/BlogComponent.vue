<template>
  <div class="BlogComponent col-md-4">
    <router-link :to="{name: 'BlogDetailsPage', params: {_id: blog._id}}">
      <div class="card m-2">
        <!-- <img class="card-img-top" src="holder.js/100x180/" alt=""> -->
        <div class="card-body">
          <h4 class="card-title">
            {{ blog.title }}
          </h4>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BlogComponent',
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
