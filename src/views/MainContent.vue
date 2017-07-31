<template>
  <div  class="page-content">
    <sidebar />
    <div class="content-wrapper">
    </div>
  </div>
</template>

<script>
  import SiderBar from './SideBar'
  export default {
    name: 'main-content',

    components: {
      sidebar: SiderBar
    },

    props: {
      page: {
        type: String,
        required: true
      }
    },

    data () {
      return {
        page: this.page,
        test: 'test'
      }
    }
  }
</script>

<style>
</style>
