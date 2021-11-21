<template>
  <form @submit.prevent="add" class="add-new-task">
    <h3>Add a new Task</h3>
    <input v-model.trim="title" :class="inputValidity" type="text" placeholder="Title" />
    <textarea
    :class="descValidity"
    v-model.trim="desc"
      name="description"
      placeholder="Description"
      id="description"
    ></textarea>
    <base-button type="add"></base-button>
  </form>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:"AddNewTask",
    data(){
        return{
            title:'',
            desc:'',
        }
    },
    computed:{
        inputValidity(){
            if(this.title==''){
                return ''
            }
            else return 'correct'
        },
        descValidity(){
            if(this.desc==""){
                return ''
            }
            else return 'correct'

        }

    },
    methods:{
        ...mapActions(['addNewTask']),
        add(){
            if(this.title!="" && this.desc!=""){

                const newTask={id:Math.round(Math.random()*10000),title:this.title,desc:this.desc,recived:new Date,status:"ToDo"}
            this.addNewTask(newTask);
            this.title="";
            this.desc="";
            }

        }
    }

}
</script>

<style scoped>
.add-new-task {
  margin: 1rem 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
}

textarea {
  min-height: 35%;
}
.incorrect{
    border-color: crimson;
}
.correct{
    border-color: green;
}

</style>
