import axios from "axios";
import { Message } from 'element-ui';

axios.interceptors.response.use( success=>{
    if(success.status && success.status==200){
        if(success.data.code==500||success.data.code==401||success.data.code==403){
            Message.error({message:success.data.message});
            return;
        }
        if(success.data.message){
            Message.success({message:success.data.message});
        }
    }
    return success.data;
},error =>{
    if(error.response.code==504||error.response.code==404){
        Message.error({message:'无服务器'})
    }else{
        Message.error({message:error.response.data.message})
    }
    return;
});

let base = ``

export const postRequest=(url,params)=>{
    return axios({
        method:'post',
        url:`${base}${url}`,
        data:params
    })

}