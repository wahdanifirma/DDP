<template>
  <q-page class="login-container">
    <div class="login-form">
      <div class="login-form-wrap">
        <div class="login-container">
          <div class="login-content">
            <q-form @submit="onSubmit">
              <q-card-section class="q-gutter-md">
                <q-input
                  dark
                  v-model="form.username"
                  color="amber"
                  label="Username"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Please input username',
                  ]"
                />
                <q-input
                  v-model="form.password"
                  dark
                  color="amber"
                  :type="isPwd ? 'password' : 'text'"
                  label="Password"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') ||
                      'Please input valid password',
                  ]"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
              </q-card-section>
              <q-card-section class="row">
                <div class="text-p text-bold text-white">
                  <q-checkbox
                    dark
                    dense
                    v-model="remember_me"
                    color="orange"
                    label="Remember Me"
                  />
                </div>
                <q-space />
                <q-btn
                  class="col-3"
                  no-caps
                  rounded
                  color="secondary"
                  type="submit"
                >
                  Login
                </q-btn>
              </q-card-section>
            </q-form>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { Cookies, Notify } from "quasar";
export default {
  beforeCreate() {
    if (this.$store.getters["auth/loggedIn"]) {
      this.$router.push("/dashboard");
    }
  },
  name: "Login",
  data() {
    return {
      remember_me: false,
      isPwd: true,
      form: {
        username: null,
        password: null,
        app_id: "uzzeet",
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.form.username != null && this.form.password != null) {
        this.$store
          .dispatch("auth/login", this.form)
          .then((response) => {
            if (response.data.response == 200) {
              this.$router.push("/dashboard");
            } else {
              this.$router.push("/login");
            }
          })
          .catch((err) => console.log(err));
      } else {
        this.$q.notify({
          color: "negative",
          position: "top-right",
          textColor: "white",
          icon: "warning",
          message: "Username and password required!",
        });
      }
    },
  },
};
</script>
<style>
@import "../css/login.css";
</style>
