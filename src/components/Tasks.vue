<template>
  <div class="container">
    <div class="tasks-title">
      <h3>Tasks</h3>
    </div>
    <div class="tasks-list">
      <task-card
        v-for="task in getTasksList"
        :key="task.id"
        :task="task"
      />
    </div>
  </div>
</template>

<script>
import TaskCard from "./UI/TaskCard.vue";
import { mapGetters,mapActions} from "vuex";
export default {
  name: "Tasks",
  components: { TaskCard },
  computed:{
      ...mapGetters(['getTasksList'])
  },
  methods:{
      ...mapActions(['setTasksLocalData'])
  },
};
</script>

<style scoped>
.container > div {
  border-radius: 1rem 1rem 0 0;
  color: #fff;
}

.tasks-title {
  background-color: #1775b9;
  padding: 2rem;
  padding-top: 1rem;
  margin-bottom: -1rem;
}
.tasks-list {
  background-color: #a2ceed;
  height: calc(100% - 6.5rem);
  padding: 1.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin: auto;

  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
}
.tasks-list > div {
  width: 125px;
  height: 125px;
  margin: 0.3rem;
  box-shadow: #777 2px 2px 0px 0px;
}
</style>
