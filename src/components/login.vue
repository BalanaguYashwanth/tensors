<template>
    <div id="mainbody" >
    <div class="container" >
        <form>
            <img src="../assets/logo1.jpeg" class=" shadow" style="height:auto; width:25%;  border-radius: 50%;" alt="logo" >  
            <div class="col-md-6 mx-auto " >              
                <br>  
                <input type="text" class="form-control border border-dark m-1 p-3"  v-model="username" placeholder="Username">
                <input type="password" class="form-control border border-dark m-1 p-3 " v-model="password"  placeholder="Password">
                <p style="float:right; padding-left:100px;"  > <a href="http://localhost:8080/forgotpassword" style="color:white">  forgot password? </a>  </p>
            </div>
              <div>
                <button style="float:right" class="btn btn-secondary  text-center mx-auto d-block "  v-on:click.prevent="submit" > submit </button>
                <br>
                <br>
                <p style="color:white" > {{info}} </p>
              </div>
        </form>
       
      
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
            axois.post('https://regulator-values.herokuapp.com/login',{
                username:this.username,
                password:this.password
            })
            .then(res=>{
                console.log(res)
                localStorage.setItem('user-token',res.data.token)
                this.$router.push('/home')
                })
            .catch(err=>{
                console.log(err)
                this.info=err.response.data
                })
        }
    }

}
</script>
<style >

#mainbody{
    padding-top: 60px;
}

input{
    border: 10px solid black;
    border-style: solid;
    margin: auto;
    margin-bottom: 10px;
    
}

</style>