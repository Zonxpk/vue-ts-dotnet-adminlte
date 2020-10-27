import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
    components: {
        MenuComponent: require('../navmenu/navmenu.vue.html'),
        NavBarComponent: require('../navbar/navbar.vue.html')
    },
    data() {
        return {
            title: "Dashboard"
        }
    },
})
export default class AppComponent extends Vue {
}
