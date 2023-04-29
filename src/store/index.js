import { createStore } from "vuex";
import user from "./modules/users";
import pet from "./modules/pets";

const store = createStore({
  modules: {
    user,
    pet,
  },
});

export default store;
