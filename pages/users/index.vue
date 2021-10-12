<template>
  <div class="container mt-5">
    <div class="row justify-content-center mb-3">
      <div class="col-12 col-sm-3">
        <h2>Users</h2>
      </div>
    </div>

    <div class="row justify-content-center mb-3">
      <div class="col-12 col-sm-2 font-weight-bold">Name</div>
      <div class="col-12 col-sm-1 font-weight-bold">Age</div>
    </div>

    <div
      v-for="(user, key) in $store.getters.getUsers"
      :key="key"
      class="row justify-content-center mb-3">
      <div class="col-12 col-sm-2">
        {{ user.name.first}} {{ user.name.last}}
      </div>
      <div class="col-12 col-sm-1">
        {{ user.age }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('fetchUsers')
  }
}
</script>

<style>

</style>
