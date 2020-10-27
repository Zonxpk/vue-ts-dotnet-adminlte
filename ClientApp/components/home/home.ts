import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class HomeComponent extends Vue {
    mounted() {
        this.$emit('update:title','Hello, world!');
    }
}
