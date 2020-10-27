import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

@Component
export default class FetchDataComponent extends Vue {
    forecasts: WeatherForecast[] = [];
    mounted() {
        this.$emit('update:title','Weather forecast');
        fetch('api/SampleData/WeatherForecasts')
            .then(response => response.json() as Promise<WeatherForecast[]>)
            .then(data => {
                this.forecasts = data;
            });
    }
}
