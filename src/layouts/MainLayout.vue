<template>
  <q-layout view="hHh LpR lFr" style="background-color: #f9f7f1">
    <!-- header -->
    <q-header
      class="header text-grey-8 shadow-4"
      style="background-color: #fb8e71"
    >
      <q-toolbar class="GNL__toolbar">
        <div class="row">
          <div class="col-6">
            <q-btn flat round dense class="q-ml-md q-mt-lg">
              <img
                src="~/assets/dot.png"
                style="height: 20px; witdh: 20px"
                flat
                dense
                round
                @click="miniState = !miniState"
              />
            </q-btn>
          </div>
        </div>
        <q-img
          src="~/assets/runner.png"
          spinner-color="white"
          style="height: 50px; max-width: 150px"
          img-class="my-custom-image"
          class="rounded-borders q-ml-md q-mt-md"
        />
        <q-breadcrumbs class="text-white q-mt-lg q-ml-md" active-color="white">
          <template v-slot:separator>
            <q-icon size="1.2em" name="chevron_right" color="white" />
          </template>

          <q-breadcrumbs-el icon="home" />
          <q-breadcrumbs-el label="Dashboard" />
        </q-breadcrumbs>
        <q-space />

        <div class="q-mt-xs">
          <q-btn flat round dense class="q-ml-lg">
            <img src="~/assets/Ellipse.svg" style="height: 40px; width: 45px" />
            <q-menu style="background-color: #fb8e71" fit :offset="[27, 25]">
              <div class="row no-wrap q-pa-md">
                <div class="column items-center">
                  <q-avatar class="q-mt-lg" size="50px">
                    <img src="~/assets/Ellipse.svg" />
                  </q-avatar>

                  <div class="q-mt-md text-subtitle2 text-bold">
                    PT. Lorem Ipsum
                  </div>
                  <div class="q-mt-xs text-caption text-grey">
                    administrator@loremipsum.com
                  </div>

                  <q-btn
                    class="q-mt-xl shadow-2"
                    style="
                      width: 104px;
                      height: 34px;
                      background-color: #f28c71;
                    "
                    text-color="white"
                    label="Sign Out"
                    to="/logout"
                    click
                    no-caps
                  />

                  <q-separator />

                  <!-- <div class="text-caption text-grey q-mt-lg">
                    Disclaimer • Term of Use • Privacy Policy
                  </div> -->

                  <q-separator />

                  <!-- <img
                    class="q-mt-lg"
                    src="~/assets/KTB.png"
                  > -->
                </div>
              </div>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- menu drawer -->
    <q-drawer
      v-model="drawer"
      :mini="!drawer || miniState"
      show-if-above
      :width="280"
      :breakpoint="500"
      class="navbar"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <div class="q-mt-md">
            <q-item class="GNL__drawer-item" v-ripple to="/dashboard" clickable>
              <q-item-section avatar>
                <img
                  class="q-mr-lg"
                  src="~/assets/icon/dashboard.svg"
                  style="height: 20px; width: 45px"
                />
              </q-item-section>

              <q-item-section> Dashboard </q-item-section>
            </q-item>

            <q-item
              class="GNL__drawer-item q-mt-xs"
              v-ripple
              clickable
              to="/vehicle"
            >
              <q-item-section avatar>
                <img
                  class="q-mr-lg"
                  src="~/assets/menu/truck.svg"
                  style="height: 20px; width: 45px"
                />
              </q-item-section>

              <q-item-section> Vehicles </q-item-section>
            </q-item>
            <!-- <q-separator inset class="q-ml-xl" /> -->
          </div>
          <div class="q-mt-xs">
            <q-item
              class="GNL__drawer-item q-mt-xs"
              v-ripple
              clickable
              to="/setting"
            >
              <q-item-section avatar>
                <img
                  class="q-mr-lg"
                  src="~/assets/menu/user.svg"
                  style="height: 20px; width: 45px"
                />
              </q-item-section>

              <q-item-section> User Setting </q-item-section>
            </q-item>
            <q-item
              class="GNL__drawer-item q-mt-xs"
              v-ripple
              clickable
              @click="logout = true"
            >
              <q-item-section avatar>
                <img
                  class="q-mr-lg"
                  src="~/assets/menu/logout.svg"
                  style="height: 20px; width: 45px"
                />
              </q-item-section>

              <q-item-section> Logout </q-item-section>
            </q-item>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <!-- logout dialog -->
    <q-dialog v-model="logout">
      <q-card style="width: 612px; max-width: 80vw; background-color: #f28c71">
        <q-card-section>
          <div class="text-h6 text-white text-bold">Apakah anda yakin untuk keluar?</div>
        </q-card-section>

        <q-card-actions align="left" class="bg-white text-black" style="height: 100px">
          <div class="text-subtitle q-ml-xs">
            Klik tombol "logout" untuk keluar dari website ini
          </div>
        </q-card-actions>

        <q-separator color="black" />
        <q-card-actions align="right" class="bg-white text-black">
          <q-btn no-caps text-color="white" class="shadow-2 q-mt-xs q-mb-sm q-mr-sm text-bold" style="width: 100px; background-color:#f28c71" label="Cancel" v-close-popup />
          <q-btn no-caps text-color="white" class="shadow-2 q-mt-xs q-mb-sm q-mr-sm text-bold" style="width: 100px; background-color:#f28c71" label="Logout" to="/logout" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-page-sticky position="bottom-right" :offset="[16, 16]">
      <q-btn fab-mini color="green">
        <img src="~/assets/Wa.png" />
        <q-menu
          fit
          content-class="bg-green text-white"
          anchor="bottom right"
          self="bottom right"
        >
          <div class="row no-wrap q-pa-md">
            <div class="column items-center">
              <div class="row q-pa-xs">
                <div class="text-subtitle1 q-mr-xl q-pr-sm text-bold">Butuh Bantuan?</div>
                <div class="float-right">
                  <img src="~/assets/Wa.png" />
                </div>
              </div>
              <q-separator vertical inset class="q-mx-lg" />

              <div class="row no-wrap q-pa-xs">
                <div class="column items-center">
                  <div class="text-caption">
                    Silahkan menghubungi Call Center <br />
                    kami untuk bantuan lebih lanjut.
                  </div>
                </div>
              </div>

              <q-btn
                class="q-mt-md close"
                style="width: 200px; height: 34px"
                outline
                color="green"
                text-color="white"
                label="081-23000-1234"
                no-caps
              />
              <q-btn
                class="q-mt-md close"
                style="width: 200px; height: 34px"
                outline
                color="green"
                text-color="white"
                label="081-23000-1234"
                no-caps
              />
              <div class="row no-wrap q-pa-xs">
                <div class="column">
                  <div class="text-caption text-bold q-mt-sm q-mr-xl q-pr-xl q-pl-xs">
                    Tidak, terma kasih
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-menu>
      </q-btn>
    </q-page-sticky>
  </q-layout>
