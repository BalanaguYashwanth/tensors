<template>
    <div class="container" id="container"> 
        <h1 style="text-align:center" >   Form </h1>
      <form>
          <div class="form-row">
              <div class="col-md-6" >
                  <label> Name </label>
                 <input class="form-control"  v-model='name' type="text">
              </div>
                <div class="col-md-6" >
                    <label> Phonenumber  </label>
                    <input class="form-control" v-model="phonenumber" type='text' > 
                </div>
            </div>
            <div>
                <label> Address </label>
                <textarea type="text" rows="4" cols="50" v-model="address"  class="form-control" >
                </textarea>
            </div>
            <br>
        <button class="btn btn-secondary px-5 mx-auto d-block" v-on:click.prevent="posting"  style="text-align:center" > submit </button>
     </form> 

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            name:'',
            phonenumber:'',
            address:'',
        }
    },

    methods:{
        posting:function(){
            axios.post('https://regulator-values.herokuapp.com/api/v1/',{
                customer_name:this.name,
                customer_phonenumber:this.phonenumber,
                customer_address:this.address,
            }).then(res =>{ 
                console.log(res)
                location.reload()
                })
            .catch(err=> console.log(err))
        }        
    }
}

</script>

<style>

#container{
    padding-top: 150px;
}

</style>