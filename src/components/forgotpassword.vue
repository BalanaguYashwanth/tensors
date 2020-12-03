<template>
    <div id="mainbody" >
    <div class="container" >
        <form>
           <h1  class="display-3">  Forgot password </h1> 
            <div class="col-md-6 mx-auto" >              
                <br>  
                <input type="text" class="form-control border border-dark"  v-model="username" placeholder="username">
                <input type="password" class="form-control border border-dark" v-model="password"  placeholder="password">
            </div>
            
              <button class="btn btn-secondary mx-auto d-block"  v-on:click.prevent="submit" > submit </button>
        </form>
        {{info}}
    </div>
    </div>
</template>

<script>
import axois from 'axios'
export default {
    data(){
        return{
            username:'',
            password:'',
            info:'',
        }
    },
    methods:{
        submit:function(){
            axois.post('http://127.0.0.1:8000/resetpassword',{
                username:this.username,
                password:this.password
            })
            .then(res=>{
                console.log(res)
                this.info=res.data
                })
            .catch(err=>{
                console.log(err)
                this.info=err.response.data
                })
        }
    }
}

</script>

<style>

#mainbody{
    padding-top: 150px;
}

input{
    border: 10px solid black;
    border-style: solid;
    margin: auto;
    margin-bottom: 10px;
    text-align: center;
}


</style>