<template>
  <form @submit.prevent="edit" class="edit-task">
    <h3>Edit Task</h3>
    <input
      v-model.trim="task.title"
      :class="inputValidity"
      type="text"
      placeholder="Title"
    />
    <textarea
      :class="descValidity"
      v-model.trim="task.desc"
      name="description"
      placeholder="Description"
      id="description"
    ></textarea>

    <base-drop-down
      v-on:selectedOption="statusChanged"
      :disabled="task.status === 'Deployed'"
      :options="availableOptions"
      :defaultOption="task.status"
    />

    <div class="buttons-container">
      <base-button width="48%" type="edit"></base-button>
      <base-button
        width="48%"
        @click.prevent="cancel"
        type="cancel"
      ></base-button>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BaseDropDown from "../components/UI/BaseDropDown.vue";
export default {
  components: { BaseDropDown },
  name: "AddNewTask",
  data() {
    return {
      task: {},
      newStatus: "",
    };
  },
  computed: {
    ...mapGetters(["getTasksList"]),
    availableOptions() {
      const options = [];
      if (this.isToDoAvailable) {
        options.push("ToDo");
      }
      if (this.isInProgressAvailable) {
        options.push("InProgress");
      }
      if (this.isBlockedAvailable) {
        options.push("Blocked");
      }
      if (this.isInQAAvailable) {
        options.push("InQA");
      }
      if (this.isDoneAvailable) {
        options.push("Done");
      }
      if (this.isDeployedAvailable) {
        options.push("Deployed");
      }
      return options;
    },
    isToDoAvailable() {
      if (
        this.task.status === "ToDo" ||
        this.task.status === "Blocked" ||
        this.task.status === "InQA"
      ) {
        return true;
      } else return false;
    },
    isInProgressAvailable() {
      if (this.task.status === "ToDo" || this.task.status === "InProgress") {
        return true;
      } else return false;
    },
    isBlockedAvailable() {
      if (this.task.status === "InProgress" || this.task.status === "Blocked") {
        return true;
      } else return false;
    },
    isInQAAvailable() {
      if (this.task.status === "InProgress" || this.task.status === "InQA") {
        return true;
      } else return false;
    },
    isDoneAvailable() {
      if (this.task.status === "InQA" || this.task.status === "Done") {
        return true;
      } else return false;
    },
    isDeployedAvailable() {
      if (this.task.status === "Done" || this.task.status === "Deployed") {
        return true;
      } else return false;
    },
    inputValidity() {
      if (this.task.title == "") {
        return "";
      } else return "correct";
    },
    descValidity() {
      if (this.task.desc == "") {
        return "";
      } else return "correct";
    },
  },
  methods: {
    ...mapActions(["editTask"]),
    edit() {
      const editedTask = {
        id: this.task.id,
        title: this.task.title,
        desc: this.task.desc,
        recived: new Date(),
        status: this.newStatus,
      };
      this.editTask(editedTask);
      this.$router.push("/");
    },
    cancel() {
      this.$router.push("/");
    },
    statusChanged(status) {
      this.newStatus = status;
    },
  },

  beforeMount() {
    const id = Number(this.$route.query.id);
    this.task = this.getTasksList.find((task) => task.id === id);
  },
};
</script>

<style scoped>
.edit-task {
  margin: 1rem 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  height: calc(100% - (5.5rem + 0.375rem));
}

textarea {
  min-height: 60%;
}
.buttons-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.incorrect {
  border-color: crimson;
}
.correct {
  border-color: green;
}





</style>
