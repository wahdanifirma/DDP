
<template>
  <div class="q-pa-md q-ml-xl q-mt-sm">
    <q-card class="my-card shadow-4">
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
          to="/vehicle"
        />
        <q-btn
          style="background-color: #f28c71"
          text-color="white"
          label="Save"
          @click="saveProduct"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>
<script>
export default {
  setup() {
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
};
</script>
<style>
.my-card {
  height: 845px;
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
