import Vue from 'vue';

import Popup from './components/Popup.vue';
const extension = new Vue({
    el: '#app',
    render: createElement => createElement(Popup)
});