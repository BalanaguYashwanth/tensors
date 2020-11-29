<template>
    <div id="mainbody" >
    <div class="container" >
        <form>
            <img src="../assets/logo1.jpeg" class=" shadow" style="height:auto; width:25%;  border-radius: 50%;" alt="logo" >  
            <div class="col-md-6 mx-auto" >              
                <br>  
                <input type="text" class="form-control border border-dark" v-model="first_name" placeholder="first name" >
                <input type="text" class="form-control border border-dark" v-model="last_name" placeholder="last name">
                <input type="text" class="form-control border border-dark" v-model="username" placeholder="username">
                <input type="text" class="form-control border border-dark" v-model="email" placeholder="email">
                <input type="password" class="form-control border border-dark" v-model="password" placeholder="password">
            </div>
              <button class="btn btn-secondary mx-auto d-block" v-on:click.prevent="submit" > submit </button>
        </form>
        {{info}}
    </div>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    data(){
        return{
            first_name:'',
            last_name:'',
            username:'',
            email:'',
            password:'',
            info:'',
        }
    },

    methods:{
        submit:function(){
            axios.post('http://127.0.0.1:8000/register',{
                first_name:this.first_name,
                last_name:this.last_name,
                username:this.username,
                email:this.email,
                password:this.password,
            }).then(res=>{
                console.log(res)
                this.$router.push('/login')
                })
            .catch(err=>{
                console.log(err.response.data)
                this.info=err.response.data
                })
        }
    }
    
}
</script>

<style>



#mainbody{
    padding-top: 60px;
}

input{
    border: 10px solid black;
    border-style: solid;
    margin: auto;
    margin-bottom: 10px;
    text-align: center;
}


</style>