</template>
<script>
export default {
  name: "Layout",
  setup() {
    // $q.screen.setSizes({ sm: 300, md: 500, lg: 1000, xl: 2000 })

    // const leftDrawerOpen = (false)
    // const miniState = (false)

    return {
      // leftDrawerOpen,
      // toggleLeftDrawer () {
      //   leftDrawerOpen.value = !leftDrawerOpen.value
      // },
      // miniState,
      // toogleMiniState () {
      //   miniState.value = !miniState.value
      // },
      sizes: ["xs"],
      drawerRight: false,
      drawerKanan: false,
      search: "",
      showAdvanced: false,
      showDateOptions: false,
      exactPhrase: "",
      hasWords: "",
      excludeWords: "",
      byWebsite: "",
      byDate: "Any time",
      drawer: false,
      drawerr: false,
      setting: false,
      logout: false,
      settingmenu: false,
      miniState: false,
    };
  },
  mounted() {
    this.backgroundToggle();
  },
  method: {
    // backgroundToggle: function () {
    // let list = document.querySelectorAll('.list')
    // for (let i=0 i<list.length; i++){
    //   list [i].onclick = function(){
    //     let j = 0;
    //     while(j < list.length){
    //       list[j++].classname = 'list';
    //     }
    //     list[i].className = 'list active'
    //   }
    // }
    // // let menuToggle = document.querySelector('.GNL__drawer-item')
    // // menuToggle.onclick = function() {
    // // menuToggle.classList.toggle('active')
    // }
  },
};
</script>
<style>
/* .GNL__toolbar {
  height: 64px;
}

.GNL__toolbar-input {
  width: 55%;
} */

.GNL__drawer-item {
  line-height: 20px;
  border-radius: 12px;
  margin-right: 10px;
  margin-left: 10px;
  text-decoration: none;
  transition: all 0.4s ease;
}

.GNL__drawer-item q-item.active {
  background: #fb8e71;
}

.GNL__drawer-item .q-item__section--avatar .q-icon {
  color: #5f6368;
  background: #fb8e71;
}

.GNL__drawer-item .q-item__label {
  color: #3c4043;
  letter-spacing: 0.01785714em;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  transition: all 0.4s ease;
}

/* .GNL__drawer-footer-link {
  color: inherit;
  text-decoration: none;
  font-weight: 500;
  font-size: .75rem;
}

.GNL__drawer-footer-link:hover {
  color: #000;
} */
.header {
  height: 80px;
}
.navbar {
  background-color: blue;
  transition: all 0.4s ease;
}
.logout-pop {
  width: 612px;
  height: 210px;
}
</style>
