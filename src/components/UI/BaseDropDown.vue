<template>
  <div class="container">
      <transition name="drop">
    <div v-if="isOptionsOpen" @click="tryClose" class="backdrop"></div>
      </transition>
    <div>
      <div class="selected-option" :class="isDisabled" @click="tryOpen">
        <div>{{ selectedOption }}</div>
        <span>
          <expand-icon />
        </span>
      </div>
      <transition name="drop">
        <ul v-show="isOptionsOpen">
          <li @click="select(option)" v-for="option in options" :key="option">
            {{ option }}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
import ExpandIcon from "../Icon/ExpandIcon.vue";
export default {
  name: "BaseDropDown",
  components: { ExpandIcon },
  props: {
    options: {
      required: true,
      type: Array,
    },
    defaultOption: {
      required: true,
      type: String,
    },
    disabled: {
      required: false,
      type: Boolean,
    },
  },
  data() {
    return {
      isOptionsOpen: false,
      selectedOption: this.defaultOption,
    };
  },
  watch: {
    selectedOption() {
      this.$emit("selectedOption", this.selectedOption);
    },
  },
  computed:{
      isDisabled(){
          if(this.disabled){
              return 'disable'
          }
          return''
      }
  },
  methods: {
    tryClose() {
      this.isOptionsOpen = false;
    },
    tryOpen() {
      if (!this.disabled) {
        this.isOptionsOpen = true;
      }
    },
    select(option) {
      this.selectedOption = option;
      this.isOptionsOpen = false;
    },
  },
  created() {
    this.$emit("selectedOption", this.selectedOption);
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 2;
}
.container {
  display: flex;
  padding: 0.75rem;
  resize: none;
  background-color: #e9eaeb;
  border: none;
  outline: none;
  border-radius: 2px 2px 0 0;
  border-bottom: 0.5px #aaa solid;
}
.container > div {
  width: 100%;
}
.selected-option {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
    cursor: pointer;
}

.disable{
    cursor: auto;
}

ul {
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-items: center;
  left: 5%;
  bottom: 1rem;
  padding: 0;
  overflow-y: auto;
  width: 90%;
  border-radius: 8px;
  z-index: 5;
  box-shadow: #777 0 0 10px 0px;
  background-color: #fff;
}
li {
  width: 90%;
  height: 40px;
  margin: 0.5rem;
  margin-inline-start: 1rem;
  vertical-align: middle;
  vertical-align: -webkit-baseline-middle;
  list-style: none;
  cursor: pointer;
}
li:hover {
  background-color: #777;
  color: #fff;
}

.drop-enter-from,
.drop-leave-to {
  opacity: 0;
}

.drop-enter-active {
  transition: all 0.5s ease-out;
}

.drop-leave-active {
  transition: all 0.5s ease-in;
}

.drop-enter-to,
.drop-leave-from {
  opacity: 1;
}

@media (min-width: 961px) {
  ul {
    left: 32.5%;
    width: 35%;
  }
}
</style>
