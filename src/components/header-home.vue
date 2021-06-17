<template>
  <v-app-bar fixed light color="light-blue" height="80px">
    <v-toolbar-title class="white--text"><img src="../images/logo.png" alt="logo" width="160px" height="60px"></v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn text color="white" @click="navigateToLogin">
      Inciar Sesión
    </v-btn>

    <v-btn text color="white" @click="navigateToRegister">
      Registrate
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "header-home",
  methods:{
    navigateToLogin(){
      this.$router.push({name:'login'});
    },
    navigateToRegister(){
      this.$router.push({name:'register'});
    }
  }
}
</script>

<style scoped>

</style>