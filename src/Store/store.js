class Store {
    constructor (initialState) {
      this.state = initialState;
    }
  
    setState (state) {
      this.state = state;
    }
  
    getState () {
      return this.state;
    }
  }
  
  const store = new Store({});
  export default store;