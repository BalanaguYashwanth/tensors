import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store= new Vuex.Store({
    strict:true,

    
    state:{
        alldata:[],
        allnotify:'',
    },

    getters:{

    },

    mutations:{

        gets:function(state,allget){
            state.alldata=allget            
        },

        getnotify:function(state,allnotifys){
            state.allnotify=allnotifys
        }

    },

    actions:{

        getaction:function(context){
            axios.get('https://annular-tempo-261407.firebaseio.com/dummy.json')
            .then(res=>{
                let allres=res.data
                let datas=[]
                let notificationData = []
                let notify=0

                for(let obj in allres)
                {
                    allres[obj].id=obj

                    //console.log(this.state.alldata)
                    // if(allres[obj].id==this.state.alldata[obj].id)
                    // {
                    //     allres[obj].old=true
                    // }
                    // else{
                    //     allres[obj].old=false
                    // }
                    
                    datas.push(allres[obj])
                }

                datas.sort(function(a,b){
                    let date=new Date(a.published_at)
                    let date1=new Date(b.published_at)
                    return (date1 - date);
                })

                notificationData = datas
               // console.log(notificationData.length)
               // console.log(this.state.alldata.length)

                if(this.state.alldata.length>0 && notificationData.length>0 )
                {
                    for(let obj in notificationData)
                    {
                        if(this.state.alldata[obj])
                        {
                            notificationData[obj].old=true
                            console.log('exists')
                        }
                        else{
                            notificationData[obj].old=false
                            console.log(' updated')
                        }
                    }
                    
                    notify= notificationData.length - this.state.alldata.length 
                    if(notify>0)
                    {
                        context.commit('getnotify',notify)
                    }
                }

                // notificationData.filter((obj)=>{
                //     console.log(obj.id)
                //     if(notificationData[obj]!=this.state.alldata[obj])
                //     {
                //         notify=notify+1
                //     }
                // })

                //only the new data
                //datas.reverse()
               
            //    for(let obj1 in notificationData)
            //    { 
            //       // console.log('id',this.state.alldata)
            //         if(notificationData[obj1].data != this.state.alldata[obj1].data && notificationData[obj1].id!='')
            //         {  
            //             
            //         }
            //    }

                console.log('notify',notify)
              
                console.log(notificationData)
                context.commit('gets',notificationData)
            })
            .catch(err=>console.log(err))
        }
    
    }

})
