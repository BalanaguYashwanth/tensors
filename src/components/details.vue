<template>
    <div>
        <slot name="menu" > </slot>
        <!-- <button class="btn btn-outline-info mx-2" style="float:right" v-on:click="logout" > logout </button> -->
        <br>
        <h1 style="text-align:center"> Customer details </h1>
        <table class="table table-bordered bg-white rounded "  style="table-layout: auto; width: 100%;  "> 
            <thead>
                <tr scope="row">
                     <th> Id </th>
                    <th> Name </th>
                    <th> Phonenumber </th>
                    <th> Address </th>
                    <th> Operations </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(datas,index) in this.result"  v-bind:key="index" scope="col" >  
                    <th> {{datas.id}} </th>
                    <td> {{datas.customer_name}} </td>
                    <td> {{datas.customer_phonenumber}} </td>
                    <td> {{datas.customer_address}} </td>
                    <td> <button class="btn btn-secondary" v-on:click="deleting(datas.id)" > delete </button> </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            result:'',
        
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
    },

    methods:{
        deleting:function(id){
            axios.delete('http://127.0.0.1:8000/api/v1/'+id+'/')
            .then(res=>{
                console.log(res)
                location.reload()
                })
            .catch(err=>console.log(err))
        },

        logout:function(){
            let axiosConfig = {
                headers: {
                Authorization: "Token " + localStorage.getItem("user-token"),
                },
            };
            axios.get('http://127.0.0.1:8000/logout',axiosConfig)
            .then(res=>{
                console.log(res)
                localStorage.removeItem('user-token')
                this.$router.push('login')
                })
            .catch(err=>console.log(err.response.data))
        }
    },

    created(){
        let axiosConfig={
            headers:{
                Authorization: "Token " + localStorage.getItem("user-token"),
            }
        }
        axios.get('http://127.0.0.1:8000/api/v1/',axiosConfig)
        .then(res=>{
            console.log(res)
            this.result=res.data
            })
        .catch(err=>console.log(err))
    }
    
}
</script>

<style >


</style>
