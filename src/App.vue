<template>
  <div>
    <the-header :title="routeName"></the-header>
  </div>
  <router-view />
</template>

<script>
import TheHeader from "./components/Layout/TheHeader.vue";
import { mapActions } from "vuex";
export default {
  components: { TheHeader },
  methods: { ...mapActions(["setTasksLocalData"]) },
  computed:{
routeName(){
  return this.$route.name;
}
  },
  created() {
    const tasksLocalData = JSON.parse(localStorage.getItem("tasksLocalData"));
    this.setTasksLocalData(tasksLocalData);
  },
};
</script>

<style>
body,
html,
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
}
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
input,
textarea {
  padding: 0.75rem;
  resize: none;
  background-color: #e9eaeb;
  border: none;
  outline: none;
  border-radius: 2px 2px 0 0;
  border-bottom: 0.5px #aaa solid;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}
@media (min-width: 961px) {
  #app{
    width: 40%;
    margin: auto;
    background-color: #fff;
  }
  body{
    background-color: #000;
  }
}
</style>
