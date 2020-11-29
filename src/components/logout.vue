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

        axios.get('http://127.0.0.1:8000/logout',axiosConfig)
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