<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card class="mx-auto" v-if="cars && cars.length > 0">
        <v-system-bar color="indigo darken-2" dark>Cars</v-system-bar>

        <v-toolbar color="indigo" dark>
          <v-row justify="space-between">
            <v-spacer />
            <v-btn-toggle v-model="text" tile color="green accent-3" group>
              <v-btn
                v-for="(car, index) in cars"
                :key="'btnname-'+index"
                class="ma-2"
                @click="selectCar(index)"
              >
                <v-icon left dark>mdi-car</v-icon>
                <span class="hidden-md-and-down">{{car.name}}</span>
              </v-btn>              
              <!--
              <v-btn class="ma-2" @click="resetSelection()">
                <v-icon left dark>mdi-close</v-icon>Deselect
              </v-btn>
              -->
            </v-btn-toggle>
            <v-spacer />
          </v-row>
        </v-toolbar>

        <v-container v-if="selectedCar" fluid class="pt-0">
          <v-row justify="space-between" style="background:#37474F">
            <v-col xs12>
              <v-container fluid>
                <span class="pl-5">
                  <b>{{selection.name}}</b>
                </span>
                <span class="pl-5">Seats: {{selection.seats}}</span>
                <span class="pl-5">{{ selection.convertible ? "convertible" : "" }}</span>
              </v-container>
            </v-col>
          </v-row>

          <v-row justify="space-between" style="background:#546E7A" class="boxshadow">
            <v-col xs12 justify="space-between">
              <v-spacer />
              <v-btn-toggle v-model="property" tile class="property" color="lime accent-3" group>
                <v-btn class="text-left property" @click="showTrimLevels()">
                  <v-icon left dark>mdi-seal</v-icon>
                  <span class="hidden-md-and-down">Trim Levels</span>
                  <v-spacer />
                </v-btn>
                <v-btn class="text-left property" @click="showWheels()">
                  <v-icon left dark>mdi-adjust</v-icon>
                  <span class="hidden-md-and-down">Wheels</span>
                  <v-spacer />
                </v-btn>
                <v-btn class="text-left property" @click="showPaints()">
                  <v-icon left dark>mdi-format-paint</v-icon>
                  <span class="hidden-md-and-down">Paint</span>
                  <v-spacer />
                </v-btn>
                <v-btn class="text-left property" @click="showExtras()">
                  <v-icon left dark>mdi-playlist-plus</v-icon>
                  <span class="hidden-md-and-down">Extras</span>
                  <v-spacer />
                </v-btn>
              </v-btn-toggle>
              <v-spacer />
            </v-col>
          </v-row>

          <!-- Multiple Properties -->
          <v-row justify="space-between">
            <v-col xs12>
              <v-container fluid>
                <!-- Trim Levels -->
                <v-row justify="space-between" v-if="showOptions == 'trim'">
                  <v-col xs12>
                    <h3 class="pl-0 mb-3">Trim Levels</h3>
                    <v-btn
                      block
                      class="text-left mb-3"
                      v-for="(trim, index) in getTrimLevels(selection.index)"
                      :key="'trim-'+index"
                      @click="selectTrimLevel(trim.name)"
                    >
                      <span>{{trim.name}}</span> 
                      <v-spacer />
                      <span>{{ currencyFormat(trim.price) }}</span>
                    </v-btn>
                  </v-col>
                </v-row>

                <!-- Wheels -->
                <v-row justify="space-between" v-if="showOptions == 'wheels'">
                  <v-col xs12>
                    <h3 class="pl-0 mb-3">Wheels</h3>
                    <v-btn
                      block
                      class="text-left mb-3"
                      v-for="(wheel, index) in getWheels(selection.index)"
                      :key="'whell-'+index"
                      @click="selectWheel(wheel.name)"
                    >
                      <span>{{wheel.name}}</span>
                      <v-spacer />
                      <span>{{ currencyFormat(wheel.price) }}</span>
                    </v-btn>
                  </v-col>
                </v-row>

                <!-- Paint -->
                <v-row justify="space-between" v-if="showOptions == 'paint'">
                  <v-col xs12>
                    <h3 class="pl-0 mb-3">Paint</h3>
                    <v-btn
                      block
                      class="text-left mb-3"
                      v-for="(paint, index) in getPaint(selection.index)"
                      :key="'paint-'+index"
                      @click="selectPaint(paint.name)"
                    >
                      <span>{{paint.name}}</span>
                      <v-spacer />
                      <span>{{ currencyFormat(paint.price) }}</span>
                    </v-btn>
                  </v-col>
                </v-row>

                <!-- Extras -->
                <v-row justify="space-between" v-if="showOptions == 'extras'">
                  <v-col xs12>
                    <h3 class="pl-0 mb-3">Extras</h3>
                    <v-btn
                      block
                      class="text-left mb-3"
                      v-for="(extra, index) in getExtras(selection.index)"
                      :key="'extra-'+index"
                      @click="selectExtras(extra.name)"
                    >
                      <span>{{extra.name}}</span>
                      <v-spacer />
                      <span>{{ currencyFormat(extra.price) }}</span>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "index-page",
  components: {
    Logo,
  },
  data() {
    return {
      selectedCar: null,
      text: "",
      property: "",
      selection: {
        index: -1,
        name: "",
        seats: undefined,
        convertible: false,
        trimLevels: undefined,
        wheels: undefined,
        paint: undefined,
        extras: undefined,
      },
      showOptions: undefined,
    };
  },
  computed: {
    ...mapState({
      cars: (state) => state.interface.cars,
    }),
    ...mapGetters({
      getTrimLevels: "interface/getTrimLevels",
      getWheels: "interface/getWheels",
      getPaint: "interface/getPaint",
      getExtras: "interface/getExtras",
    }),
  },
  methods: {
    selectCar(index) {
      this.selectedCar == index + 1
        ? this.resetSelection()
        : (this.selectedCar = index + 1);
      if (this.selectedCar) {
        this.selection.index = index;
        this.selection.name = this.cars[index].name;
        this.selection.seats = this.cars[index].seats;
        this.selection.convertible = this.cars[index].convertible;
      }
      //this.showOptions = undefined;
      this.resetOptions();
    },
    resetSelection() {
      this.selectedCar = null;
      this.selection = {
        name: "",
        seats: undefined,
        convertible: false,
        trimLevels: undefined,
        wheels: undefined,
        paint: undefined,
        extras: undefined,
      };
    },
    resetOptions() {
      this.selection.trimLevels = undefined;
      this.selection.wheels = undefined;
      this.selection.paint = undefined;
      this.selection.extras = undefined;
    },
    showTrimLevels() {
      this.showOptions == "trim"
        ? (this.showOptions = undefined)
        : (this.showOptions = "trim");
      if (!this.showOptions) this.resetOptions();
    },
    showWheels() {
      this.showOptions == "wheels"
        ? (this.showOptions = undefined)
        : (this.showOptions = "wheels");
      if (!this.showOptions) this.resetOptions();
    },
    showPaints() {
      this.showOptions == "paint"
        ? (this.showOptions = undefined)
        : (this.showOptions = "paint");
      if (!this.showOptions) this.resetOptions();
    },
    showExtras() {
      this.showOptions == "extras"
        ? (this.showOptions = undefined)
        : (this.showOptions = "extras");
      if (!this.showOptions) this.resetOptions();
    },
    selectTrimLevel(name) {
      this.selection.trimLevels == name;
    },
    selectWheel(name) {
      this.selection.wheels == name;
    },
    selectPaint(name) {
      this.selection.paint == name;
    },
    selectExtras(name) {
      this.selection.extras == name;
    },
    carNameBtnClass(index) {
      let className = "ma-2";
      if (index == this.selectedCar) className = "ma-2 selected-car";
      return className;
    },
    currencyFormat: function (num) {
      return "$" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
  },
};
</script>

<style>
.selected-car {
  background-color: darkseagreen !important;
}
.btn-toggle {
  flex-direction: column;
}
.boxshadow {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
</style>