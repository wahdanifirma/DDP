<template>
  <q-page style="width: 1124px; margin: auto">
    <!-- tabel -->
    <div class="col-12 q-pa-sm q-mt-sm">
      <div
        class="q-pa-md dense text-right q-mt-xl bordered-top shadow-up-2"
        style="height: 85px; background-color: #fb8e71"
      >
        <div class="col-3">
          <!-- <q-btn
            class="q-ma-sm q-ml-md shadow-2"
            style="background-color: #f28c71"
            text-color="white"
            icon="settings"
            round
            no-caps
            @click="dialogAdd = true"
          /> -->
        </div>
        <div class="float-right">
          <div class="row">
            <q-btn
              class="q-ma-sm q-ml-md shadow-2"
              style="background-color: #f28c71"
              text-color="white"
              icon="settings"
              round
              no-caps
              to="/settingbtn"
            />
            <q-input
              color="white"
              v-model="search"
              class="q-ml-sm"
              style="width: 300px; height: 48px"
              filled
              bg-color="white"
              label="Search"
              type="text"
              @keyup.enter.prevent="getSearch"
              @keyup.prevent="getBlank"
            >
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
        </div>
      </div>
      <q-markup-table :search="search">
        <thead style="background-color: #f3f2f7">
          <!-- <th class="text-left text-white">
            #
          </th> -->
          <th class="table text-left text-black">Chassis Number</th>
          <th class="table text-left text-black">Realtime Endpoint Url</th>
          <th class="table text-left text-black">Realtime Endpoint Auth</th>
          <th class="table text-left text-black">Realtime Endpoint Status</th>
          <th class="table text-left text-black">Geo Endpoint Url</th>
          <th class="table text-left text-black">Geo Endpoint Auth</th>
          <th class="table text-left text-black">Realtime Endpoint Status</th>
          <th class="table text-left text-black">Action</th>
        </thead>
        <tbody class="bg-white">
          <tr v-for="users in user" :key="users.id" class="users">
            <!-- <td>{{ users.id }}</td> -->
            <td>{{ users.firstname }}</td>
            <td>{{ users.lastname }}</td>
            <td>{{ users.username }}</td>
            <td>{{ users.type_user }}</td>
            <td>{{ users.email }}</td>
            <td>{{ users.phone }}</td>
            <td>{{ users.address }}</td>
            <q-btn
              class="q-ma-xs shadow-2"
              style="background-color: #f28c71"
              text-color="white"
              icon="find_in_page"
              round
              no-caps
              to="/detailbtn"
            />
          </tr>
        </tbody>
      </q-markup-table>
      <div
        class="q-pa-md dense text-right bg-white bordered-bottom shadow-2"
        style="height: 85px"
        bordered
      >
        <div class="float-right q-mt-sm">
          <q-pagination
            v-model="current"
            color="deep-orange-4"
            :max="2"
            @click="changePage(current)"
          />
        </div>
        <!-- <div class="flex q-mt-md">
          1-20 <q-icon class="float-right q-ml-sm q-mt-xs" color="black" name="expand_more" /> <div class="q-ml-xs">
            1
          </div>
        </div> -->
      </div>
    </div>

    <!-- dialog setting -->
    <q-dialog v-model="dialogAdd">
      <q-card style="max-width: 100%; width: 787px; height: 849px">
        <q-card-section>
          <div class="text-h5 text-bold column q-ml-sm">Setting</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="row">
            <div class="col-3 text-subtitle2 q-mt-lg q-pt-md q-ml-md q-pl-sm">
              Realtime Endpoint Url
            </div>
            <q-input
              style="height: 44px; width: 501px"
              v-model="reusetting"
              class="q-mt-lg q-ml-lg q-pl-sm"
              outlined
              type="text"
            />
          </div>
          <div class="row q-mt-md">
            <div class="col-3 text-subtitle2 q-mt-lg q-pt-md q-ml-md q-pl-sm">
              Realtime Endpoint Auth
            </div>
            <q-input
              style="height: 44px; width: 501px"
              v-model="textrealtimesetting"
              class="q-ml-lg q-pl-sm q-mt-lg"
              outlined
              type="text"
            />
            <!-- <div class="q-pa-md field" style="max-width: 600px">
              <q-input v-model="textrealtimesetting" filled type="textarea" />
            </div> -->
          </div>
          <div class="row">
            <div class="col-3 text-subtitle2 q-mt-xl q-pt-md q-ml-lg">
              Realtime Endpoint Status
            </div>
            <q-btn-dropdown
              style="height: 50px; width: 495px"
              class="q-ml-lg q-pl-sm q-mt-xl"
              color="white"
              text-color="black"
              label="Select..."
              no-caps
            >
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Active</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Not Active</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div class="row">
            <div class="col-3 text-subtitle2 q-mt-lg q-pt-md q-ml-md q-pl-sm">
              Geo Endpoint Url
            </div>
            <q-input
              style="height: 44px; width: 501px"
              v-model="geusetting"
              class="q-ml-lg q-pl-sm q-mt-lg"
              outlined
              type="text"
            />
          </div>
          <div class="row">
            <div class="col-3 text-subtitle2 q-mt-lg q-pt-md q-ml-md q-pl-sm">
              Geo Endpoint Auth
            </div>
            <q-input
              style="height: 44px; width: 501px"
              v-model="textgeosetting"
              class="q-ml-lg q-pl-sm q-mt-lg"
              outlined
              type="text"
            />
            <!-- <div class="q-pa-md" style="max-width: 600px">
            <q-input v-model="textgeosetting" filled type="textarea" />
          </div> -->
          </div>
          <div class="row">
            <div class="col-3 text-subtitle2 q-mt-lg q-pt-md q-ml-lg">
              Geo Endpoint Status
            </div>
            <q-btn-dropdown
              style="height: 50px; width: 495px"
              class="q-ml-lg q-pl-sm q-mt-lg"
              color="white"
              text-color="black"
              label="Select..."
              no-caps
            >
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Active</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Not Active</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div class="row">
            <div class="col-3 text-subtitle2 q-mt-lg q-pt-md q-ml-md q-pl-sm">
              Event
            </div>
            <div class="q-ml-md q-pl-xs q-mt-lg">
              <div class="q-gutter-md">
                <q-radio v-model="shape" val="line" label="Realtime" />
              </div>
              <div class="q-gutter-sm">
                <q-radio v-model="shape" val="rectangle" label="Crash" />
              </div>
              <div class="q-gutter-sm">
                <q-radio v-model="shape" val="ellipse" label="Ignition On" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-3 text-subtitle2 q-mt-lg q-pt-md q-ml-lg">
              Custome Field
            </div>
            <q-input
              style="height: 44px; width: 501px"
              v-model="textfieldsetting"
              class="q-ml-md q-pl-xs q-mt-lg"
              outlined
              type="text"
            />
            <!-- <div class="q-pa-md" style="max-width: 600px">
            <q-input v-model="textfieldsetting" filled type="textarea" />
          </div> -->
          </div>
        </q-card-section>

        <q-separator class="q-mt-lg" />
        <q-card-actions align="right" class="text-primary q-mt-sm q-mr-md">
          <q-btn
            style="background-color: #f28c71"
            text-color="white"
            label="Close"
            @click="dialogAdd = false"
          />
          <q-btn
            style="background-color: #f28c71"
            text-color="white"
            label="Save"
            @click="saveProduct"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- dialog detail vehicle -->
    <q-dialog v-model="dialogVehicle">
      <q-card style="max-width: 100%; width: 787px; height: 849px">
        <q-card-section>
          <div class="text-h5 text-bold column q-ml-sm">Detail Vehicle</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="row">
            <div class="col-3 text-subtitle2 q-mt-lg q-pt-md q-ml-md q-pl-sm">
              Realtime Endpoint Url
            </div>
            <q-input
              style="height: 44px; width: 501px"
              v-model="reudetail"
              class="q-mt-lg q-ml-lg q-pl-sm"
              outlined
              type="text"
            />
          </div>
          <div class="row q-mt-md">
            <div class="col-3 text-subtitle2 q-mt-lg q-pt-md q-ml-md q-pl-sm">
              Realtime Endpoint Auth
            </div>
            <q-input
              style="height: 44px; width: 501px"
              v-model="textrealtimedetail"
              class="q-ml-lg q-pl-sm q-mt-lg"
              outlined
              type="text"
            />
            <!-- <div class="q-pa-md field" style="max-width: 600px">
              <q-input v-model="textrealtimesetting" filled type="textarea" />
            </div> -->
          </div>
          <div class="row">
            <div class="col-3 text-subtitle2 q-mt-xl q-pt-md q-ml-lg">
              Realtime Endpoint Status
            </div>
            <q-btn-dropdown
              style="height: 50px; width: 495px"
              class="q-ml-lg q-pl-sm q-mt-xl"
              color="white"
              outlined
              text-color="black"
              label="Select..."
              no-caps
            >
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Active</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Not Active</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div class="row">
            <div class="col-3 text-subtitle2 q-mt-lg q-pt-md q-ml-md q-pl-sm">
              Geo Endpoint Url
            </div>
            <q-input
              style="height: 44px; width: 501px"
              v-model="geudetail"
              class="q-ml-lg q-pl-sm q-mt-lg"
              outlined
              type="text"
            />
          </div>
          <div class="row">
            <div class="col-3 text-subtitle2 q-mt-lg q-pt-md q-ml-md q-pl-sm">
              Geo Endpoint Auth
            </div>
            <q-input
              style="height: 44px; width: 501px"
              v-model="textgeodetail"
              class="q-ml-lg q-pl-sm q-mt-lg"
              outlined
              type="text"
            />
            <!-- <div class="q-pa-md" style="max-width: 600px">
            <q-input v-model="textgeosetting" filled type="textarea" />
          </div> -->
          </div>
          <div class="row">
            <div class="col-3 text-subtitle2 q-mt-lg q-pt-md q-ml-lg">
              Geo Endpoint Status
            </div>
            <q-btn-dropdown
              style="height: 50px; width: 495px"
              class="q-ml-lg q-pl-sm q-mt-lg"
              color="white"
              outlined
              text-color="black"
              label="Select..."
              no-caps
            >
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Active</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Not Active</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div class="row">
            <div class="col-3 text-subtitle2 q-mt-lg q-pt-md q-ml-md q-pl-sm">
              Event
            </div>
            <div class="q-ml-md q-pl-xs q-mt-lg">
              <div class="q-gutter-md">
                <q-radio v-model="shape" val="line" label="Realtime" />
              </div>
              <div class="q-gutter-sm">
                <q-radio v-model="shape" val="rectangle" label="Crash" />
              </div>
              <div class="q-gutter-sm">
                <q-radio v-model="shape" val="ellipse" label="Ignition On" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-3 text-subtitle2 q-mt-lg q-pt-md q-ml-lg">
              Custome Field
            </div>
            <q-input
              style="height: 44px; width: 501px"
              v-model="textfielddetail"
              class="q-ml-md q-pl-xs q-mt-lg"
              outlined
              type="text"
            />
            <!-- <div class="q-pa-md" style="max-width: 600px">
            <q-input v-model="textfieldsetting" filled type="textarea" />
          </div> -->
          </div>
        </q-card-section>

        <q-separator class="q-mt-lg" />
        <q-card-actions align="right" class="text-primary q-mt-sm q-mr-md">
          <q-btn
            class="shadow-2"
            style="background-color: #f28c71"
            text-color="white"
            label="Close"
            @click="dialogVehicle = false"
          />
          <q-btn
            class="shadow-2"
            style="background-color: #f28c71"
            text-color="white"
            label="Save"
            @click="saveProduct"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
