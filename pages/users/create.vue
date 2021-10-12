<template>
  <b-form @submit.prevent="addUser">
    <div class="container mt-5">
      <div class="row justify-content-center mb-3">
        <div class="col-12 col-sm-3">
          <h2>Create user</h2>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-sm-3">
          <b-form-group label="First name" label-for="first">
            <b-form-input
              id="first"
              v-model="user.name.first"
              required
              placeholder="Jane"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-sm-3">
          <b-form-group label="Last name" label-for="last">
            <b-form-input
              id="last"
              v-model="user.name.last"
              required
              placeholder="Doe"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-sm-3">
          <b-form-group label="Age" label-for="age">
            <b-form-input
              id="age"
              v-model="user.age"
              required
              placeholder="20"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row justify-content-center mt-3">
        <div class="col-12 col-sm-3">
          <b-button block type="submit" variant="primary">
            Create
          </b-button>
        </div>
      </div>
    </div>
  </b-form>
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: {
          first: null,
          last: null
        },
        age: null
      }
    }
  },
  methods: {
    addUser () {
      this.$store.dispatch('addUser', { user: this.user })
        .then(() => {
          this.user.name.first = null
          this.user.name.last = null
          this.user.age = null

          alert('Successfully created user')
        })
    }
  }
}
</script>
