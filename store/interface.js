import axios from 'axios'
let devMode = process.env.NODE_ENV === 'development';

function sleep(time) {
  return new Promise(resolve => windows.setTimeout(resolve, time));
}

//Event names:
export const EVENTS = {
  TOGGLE_DARK_THEME: 'TOGGLE_DARK_THEME',
  SET_LOADING: 'SET_LOADING',
  SET_FIRST_TIME_FALSE: 'SET_FIRST_TIME_FALSE',
  UPDATE_DATA: 'UPDATE_DATA'
}



//https://github.com/vuejs/vuex/issues/1258
//Access namespaced state: this.$store.state.interface.locale
export const state = () => ({
  isFirstTime: true,
  loading: false,
  isDarkTheme: true,
  cars: []
})

/*
...mapGetters({
  // map `this.doneCount` to `this.$store.getters.doneTodosCount`
  doneCount: 'doneTodosCount'
})
*/
//Access namespaced getter: this.$store.getters['interface/isDarkTheme']
//this.$store.getters['yourModuleName/someGetterMethod'](myParam)
export const getters = {
  getLoadingStatus: (state) => state.loading,
  darkThemeInUse: (state) => state.isDarkTheme,
  getTrimLevels: (state) => {
    const cars = state.cars;
    function getCarTrimLevels(index) {
      if (cars && cars.length > 0) {
        return cars[index].trim_levels;
      }
    }
    //return a closure function:
    return getCarTrimLevels;
  },
  getWheels: (state) => {
    const cars = state.cars;
    function getWheelTypes(index) {
      if (cars && cars.length > 0) {
        return cars[index].wheels;
      }
    }
    //return a closure function:
    return getWheelTypes;
  },
  getPaint: (state) => {
    const cars = state.cars;
    function getPaintTypes(index) {
      if (cars && cars.length > 0) {
        return cars[index].paint;
      }
    }
    //return a closure function:
    return getPaintTypes;
  },
  getExtras: (state) => {
    const cars = state.cars;
    function getExtrasTypes(index) {
      if (cars && cars.length > 0) {
        return cars[index].extras;
      }
    }
    //return a closure function:
    return getExtrasTypes;
  }
}

/*
  Mutations (Event Handlers) must be synchronous
  (in Components) use ...mapMutations() to get Mutations
  (in Components) or emit an Event directly: this.$store.commit(<MUTATION_EVENT_NAME>)
  store.commit('module/method')
*/
export const mutations = {
  [EVENTS.TOGGLE_DARK_THEME]: (state) => {
    state.isDarkTheme = !state.isDarkTheme;
    if (devMode) console.log("[TOGGLE_DARK_THEME] mutation: darkTheme: " + state.isDarkTheme);
  },
  [EVENTS.SET_LOADING]: (state, isLoading) => {
    state.loading = isLoading;
  },
  [EVENTS.SET_FIRST_TIME_FALSE]: (state, isFalse) => {
    state.isFirstTime = isFalse;
  },
  [EVENTS.UPDATE_DATA]: (state, payload) => {
    state.cars = payload;
  }
}

/*
  (in Components) use ...mapActions() to get Actions
  methods: {
    ...mapActions({
        add: 'increment' // map `this.add()` to `this.$store.dispatch('increment')`
    })
  }
  //this.$store.dispatch('module/action')
*/
export const actions = {
  toggleDarkTheme: (context) => {
    if (devMode) console.log("Action: interface/toggleDarkTheme");
    context.commit(EVENTS.TOGGLE_DARK_THEME, null);
  },
  stopLoading: (context) => {
    if (devMode) console.log("Action: interface/stopLoading");
    context.commit(EVENTS.SET_LOADING, false);
  },
  startLoading: (context) => {
    if (devMode) console.log("Action: interface/startLoading");
    context.commit(EVENTS.SET_LOADING, true);
    axios
      .get('https://demo-api.getmygrades.co.uk/cars')
      .then(function (response) {
        context.commit(EVENTS.UPDATE_DATA, response.data);
        context.dispatch("stopLoading");
      })
      .catch(err => console.error(err))
  },
  setFirstTimeFalse: (context) => {
    if (devMode) console.log("Action: interface/setFirstTimeFalse");
    context.commit(EVENTS.SET_FIRST_TIME_FALSE, false);
  }
}
