<template>
  <div id="app" class="navbar-top  has-detached-right">
    <navbar />
    <div class="page-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/NavBar'
export default {
  name: 'app',
  components: {
    navbar: Navbar
  }
}
</script>

<style>
</style>
