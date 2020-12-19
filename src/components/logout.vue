<template>
    <div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    created(){
        let axiosConfig={
            headers:{
                Authorization:"Token "+localStorage.getItem('user-token')
            }           
        };

        axios.get('https://regulator-values.herokuapp.com/logout',axiosConfig)
        .then(res=>{
            console.log(res)
            localStorage.removeItem('user-token')
            this.$router.push('login')
            })
        .catch(err=>console.log(err))
       
    }
}
</script>

<style>


</style>