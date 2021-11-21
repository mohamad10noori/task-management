import { createStore } from "vuex";

export default createStore({
  state: {
    tasksList: [],
  },
  mutations: {
    addNewTask(state, payload) {
      state.tasksList.unshift(payload);

      localStorage.setItem("tasksLocalData", JSON.stringify(state.tasksList));
    },
    editTask(state, payload) {
      let foundedIndex = state.tasksList.findIndex((task) => task.id === payload.id);
      console.log(payload)
      state.tasksList[foundedIndex] = payload;
      localStorage.setItem("tasksLocalData", JSON.stringify(state.tasksList));
    },
    setTasksLocalData(state, payload) {
      if (payload != null) {
        state.tasksList = payload;
      } else {
        state.tasksList = [];
      }
    },
  },
  actions: {
    addNewTask(context, payload) {
      context.commit("addNewTask", payload);
    },
    editTask(context, payload) {
      context.commit("editTask", payload);
    },
    setTasksLocalData(context, payload) {
      context.commit("setTasksLocalData", payload);
    },
  },
  getters: {
    getTasksList(state) {
      return state.tasksList;
    },
  },
});
