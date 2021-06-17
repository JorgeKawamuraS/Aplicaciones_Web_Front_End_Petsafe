<template>
  <v-app>
  <div class="login" >
    <img src="../images/logo.png" alt="logo" width="250" height="124">
    <template>
      <v-stepper
          v-model="e6"
          vertical
      >
        <v-stepper-step
            :complete="e6 > 1"
            step="1"
        >
          Completa tu información
          <small>Llena los campos con tu correo y datos principales</small>
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-form class="cont" align="right"
                  color="deep-purple accent-4"
                  ref="form"
                  v-model="valid"
                  lazy-validation>

            <v-text-field v-model="name"
                          label="Full Name"
                          required>
            </v-text-field>

            <v-text-field v-model="email"
                          :rules="emailRules"
                          label="E-mail"
                          required>
            </v-text-field>

            <v-text-field v-model="pass"
                          :counter="12"
                          label="Password"
                          required>
            </v-text-field>

            <v-text-field v-model="pass2"
                          :counter="12"
                          @change="passwordValidate"
                          label="Confirm Password"
                          required>
            </v-text-field>


            <v-container
                class="px-0"
                fluid
            >
              <v-radio-group v-model="row" mandatory row class="mb-0 ma-auto pa-0">
                <v-radio
                    :label="'Vetetinario'" id="Vet"
                ></v-radio>
                <v-radio
                    :label="'Dueño'" id="Owner"
                ></v-radio>
              </v-radio-group>
            </v-container>

          </v-form>
          <v-btn
              color="primary"
              @click="e6 = e6+1;valuesVet"
          >
            Continue
          </v-btn>
        </v-stepper-content>

        <v-stepper-step
            :complete="e6 > 2"
            step="2"
        >
          Llena tu información personal
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-form class="cont" align="right"
                  color="deep-purple accent-4"
                  ref="form"
                  v-model="valid"
                  lazy-validation>
            <template v-if="!vet">
              <div class="d-flex flex-row">
                <v-text-field v-model="number"
                              label="Número de Telefono"
                              required type="number">
                </v-text-field>
                <div class="d-flex flex-column">
                  <span class="ml-auto">Fecha de nacimiento</span>

                  <input type="date" class="float-left">
                </div>
              </div>
            </template>

            <template v-else>
              <div class="d-flex flex-row">
                <v-text-field v-model="number"
                              label="Número de Telefono"
                              required type="number">
                </v-text-field>
                <div class="d-flex flex-column">
                  <span class="ml-auto">Fecha de nacimiento</span>

                  <input type="date" class="float-left">
                </div>
              </div>
              <v-text-field v-model="codeVet"
                            :counter="12"
                            label="Codigo de Veterinario"
                            type="number" >
              </v-text-field>

              <v-text-field v-model="yearsExperience"
                            :counter="2"
                            type="number"
                            label="Años de experiencia"
              >
              </v-text-field>
            </template>

          </v-form>
          <v-btn
              color="primary"
              @click="e6 = e6+1"
          >
            Continue
          </v-btn>
          <v-btn
              color="error"
              class="ml-3"
              @click="e6 = e6-1"
          >
            Atrás
          </v-btn>
        </v-stepper-content>

        <v-stepper-step
            :complete="e6 > 3"
            step="3"
        >
          Elije un plan
        </v-stepper-step>

        <v-stepper-content step="3">
          <div class="d-flex flex-row">
          <v-card
              class="vet"
              v-for="plan in plansVet" :key="plan.title"
          >
            <v-card-title>{{plan.title}}</v-card-title>
            <v-btn
                color="success"
                @click="goToTarget"
            >
              ELEGIR ->
            </v-btn>
          </v-card>
          </div>
          <template v-if="valuesVet===true">
          </template>
          <v-btn
              color="error"
              class="ml-3"
              @click="e6 = e6-1"
          >
            Atrás
          </v-btn>
        </v-stepper-content>

      </v-stepper>
    </template>

    <v-divider></v-divider>

    <div class="pre-register" >
      <p>¿Ya tienes una cuenta?</p>

      <v-btn color="blue dark" @click="goToLogin">
        LOG IN
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
    margin-top: 180px;
  }
}
.pre-register {
  margin-top: 50px;
  text-align: center;
}
</style>

<script>
export default {
  name: "register",
  props:{
  },
  data() {
    return {
      e6:1,
      valid: true,
      vet:true,
      name: '',
      number: '',
      pass: '',
      pass2: '',
      email: '',
      codeVet:'',
      yearsExperience:'',
      plansVet:[{title:'Basic',price:'Free',benefits:[
          {
            benefit: 'Crea y personaliza tu perfil',
          },
          {
            benefit: 'Hazte colaborador de un dueño de veterinario',
          },
          {
            benefit: 'Accede al perfil del negocio de veterinaria al cual estás colaborando',
          },
        ]},
        {title:'Premium',price:'Free',benefits:[
            {
              benefit: 'Crea y personaliza tu perfil',
            },
            {
              benefit: 'Hazte colaborador de un dueño de veterinario',
            },
            {
              benefit: 'Accede al perfil del negocio de veterinaria al cual estás colaborando',
            },
          ]}],
      plansOwner:[{title:'Basic',price:'Free',benefits:[
          {
            benefit: 'Crea y personaliza tu perfil',
          },
          {
            benefit: 'Vincula a una mascota a tu cuenta',
          },
          {
            benefit: 'Registra y gestiona la informacion de tu mascota',
          },
          {
            benefit: 'Visualiza las veterinarias cercanas a tu hogar en nuestro mapa.',
          },
        ]}],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      confirmPassword: [
      ]
    }
  },
  methods: {
    validate() {
      this.goToTarget(this.vet);
    },
    passwordValidate() {
      if(this.pass !== this.pass2){
        alert('Ambas contraseñas deben ser iguales!')
      }
      else
        return 1
    },
    goToLogin() {
      this.$router.push({name: 'login'})
    },
    goToTarget(){
      if(document.querySelector('#Vet').checked){
        this.$router.push({name: 'vet-profile'})
      }else{
        this.$router.push({name: 'owner'})
      }
    },
    valuesVet(){
      if(document.querySelector('#Vet').checked){
        return true;
      }else{
        return false;
      }
    },
    valuesOwner(){
      if(document.querySelector('#Owner').checked){
        return true;
      }else{
        return false;
      }
    },
    vetValue(){
      if(!document.querySelector('#Vet').checked){
        this.vet=!this.vet
      }
    }
  }
}
</script>


<style scoped>

.vet{
  border-radius: 10px;
  border: 2px solid #95DB80;
  width: 10%;
}

</style>