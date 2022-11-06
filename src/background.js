import Vue from 'vue';
import Popup from './components/Popup.vue';

window.onload = function() {
    if(document.getElementById('app')) {
        const extension = new Vue({
            el: '#app',
            render: createElement => createElement(Popup)
        });
    }
}