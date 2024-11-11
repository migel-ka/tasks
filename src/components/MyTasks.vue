<template>
  <section>
    <h2 v-if="tasks.length === 0">Задач пока не запланированно</h2>
    <ul :class="{ ulTask: tasks.length > 0 }" v-if="tasks.length > 0">
      <li
        v-for="(task, index) in tasks"
        :key="index"
        :class="{
          high: task.priority === 'high',
          medium: task.priority === 'medium',
          low: task.priority === 'low',
          completed: task.completed,
        }"
      >
        <div>
          <h3>{{ task.text }}</h3>
          <i>{{ task.description }}</i>
        </div>
        <div>
          <b-button @click="toggleCompleted(index)" variant="outline-success">
            {{ task.completed ? "Отменить" : "Выполнено" }}
          </b-button>
          <b-button @click="delTask(index)" variant="outline-danger"
            >Удалить</b-button
          >
          <b-button @click="editTask(index)" variant="outline-warning"
            >Редактировать</b-button
          >
        </div>
      </li>
    </ul>

    <b-modal v-model="isEditing" title="Редактирование задачи">
      <template #modal-ok>
        <b-button @click="updateTask">Сохранить изменения</b-button>
      </template>
      <template #modal-cancel>
        <b-button @click="cancelEdit">Отменить</b-button>
      </template>

      <input v-model="editedTask.text" placeholder="Введите текст задачи" />
      <input
        v-model="editedTask.description"
        placeholder="Введите описание задачи"
      />
      <select v-model="editedTask.priority">
        <option value="low">Низкий</option>
        <option value="medium">Средний</option>
        <option value="high">Высокий</option>
      </select>
    </b-modal>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isEditing: false,
      editedTask: {},
      editIndex: null,
    };
  },

  computed: {
    ...mapGetters(["allTasks"]),
    tasks() {
      return this.allTasks;
    },
  },

  methods: {
    delTask(index) {
      this.$store.dispatch("delTask", index);
    },

    editTask(index) {
      this.isEditing = true;
      this.editIndex = index;
      this.editedTask = { ...this.tasks[index] };
    },

    updateTask() {
      this.$store.dispatch("updateTask", {
        index: this.editIndex,
        updatedTask: this.editedTask,
      });
      this.cancelEdit();
    },

    toggleCompleted(index) {
      this.$store.dispatch("toggleCompleted", index);
    },

    cancelEdit() {
      this.isEditing = false;
      this.editedTask = {};
      this.editIndex = null;
    },

    goCreateTask() {
      this.$router.push("/CreateTask");
    },
  },

  mounted() {
    console.log(this.tasks);
  },
};
</script>

<style>
.ulTask {
  background-color: rgb(255, 255, 255, 0.6);
  padding: 1%;
  border-radius: 5px;
}
li {
  display: flex;
  justify-content: space-between;
  margin-top: 1%;
  border-bottom: 1px solid rgb(0, 0, 0, 0.3);
  
  button{
    margin: 5px;
  }
}
.high {
  background-color: rgb(139, 0, 0, 0.5);
}
.medium {
  background-color: rgb(154, 205, 50, 0.6);
}
.low {
  background-color: rgb(0, 128, 0, 0.5);
}
.completed {
  text-decoration: line-through;
  opacity: 0.6;
}
</style>
