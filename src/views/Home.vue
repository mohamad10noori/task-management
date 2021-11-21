<template>

  <div class="home">
    <add-new-task class="add-new-task"/>
    <tasks class="tasks"/>
  </div>

</template>

<script>
import AddNewTask from '../components/AddNewTask.vue';
import Tasks from '../components/Tasks.vue'
export default {
  name: 'Home',
  components:{AddNewTask,Tasks}
}
</script>


<style scoped>

.home{
  display: flex;
  flex-direction: column;
  height:calc(100% - (2.5rem + .375rem));
}
.add-new-task{
  height: 40%;
}
.tasks{
  height: 60%;
}


</style>