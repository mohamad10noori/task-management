<template>
  <div class="container">
    <div>
      <div class="title-div">{{ task.title }}</div>
      <div class="desc-div">{{ task.desc }}</div>
    </div>
    <div class="status-and-edit-container">
      <div class="status-div">{{ task.status }}</div>
      <div @click="goToEdit(task)"><edit-icon /></div>
    </div>
  </div>
</template>

<script>
import EditIcon from "../Icon/EditIcon.vue";
export default {
  name: "TaskCard",
  components: { EditIcon },
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToEdit() {
      this.$router.push({
          name:"Edit",
          query:{id:this.task.id}
      })
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0.75rem;
  border-radius: 8px;
  background-color: #fff;
  color: #000;
  height: fit-content;
}
.status-and-edit-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
}
.status-and-edit-container > * {
  vertical-align: middle;
  vertical-align: -webkit-baseline-middle;
}
.title-div {
  font-size: 1rem;
  font-weight: 900;
  margin-bottom: 0.5rem;

  overflow-y: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}
.desc-div {
  font-size: 0.75rem;
  font-weight: 500;
  overflow-y: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}
.status-div {
  background-color: #1775b9;
  border-radius: 8px;
  padding: 0.3rem;
  text-align: center;
  width: 5rem;
  color: #fff;
}
</style>
