<template>
  <div class="header-container">
 
      <span>Task Management > {{ title }} </span>
      
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.header-container {
    
    text-align: start;
     padding: .75rem 1rem;
  background-color: #1775b9;
}

span{
    margin: 1rem;
    font-weight: 700;
    font-size: 1rem;
    color: #fff;
}
</style>
