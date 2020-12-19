<template>
    <div id="mainbody" >
    <div class="container" >
        <form>
            <img src="../assets/logo1.jpeg" class=" shadow" style="height:auto; width:25%;  border-radius: 50%;" alt="logo" >  
            <div class="col-md-6 mx-auto" >              
                <br>  
                <input type="text" class="form-control border border-dark m-1 p-3 " v-model="first_name" placeholder="First name" >
                <input type="text" class="form-control border border-dark m-1" v-model="last_name" placeholder="Last name">
                <input type="text" class="form-control border border-dark m-1" v-model="username" placeholder="Username">
                <input type="text" class="form-control border border-dark m-1" v-model="email" placeholder="Email">
                <input type="password" class="form-control border border-dark m-1" v-model="password" placeholder="Password">
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
            axios.post('https://regulator-values.herokuapp.com/register',{
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