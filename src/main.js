import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseButton from './components/UI/BaseButton'
import BaseDropDown from './components/UI/BaseDropDown'

const app=createApp(App);

app.use(store)
app.use(router)

app.component('base-button',BaseButton)
app.component('base-dropdown',BaseDropDown)
app.mount('#app')
