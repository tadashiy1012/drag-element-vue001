import Vue from 'vue';
import MainContainer from './MainContainer.vue';

const app = new Vue({
    components: {
        MainContainer
    },
    template: '<main-container />'
}).$mount('#app');

console.log(app);