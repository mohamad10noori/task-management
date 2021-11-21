<template>
    <button :style="customWidth" :class="buttonType">
        <add-icon v-if="type==='add'"/>
        <edit-icon v-if="type==='edit'" />
        <span>{{text}}</span>
    </button>
</template>


<script>
import AddIcon from '../Icon/AddIcon.vue';
import EditIcon from '../Icon/EditIcon.vue';
export default {
    name:"BaseButton",
    components:{AddIcon,EditIcon},
    props:{
        type:{
            required:true,
            type:String,
        },
        width:{
            required:false,
            type:String
        }
    },
    computed:{
        customWidth(){
        
            if(this.width){
                return `width:${this.width}`
            }
            else return '';
        },
        buttonType(){
            if (this.type==="cancel"){
                return 'cancel'
            }else return '';
        },
        text(){
            if(this.type==="add"){
                return "Add"
            }
            else if(this.type==="edit"){
                return "Edit"
            }
            else if(this.type==="cancel"){
                return "Cancel"
            }
            else return "undifined text"
        
        }

    }
}
</script>



<style scoped>

button{
  padding: .5rem;
  width: 100%;
  border: none;
  background-color: #1775b9;
  font-weight: 500;
  color: #fff;
  fill: #fff;
  border-radius: 3px; 
  height: 40px;
  cursor: pointer;
}
button>*{
    vertical-align: middle;
    vertical-align: -webkit-baseline-middle;
    margin: 0 .25rem;
}
.cancel{
    background-color: #fff;
    border: .75px #d4d5d5 solid;
    color: #6b6a6a ;
    fill: #6b6a6a ;
}

</style>