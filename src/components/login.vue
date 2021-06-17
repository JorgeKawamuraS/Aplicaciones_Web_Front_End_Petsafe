<template>
  <v-app>
  <div class="login" >
    <img src="../images/logo.png" alt="logo" width="250" height="124">
    <v-form class="cont"
            color="deep-purple accent-4"
            ref="form"
            v-model="valid"
            lazy-validation>

      <v-text-field v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required>
      </v-text-field>

      <v-text-field v-model="name"
                    :counter="12"
                    label="Password"
                    required>
      </v-text-field>



      <v-btn :disabled="!valid"
             color="success"
             class="mr-4"
             @click="validate">
        SUBMIT
      </v-btn>

    </v-form>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <div class="pre-register">
      <p>¿No tienes una cuenta?</p>

      <v-btn color="blue dark" @click="goToRegister">
        SING UP
      </v-btn>

    </div>

  </div>
  </v-app>
</template>

<style lang="scss">
.cont {
  margin-left: 30%;
  margin-right: 30%;
  margin-top: 2%;
}
@media (max-width: 760px) {
  .cont {
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 2%;
  }
}
.pre-register {
  margin-top: 50px;
  text-align: center;
}
</style>
<script>
export default {
  name: "login",
  data() {
    return {
      valid: true,
      name: '',
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    validate() {

    },
    goToRegister() {
      this.$router.push({name: 'register'})
    }
  },
}
</script>

<style scoped>
</style>