<template>
  <section class="createTask">
    <div class="createTaskBlock">
      <label>
        Название задачи
        <input @keyup.enter="submitTask" v-model="newTask" type="text" />
      </label>

      <label>
        Описание задачи
        <input
          @keyup.enter="submitTask"
          v-model="newDescriptionTask"
          type="text"
        />
      </label>
    </div>
    <div class="createTaskBlock">
      <label>
        Выберите приоритет задачи:
        <select v-model="selectedPriority">
          <option value="none">без приоритета</option>
          <option value="high">высокий</option>
          <option value="medium">средний</option>
          <option value="low">низкий</option>
        </select>
      </label>

      <label>
        Выберите статус задачи:
        <select v-model="selectedStatus">
          <option value="new">новая</option>
          <option value="in progress">в работе</option>
          <option value="completed">завершена</option>
        </select>
      </label>

      <label>
        Время для выполнения задачи:
        <input type="time" v-model="dueTime" required />
      </label>
    </div>

    <b-button variant="success" @click="submitTask">Создать задачу</b-button>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      newTask: "",
      newDescriptionTask: "",
      selectedPriority: "none", // Значение по умолчанию
      selectedStatus: "new", // Значение по умолчанию
      dueTime: "", // Срок выполнения
    };
  },
  methods: {
    ...mapActions(["createTask"]),

    submitTask() {
      // Переименован метод
      const task = {
        text: this.newTask,
        description: this.newDescriptionTask,
        priority: this.selectedPriority,
        status: this.selectedStatus,
        dueDate: this.dueTime,
      };

      this.createTask(task); // Передаем объект задачи в действие Vuex
      this.resetForm(); // Сбрасываем форму после создания задачи
      this.$router.push("/");
    },

    resetForm() {
      this.newTask = "";
      this.newDescriptionTask = "";
      this.selectedPriority = "medium";
      this.selectedStatus = "new";
      this.dueTime = "";
    },
  },
};
</script>

<style>
.createTask {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: rgb(255, 228, 196, 0.5);
  border-radius: 5px;
  padding: 2%;
}

.createTaskBlock {
  display: flex;
  justify-content: space-between;
}
</style>
