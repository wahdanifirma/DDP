<template>
  <q-page style="width: 900px; margin: auto">
    <div class="q-pa-md q-ml-xl q-pl-xl">
      <q-card class="my-card shadow-4">
        <q-card-section>
          <div class="text-h5 text-bold q-ml-lg q-mt-md">User Setting</div>
          <div class="text-subtitle q-mt-xs q-ml-lg text-grey">
            Info about edit user dan reset password.
          </div>
          <br />
          <div class="column items-center">
            <q-card class="card-inside shadow-4">
              <q-card-section>
                <div class="text-subtitle1 text-bold">Edit User</div>
              </q-card-section>
              <q-separator />
              <q-card-section>
                <div class="row">
                  <div class="col-3 text-subtitle2 text-grey q-mt-md">
                    Username
                  </div>
                  <div class="col-7">
                    <q-input
                      style="width: 520px; height: 44px"
                      filled
                      v-model="username"
                    />
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="row">
                  <div class="col-3 text-subtitle2 text-grey q-mt-md">
                    Email
                  </div>
                  <div class="col-7">
                    <q-input
                      style="width: 520px; height: 44px"
                      filled
                      v-model="email"
                    />
                  </div>
                </div>
              </q-card-section>
              <q-separator class="q-mt-sm" />
              <q-card-section align="right">
                <div class="text-subtitle2 text-bold">
                  <q-btn
                    no-caps
                    style="background-color: #fb8e71"
                    text-color="white"
                    label="Save"
                    class="shadow-2"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>
          <br />
          <div class="column items-center">
            <q-card class="card-insidee shadow-4">
              <q-card-section>
                <div class="text-subtitle1 text-bold">Reset Password</div>
              </q-card-section>
              <q-separator />
              <q-card-section>
                <div class="row">
                  <div class="col-3 text-subtitle2 text-grey q-mt-md">
                    Current Password
                  </div>
                  <div class="col-7">
                    <q-input
                      style="width: 520px; height: 44px"
                      filled
                      v-model="currentpassword"
                    />
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="row">
                  <div class="col-3 text-subtitle2 text-grey q-mt-md">
                    New Password
                  </div>
                  <div class="col-7">
                    <q-input
                      style="width: 520px; height: 44px"
                      filled
                      v-model="newpassword"
                    />
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="row">
                  <div class="col-3 text-subtitle2 text-grey q-mt-md">
                    Confirm Password
                  </div>
                  <div class="col-7">
                    <q-input
                      style="width: 520px; height: 44px"
                      filled
                      v-model="confirmpassword"
                    />
                  </div>
                </div>
              </q-card-section>

              <q-separator />
              <q-card-section align="right">
                <div class="text-subtitle2 text-bold">
                  <q-btn
                    no-caps
                    style="background-color: #fb8e71"
                    text-color="white"
                    label="Save"
                    class="shadow-2"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script>
export default {
  setup() {
    return {
      username: "",
      email: "",
      currentpassword: "",
      newpassword: "",
      confirmpassword: "",
    };
  },
};
</script>
<style>
.my-card {
  height: 787px;
  width: 815px;
}
.card-inside {
  height: 287px;
  width: 720px;
}
.card-insidee {
  height: 351px;
  width: 720px;
}
</style>