import axios from "axios";
export default {
  name: "Account",
  data() {
    return {
      user: [],
      reusetting: "",
      textrealtimesetting: "",
      ressetting: "",
      geusetting: "",
      textgeosetting: "",
      ressetting: "",
      eventsetting: "",
      textfieldsetting: "",
      reudetail: "",
      textrealtimedetail: "",
      resdetail: "",
      geudetail: "",
      textgeodetail: "",
      gesdetail: "",
      eventdetail: "",
      textfielddetail: "",
      dialogAdd: false,
      dialogVehicle: false,
      shape: "line",
      search: "",
      datausers: "",
      prePage: 10,
      current: 1,
    };
  },
  computed: {
    // filteredList () {
    //   // cu1 filter 0~5
    //   // cu2 filter 6~10
    //   // (x-1)*n  .. x * n
    //   console.log('this.current', this.current)
    //   const star = (this.current - 1) * this.prePage
    //   const end = this.current * this.prePage
    //   console.log(star, end)
    //   console.log('computed', this.user)
    //   console.log('data', this.user.slice(star, end))
    //   const data = this.user.slice(star, end)
    //   return data
    // }
    // filteredPhotoFeed () {
    //   var users = this.user
    //   var authorNameSearchString = this.authorNameSearchString
    //   if (!authorNameSearchString) {
    //     return users
    //   }
    //   // searchString = authorNameSearchString.trim().toLowerCase()
    //   users = users.filter(function (data) {
    //     if (data.author.toLowerCase().indexOf(authorNameSearchString) !== -1) {
    //       return data
    //     }
    //   })
    //   return users
    // }
    // filterclient () {
    //   if (!this.search) return this.user
    //   return this.user.filter(users => {
    //     return users.firstname.toLowerCase().includes(this.search.toLowerCase())
    //   })
    // }
  },
  // watch: {
  //   search (value) {
  //     this.doSearch(value)
  //   }
  // },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts: function () {
      axios
        .get(
          "https://extengine.classmiles.com/devapi_its/user/all_user?page=1&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiZGF0ZSI6IjIwMjItMDMtMTYgMTA6MjQ6NDIifQ.zDir8hG-TAuZ9WHRViHm9xbA65dU0tHpVnxt1D0QOBE"
        )
        .then((res) => {
          this.user = res.data.data;
          const star = (this.current - 1) * this.prePage;
          console.log(star);
          const end = this.current * this.prePage;
          console.log(end);
          this.user = this.user
            .filter((users) => {
              return users.firstname
                .toLowerCase()
                .includes(this.search.toLowerCase());
            })
            .slice(star, end);
          // console.log('data', this.user)
        })
        .catch((err) => {
          // handle error
          console.log(err);
        });
    },
    saveProduct: function () {
      const form = new FormData();
      form.append("firstname", this.Firstname);
      form.append("lastname", this.Lastname);
      form.append("username", this.Username);
      form.append("type_user", this.TypeUser);
      form.append("email", this.Email);
      form.append("phone", this.Phone);
      form.append("address", this.Address);
      console.log(form);
      axios
        .post(
          "https://extengine.classmiles.com/devapi_its/login/register?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiZGF0ZSI6IjIwMjItMDMtMTYgMTA6MjQ6NDIifQ.zDir8hG-TAuZ9WHRViHm9xbA65dU0tHpVnxt1D0QOBE",
          form
        )
        .then((res) => {
          // handle success
          this.getProducts();
          this.user = res.data.data;
          this.Firstname = "";
          this.Lastname = "";
          this.Username = "";
          this.Password = "";
          this.TypeUser = "";
          this.Email = "";
          this.Phone = "";
          this.Address = "";
          this.dialogAdd = false;
        })
        .catch((err) => {
          // handle error
          console.log(err);
        });
    },
    getEdit: function (users) {
      this.dialogEdit = true;
      this.Editid = users.id;
      console.log(this.Editid);
      this.Editfirstname = users.firstname;
      this.Editlastname = users.lastname;
      this.Editusername = users.username;
      this.Edittype_user = users.type_user;
      this.Editemail = users.email;
      this.Editphone = users.phone;
      this.Editaddress = users.address;
      this.Editstatus = users.status;
    },
    updateProduct: function () {
      console.log("updateProduct", this.Editid);
      axios
        .post(
          "https://extengine.classmiles.com/devapi_its/user/update_user?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiZGF0ZSI6IjIwMjItMDMtMTYgMTA6MjQ6NDIifQ.zDir8hG-TAuZ9WHRViHm9xbA65dU0tHpVnxt1D0QOBE",
          {
            id: this.Editid,
            firstname: this.Editfirstname,
            lastname: this.Editlastname,
            username: this.Editusername,
            type_user: this.Edittype_user,
            email: this.Editemail,
            phone: this.Editphone,
            address: this.Editaddress,
            status: this.Editstatus,
          }
        )
        .then((res) => {
          // handle success
          this.getProducts();
          this.dialogEdit = false;
        })
        .catch((err) => {
          // handle error
          console.log(err);
        });
    },
    getDelete: function (users) {
      this.dialogDelete = true;
      this.DeleteId = users.id;
    },
    deleteProduct: function () {
      axios
        .post(
          "https://extengine.classmiles.com/devapi_its/user/delete_user?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiZGF0ZSI6IjIwMjItMDMtMTYgMTA6MjQ6NDIifQ.zDir8hG-TAuZ9WHRViHm9xbA65dU0tHpVnxt1D0QOBE",
          {
            id: this.DeleteId,
          }
        )

        .then((res) => {
          // handle success
          this.getProducts();
          this.dialogDelete = false;
        })
        .catch((err) => {
          // handle error
          console.log(err);
        });
    },
    changePage: function (num) {
      console.log("num", num);
      console.log("this.current", this.current);
      this.current = num;
      this.getProducts();
    },
    fs: function () {
      const form = new FormData();
      form.append("firstname", this.search);
      form.append("lastname", this.search);
      form.append("username", this.search);
      form.append("type_user", this.search);
      form.append("email", this.search);
      form.append("phone", this.search);
      form.append("address", this.search);
      console.log(form);
      axios
        .get(
          "https://extengine.classmiles.com/devapi_its/login/register?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiZGF0ZSI6IjIwMjItMDMtMTYgMTA6MjQ6NDIifQ.zDir8hG-TAuZ9WHRViHm9xbA65dU0tHpVnxt1D0QOBE",
          form
        )
        .then((res) => {
          // handle success
          this.user = res.data.data;
          this.search = "";
        })
        .catch((err) => {
          // handle error
          console.log(err);
        });
    },
    getSearch: function () {
      console.log(this.search);
      this.getProducts();
    },
    getBlank: function () {
      console.log(this.search);
      if (this.search === "") {
        this.getProducts();
      }
    },
  },
};
</script>
<style>
.table {
  height: 58px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

.bordered-top{
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.bordered-bottom{
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
