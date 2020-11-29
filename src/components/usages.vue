<template>
    <div>
        <slot name="menu" > </slot>
         <h1 style="text-align:center" class="container my-5" > Cylinder & other usages </h1>
                <GChart
                type="AreaChart"
                :data="chartData3"
                :options="chartOptions"
                />
    </div>
</template>

<script>
export default {
    data(){
        return{
            chartData3: [
                ['Year', 'temperature', 'humidity'],
                ['2013',  1000,      400],
                ['2014',  1170,      460],
                ['2015',  660,       1120],
                ['2016',  1030,      540]
            ],
            chartOptions: {
                chart: {
                title: 'Company Performance',
                subtitle: 'temperature, humidity, and pressure',
                }
            },
        }
    }
}
</script>

<style scoped>

.container{
    padding-top:120px;

}

</style>