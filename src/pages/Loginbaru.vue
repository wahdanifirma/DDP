<template>
  <q-page style="width: 600px; margin: auto">
    <div class="q-mt-xl q-pl-xl" style="height: 400px">
      <div style="height: 380px">
        <q-card class="card form-group" align="bottom">
          <q-card-section class="items-center">
            <!-- <q-card class="q-ml-xl cardtop" style="background-color: #fb8e71">
            <q-card-section
              class="text-subtitle2 text-bold text-center text-white"
            >
              Login
            </q-card-section>
          </q-card> -->
            <div class="q-mt-xl q-ml-xl">
              <form @submit.prevent="login">
                <q-input
                  label-color="white"
                  text-color="white"
                  style="width: 470px; height: 68.43px color: white"
                  outlined
                  v-model="username"
                  :dense="dense"
                  filled
                  bg-color="dark"
                  label="Username"
                >
                  <template v-slot:append>
                    <q-avatar>
                      <img
                        class="q-ml-sm"
                        style="
                          height: 25px;
                          width: 50px;
                          filter: invert(51%) sepia(14%) saturate(4%)
                            hue-rotate(202deg) brightness(88%) contrast(93%);
                        "
                        src="~/assets/icon/user-solid.svg"
                      />
                    </q-avatar> 
                  </template>
                </q-input>
                <q-input
                  label-color="white"
                  text-color="white"
                  class="q-mt-md"
                  style="width: 470px; height: 68.43px"
                  outlined
                  v-model="password"
                  :dense="dense"
                  filled
                  label="Password"
                  bg-color="dark"
                  :type="isPwd ? 'password' : 'text'"
                >
                  <template v-slot:append>
                    <q-icon
                      color="grey"
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
                <q-btn
                  type="submit"
                  class="q-mt-md shadow-4"
                  style="
                    width: 469px;
                    height: 70.71px;
                    background-color: #fb8e71;
                  "
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
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null,
      slide: 1,
      right: false,
      isPwd: true,
      app_id: "uzzeet",
    };
  },
  methods: {
    login: function () {
      if (this.username != null && this.password != null) {
        const form = new FormData();
        form.append("username", this.username);
        form.append("password", this.password);
        form.append("app_id", this.app_id);
        // console.log(params)

        // store -> action -> method login
        this.$store
          .dispatch("auth/login", form)
          .then((response) => {
            console.log(response);
            if (response.data.response === 200) {
              this.$router.push("/dashboard");
            } else {
              this.$router.push("/login");
            }
          })
          .catch((err) => console.log(err));
      } else {
        console.log("username dan password kosong");
      }
    },
  },
};
</script>
<style>
.card {
  width: 600px;
}
.cardtop {
  width: 450px;
  height: 50px;
}
</style>