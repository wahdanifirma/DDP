<template>
   <q-page style="width: 1440px; margin: auto">
      <div class="q-pa-md">
         <q-card class="card-body shadow-4">
            <q-card-section>
               <div class="row q-ml-lg q-pl-xs">
                  <div class="col-6">
                     <q-img
                        src="~/assets/runner.png"
                        spinner-color="white"
                        style="height: 60px; max-width: 160px"
                        img-class="my-custom-image"
                        class="rounded-borders q-mt-xs q-ml-lg"
                        />
                     <div class="text-h4 text-bold q-mt-xl q-ml-xl q-pt-xl">
                        Sign In
                     </div>
                     <br />
                     <div class="q-mt-xl q-ml-xl">
                        <form @submit.prevent="login">
                           <q-input
                              style="width: 470px; height: 68.43px"
                              outlined
                              v-model="username"
                              :dense="dense"
                              filled
                              bg-color="grey-4"
                              label="Username"
                              >
                              <template v-slot:append>
                                 <q-avatar>
                                    <img text-color="grey" class="q-ml-sm" style="height: 25px; width: 50px; filter: invert(51%) sepia(14%) saturate(4%) hue-rotate(202deg) brightness(88%) contrast(93%);" src="~/assets/icon/user-solid.svg" />
                                 </q-avatar>
                              </template>
                           </q-input>
                           <q-input
                              class="q-mt-md"
                              style="width: 470px; height: 68.43px"
                              outlined
                              v-model="password"
                              :dense="dense"
                              filled
                              label="Password"
                              bg-color="grey-4"
                              :type="isPwd ? 'password' : 'text'"
                              >
                              <template v-slot:append>
                                 <q-icon
                                    :name="isPwd ? 'visibility_off' : 'visibility'"
                                    class="cursor-pointer"
                                    @click="isPwd = !isPwd"
                                    />
                              </template>
                           </q-input>
                           <q-btn
                              type="submit"
                              class="q-mt-md shadow-4"
                              style="width: 469px; height: 70.71px; background-color: #fb8e71;"
                              text-color="white"
                              no-caps
                              >
                              <div class="text-h6">Sign In</div>
                           </q-btn>
                        </form>
                        <div class="q-mt-md q-gutter-sm">
                           <label class="custom-checkbox">
                              <q-checkbox
                                 v-model="right"
                                 label="Remember me"
                                 class="checkmark text-bold"
                                 />
                           </label>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-6">
                        <q-card
                           class="my-card q-mt-xs shadow-4"
                           style="background-color: #fb8e71;
                           background-image: url('../icon/Saly-10.svg'), url('../icon/Lines.svg');
                           background-position: bottom, top left;
                           background-repeat: no-repeat;
                           background-size: 418px, 600px;"
                           >
                           <q-card-section>
                              <br />
                              <div class="row justify-center" style="height: 380px">
                              <div class="text-h4 text-center text-white self-end text-bold">
                                 Welcome to <br />Data Delivery Platform
                              </div>
                              </div>
                           </q-card-section>
                        </q-card>
                     </div>
                  </div>
               </div>
            </q-card-section>
         </q-card>
         <!-- <q-card class="my-card">
            <q-card-section>
              <div class="text-h5 text-bold text-black">Sign In</div>
              <br />
              <div class="q-mt-xl">
                <div class="text-subtitle2 text-bold">Username</div>
                <q-input rounded outlined v-model="text" />
              </div>
              <br />
              <div class="q-mt-xs">
                <div class="text-subtitle2 text-bold">Password</div>
                <q-input rounded outlined v-model="text" />
              </div>
              <div class="q-mt-md">
                <q-btn
                  style="height: 50px; width: 440px"
                  rounded
                  color="primary"
                  label="Sign In"
                  no-caps
                />
              </div>
              <div class="q-pa-md">
                <q-checkbox v-model="val" label="Remember me" />
              </div>
            </q-card-section>
            </q-card> -->
      </div>
   </q-page>
</template>
<script>
   export default {
     name: 'Login',
     data () {
       return {
         username: null,
         password: null,
         slide: 1,
         right: false,
         isPwd: true,
         app_id: 'uzzeet'
       }
     },
     methods: {
       login: function () {
         if (this.username != null && this.password != null) {
           const form = new FormData()
           form.append('username', this.username)
           form.append('password', this.password)
           form.append('app_id', this.app_id)
           // console.log(params)
   
           // store -> action -> method login
           this.$store
             .dispatch('auth/login', form)
             .then((response) => {
               console.log(response)
               if (response.data.response === 200) {
                 this.$router.push('/dashboard')
               } else {
                 this.$router.push('/login')
               }
             })
             .catch((err) => console.log(err))
         } else {
           console.log('username dan password kosong')
         }
       }
     }
   }
</script>
<style>
   .my-card {
   height: 890px;
   width: 670px;
   }
   .card-body {
   height: 930px;
   width: 1400px;
   }
   .custom-checkbox .q-checkbox:checked + .checkmark{
   background: #FB8E71;
   }
   /* .bottom_content{
   padding: 15px;
   max-width: 500px;
   position: absolute;
   } */
</style>