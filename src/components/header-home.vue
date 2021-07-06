<template>
  <v-app-bar fixed light color="light-blue" height="80px">
    <v-toolbar-title class="white--text"><img src="../images/logo.png" alt="logo" width="160px" height="60px"></v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="!currentUser">
    <v-btn text color="white" @click="navigateToLogin">
      Inciar Sesión
    </v-btn>

    <v-btn text color="white" @click="navigateToRegister">
      Registrate
    </v-btn>
    </div>
    <div v-else>
      <v-btn text color="white" to="/profile">{{ currentUser.username }}</v-btn>
      <v-btn text color="white" @click.prevent="logout">CERRAR SESIÓN</v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "header-home",
  computed:{
    currentUser(){
      console.log(this.$store.state.auth.user);
      return this.$store.state.auth.user;
    }
  },
  methods:{
    navigateToLogin(){
      this.$router.push({name:'login'});
    },
    navigateToRegister(){
      this.$router.push({name:'register'});
    },
    logout(){
      this.$store.dispatch('auth/logout');
      this.$router.push({name:'home'})
    }
  }
}
</script>

<style scoped>

</style>