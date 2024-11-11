import { createStore } from "vuex";

const store = createStore({
  state: {
    tasks: [],
  },
  mutations: {
    CREATE_TASK(state, task) {
      state.tasks.push({ ...task, completed: false }); // Добавляем поле completed
    },
  
    DEL_TASK(state, index) {
      state.tasks.splice(index, 1);
    },
  
    UPDATE_TASK(state, { index, updatedTask }) {
      state.tasks.splice(index, 1, updatedTask);
    },
  
    TOGGLE_COMPLETED(state, index) {
      state.tasks[index].completed = !state.tasks[index].completed; // Переключаем состояние выполнения
    },
  },
  
  actions: {
    createTask({ commit }, task) {
      commit("CREATE_TASK", task); 
    },
  
    delTask({ commit }, index) {
      commit("DEL_TASK", index);
    },
  
    updateTask({ commit }, { index, updatedTask }) {
      commit("UPDATE_TASK", { index, updatedTask });
    },
  
    toggleCompleted({ commit }, index) {
      commit("TOGGLE_COMPLETED", index); // Действие для переключения состояния выполнения
    },
  },

  getters: {
    allTasks(state) {
      return state.tasks;
    },
  },
});

export default store;
