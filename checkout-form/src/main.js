import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { createStore } from "vuex";

// Create a new store instance or import from module.
const store = createStore({
    /* state, actions, mutations */
    state: {
        formOpen: false,
        formdata: [],
        formButton: 'btn-dark',
        formIcon: 'fa-shopping-cart',
        formMsg: 'Click checkout button to enter form',
    },
    mutations: {
        toggleForm(state) {
            state.formOpen = !state.formOpen;
            state.formButton = !state.formOpen ? 'btn-dark' : 'btn-primary';
            state.formIcon = !state.formOpen ? 'fa-shopping-cart' : 'fa-chevron-left';
            state.formMsg = !state.formOpen ? 'Click checkout button to enter form' : 'This is a checkout form for Food Delivery';
        },
        add(state, data) {
            state.formdata.push(data);
        },
    }
});

createApp(App).use(store).mount('#app')