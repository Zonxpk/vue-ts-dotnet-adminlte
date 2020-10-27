import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class CounterComponent extends Vue {
    currentcount: number = 0;
    mounted(){
        this.$emit('update:title','Counter');
    }

    incrementCounter() {
        this.currentcount++;
    }
}
