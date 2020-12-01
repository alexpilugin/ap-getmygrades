<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card class="mx-auto d-flex flex-column" v-if="cars && cars.length > 0">
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
          <!--
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
          -->

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
                      @click="selectTrimLevel(trim)"
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
                      @click="selectWheel(wheel)"
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
                      @click="selectPaint(paint)"
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
                      @click="selectExtras(extra)"
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

        <!-- Basket -->
        <v-card-actions style="background:#37474F">
          <v-col>
            
            <!-- Selected Car -->
            <v-row v-if="selectedCar">
              <v-flex xs10>
                <v-container fluid>
                  <div>
                    <v-icon dark>mdi-car</v-icon>
                    <span class="pl-5">
                      <b>{{selection.name}}</b>
                    </span>
                    <span class="pl-5 hidden-md-and-down">Seats: {{selection.seats}}</span>
                    <span class="pl-5 hidden-md-and-down">{{ selection.convertible ? "convertible" : "" }}</span>
                    </div>
                </v-container>
              </v-flex>

              <v-flex xs2>
                <v-btn icon @click="resetSelection()">
                  <v-icon dark>mdi-delete-circle-outline</v-icon>
                </v-btn>
              </v-flex>
            </v-row>

            <!-- Selected Trim Levels -->
            <v-row v-if="selection.trimLevels" class="top-border">
              <v-flex xs10>
                <v-container fluid>
                  <div>
                     <v-icon left dark>mdi-seal</v-icon>
                      <span class="pl-5 hidden-md-and-down">{{selection.trimLevels}}</span>
                      <span class="pl-5">{{ currencyFormat(selection.trimLevelsPrice) }}</span>
                    </div>
                </v-container>
              </v-flex>

              <v-flex xs2>
                <v-btn icon @click="removeSelectedTrimLevels()">
                  <v-icon dark>mdi-delete-circle-outline</v-icon>
                </v-btn>
              </v-flex>
            </v-row>

            <!-- Selected Wheels -->
            <v-row v-if="selection.wheels" class="top-border">
              <v-flex xs10>
                <v-container fluid>
                  <div>
                    <v-icon left dark>mdi-adjust</v-icon>
                      <span class="pl-5 hidden-md-and-down">{{ selection.wheels }}</span>
                      <span class="pl-5">{{ currencyFormat(selection.wheelsPrice) }}</span>
                    </div>
                </v-container>
              </v-flex>

              <v-flex xs2>
                <v-btn icon @click="removeSelectedWheels()">
                  <v-icon dark>mdi-delete-circle-outline</v-icon>
                </v-btn>
              </v-flex>
            </v-row>

            <!-- Selected Paint -->
            <v-row v-if="selection.paint" class="top-border">
              <v-flex xs10>
                <v-container fluid>
                  <div>
                    <v-icon left dark>mdi-format-paint</v-icon>
                      <span class="pl-5 hidden-md-and-down">{{ selection.paint }}</span>
                      <span class="pl-5">{{ currencyFormat(selection.paintPrice) }}</span>
                    </div>
                </v-container>
              </v-flex>

              <v-flex xs2>
                <v-btn icon @click="removeSelectedPaint()">
                  <v-icon dark>mdi-delete-circle-outline</v-icon>
                </v-btn>
              </v-flex>
            </v-row>

            <!-- Selected Extras -->
            <v-row v-if="selection.extras" class="top-border">
              <v-flex xs10>
                <v-container fluid>
                  <div>
                    <v-icon left dark>mdi-playlist-plus</v-icon>
                    <span class="pl-5 hidden-md-and-down">{{ selection.extras }}</span>
                    <span class="pl-5">{{ currencyFormat(selection.extrasPrice) }}</span>
                    </div>
                </v-container>
              </v-flex>

              <v-flex xs2>
                <v-btn icon @click="removeSelectedExtras()">
                  <v-icon dark>mdi-delete-circle-outline</v-icon>
                </v-btn>
              </v-flex>
            </v-row>

            <!-- Total Price -->
            <v-row v-if="selectedCar" class="top-border">
              <v-flex xs8>
                <h2 class="pl-5">Total:</h2>
              </v-flex>
              <v-flex xs4>
                <h2>{{ totalPrice }}</h2>
              </v-flex>
            </v-row>
          </v-col>
        </v-card-actions>

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
        trimLevelsPrice: 0,
        wheelsPrice: 0,
        paintPrice: 0,
        extrasPrice: 0
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
    totalPrice() {
      var total = this.selection.trimLevelsPrice 
                      + this.selection.wheelsPrice 
                      + this.selection.paintPrice 
                      + this.selection.extrasPrice;
      return this.currencyFormat(total);
    }
  },
  methods: {
    selectCar(index) {
      //this.showOptions = undefined;
      this.resetSelection();
      this.selectedCar == index + 1
        ? this.resetSelection()
        : (this.selectedCar = index + 1);
      if (this.selectedCar) {
        this.selection.index = index;
        this.selection.name = this.cars[index].name;
        this.selection.seats = this.cars[index].seats;
        this.selection.convertible = this.cars[index].convertible;
      }
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
        trimLevelsPrice: 0,
        wheelsPrice: 0,
        paintPrice: 0,
        extrasPrice: 0
      };
    },
    resetOptions() {
      this.selection.trimLevels = undefined;
      this.selection.wheels = undefined;
      this.selection.paint = undefined;
      this.selection.extras = undefined;
    },
    removeSelectedTrimLevels() {
      this.selection.trimLevels = undefined;
      this.selection.trimLevelsPrice = 0;
    },
    removeSelectedWheels() {
      this.selection.wheels = undefined;
      this.selection.wheelsPrice = 0;
    },
    removeSelectedPaint() {
      this.selection.paint = undefined;
      this.selection.paintPrice = 0;
    },
    removeSelectedExtras() {
      this.selection.extras = undefined;
      this.selection.extrasPrice = 0;
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
    selectTrimLevel(item) {
      this.selection.trimLevels = item.name;
      this.selection.trimLevelsPrice = item.price;
    },
    selectWheel(item) {
      this.selection.wheels = item.name;
      this.selection.wheelsPrice = item.price;
    },
    selectPaint(item) {
      this.selection.paint = item.name;
      this.selection.paintPrice = item.price;
    },
    selectExtras(item) {
      this.selection.extras = item.name;
      this.selection.extrasPrice = item.price;
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
.top-border {
  border-top: 1px solid #333;
  padding-top: 5px;
}
</style>