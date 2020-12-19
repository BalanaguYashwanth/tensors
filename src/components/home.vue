<template>
    <div class="table-users">
        <div class="header" >
       <!-- <p v-show="false"> {{ this.$store.dispatch('getaction')}} </p>  -->
        <!-- <slot name="menu" > </slot> -->
        <!-- <button class="btn btn-outline-info mx-2" style="float:right" v-on:click="logout" > logout </button> -->
        <br>
             

        <h1 style="text-align:center; " > Home </h1>
             
        <table class="table table-bordered bg-white rounded "  style="table-layout: auto; width: 100%;  "> 
            <FlashMessage :position="'left bottom'"/>
            <thead>
                <tr scope="row">
                     <!-- <th> Id </th> -->
                    <th> Event </th>
                    <th> Data </th>
                    <th> Published_at </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(datas,index) in datalimit()"  v-bind:key="index" scope="col"  >  
        
        <!-- <p v-bind:class="{'fa-checkbox-marked': content['cravings'],  'fa-checkbox-blank-outline': !content['cravings']}" >  </p> -->

                    <!-- <th> {{index+1}} </th> -->
                    <td> {{datas.event}} </td>
                    <td> {{datas.data}} </td>
                    <td> {{timeformat(datas.published_at)}} </td>
                </tr>
            </tbody>
        </table>
    
        <button  v-on:click="prev"> prev </button>
        <button   v-on:click="next" > next </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            result:'',
            limit:1,
        }
    },

    methods:{

        datalimit:function(){
            let intialdata=[]
           
            for(let obj in this.$store.state.alldata)
            {
                
                if(obj>=(this.limit-1)*10 && obj<=this.limit*10)
                {
                   intialdata.push(this.$store.state.alldata[obj])
                }

            }
            return intialdata
        },

        next:function(){
            
            if(this.limit>=1)
            {   
                this.limit=this.limit+1
            }
            console.log(this.limit)
            
        },

        prev:function(){
           
            if(this.limit>=2)
            {   
                this.limit=this.limit-1
            }
              console.log(this.limit)

        },


        timeformat:function(time){
            var s = new Date(time).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
            return s
        },

        deleting:function(id){
            axios.delete('http://127.0.0.1:8000/api/v1/'+id+'/')
            .then(res=>{
                console.log(res)
                location.reload()
                })
            .catch(err=>console.log(err))
        },
    },

    created(){
       // console.log('realtime ',this.$store.state.allnotify)

       let self=this
       setInterval(function(){
            //alert('fhu')
             if(self.$store.state.allnotify>0)
            {
                self.flashMessage.setStrategy('single');
                self.flashMessage.success({
                message: 'new data added successfully',
                time: 3000,
                blockClass: 'custom-block-class'
                });
                console.log('done') 
                self.$store.commit('getnotify',0)
            }
            self.$store.dispatch('getaction')
        },4000)
     
    }
    
}
</script>

<style scoped>

body {
   background-color: lighten(#398B93, 30%);
}

.header {
   background-color: darken(#398B93, 5%);
   color: white;
   font-size: 1.5em;
   padding: 1rem;
   text-align: center;
   text-transform: uppercase;
}



.table-users {
   border: 1px solid darken(#398B93, 5%);
   border-radius: 10px;
   box-shadow: 3px 3px 0 rgba(0,0,0,0.1);
   max-width: calc(100% - 2em);
   margin: 1em auto;
   overflow: hidden;
   width: 800px;
}

table,td,th { 
      color: darken(#398B93, 10%);
      padding: 10px; 
   }

td {
      text-align: center;
      vertical-align: middle;
   }

th { 
      background-color: lighten(#398B93, 50%);
      font-weight: 300;
   }


table {
   width: 100%;
   }

@media screen and (max-width: 700px) {   
   table, tr, td { display: block; }
   
   td {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
   }
   
   tr {
      padding:10px 0;
      position: relative;
     
   }
}

@media screen and (max-width: 500px) {
   .header {
      background-color: transparent;
      color: lighten(#398B93, 60%);
      font-size: 2em;
      font-weight: 700;
      padding: 0;
      text-shadow: 2px 2px 0 rgba(0,0,0,0.1);
   }
   
   img {
      border: 3px solid;
      border-color: lighten(#398B93, 50%);
     
      margin: 0.5rem 0;
    
   }
   
   td {
        background-color: lighten(#398B93, 45%); 
        border-bottom: 1px solid lighten(#398B93, 30%);
        border-radius: 10px 10px 0 0;
        position: relative;   
        top: 0;
        transform: translateY(0);
        width: 100%;
       padding-bottom: 1rem !important; 
   }
   
   tr {
      background-color: white !important;
      border: 1px solid lighten(#398B93, 20%);
      border-radius: 10px;
      box-shadow: 2px 2px 0 rgba(0,0,0,0.1);
      margin: 0.5rem 0;
      padding: 0;
   }
   
   .table-users { 
      border: none; 
      box-shadow: none;
      overflow: visible;
   }
}

table {
  width: 100%;
}

tr:nth-child(odd) {
  background: #eee;
}

tr:nth-child(even) {
  background: #ccc;
}


</style>
