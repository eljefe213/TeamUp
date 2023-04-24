import axios from 'axios'
import {config} from '../config'
const token = window.localStorage.getItem('weshToken')
const APP_TOKEN_SECRET="COLLABORATEUR_APP_POWAAAA_SECRET"



export function loginUser(datas){
    return axios.post(config.api_url+"/api/login", datas,{headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }})
    .then((res)=>{
        console.log("console.log du res.data de la fonction loginUser: ", res.data)
        return res.data
    })
    .catch((err)=>{
        console.log(err)
        return err
    })
}

export function addOneUser(datas){
    console.log("znfznf", datas)
    return axios.post(`${config.api_url}/api/collaborateurs`, datas, {headers: {Authorization: `Bearer ${localStorage.getItem("weshToken")}`}})
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function getOneUser(id){
    
    return axios.get(`${config.api_url}/api/collaborateurs/${id}`,{headers: {Authorization: `Bearer ${localStorage.getItem("weshToken")}`}})
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}


export function updateProfil(datas, id){
    
    return axios.put(`${config.api_url}/api/collaborateurs/${id}`, datas, {headers: {Authorization: `Bearer ${localStorage.getItem("weshToken")}`}})
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}

export function deleteProfil(id){
    
    return axios.delete(`${config.api_url}/api/collaborateurs/${id}`,{headers: {Authorization: `Bearer ${localStorage.getItem("weshToken")}`}})
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err
    })
}



export function getRandom(){
    return axios.get(`${config.api_url}/api/collaborateurs/random`,{headers: {Authorization: `Bearer ${localStorage.getItem("weshToken")}`}})
        .then((res)=>{
            console.log(res)
            return res
        })
        .catch((err)=>{
            console.log(err)
            return err
        })
}

export function getAllPeople(){
    return axios.get(`${config.api_url}/api/collaborateurs`,{headers: {Authorization: `Bearer ${localStorage.getItem("weshToken")}`}})
        .then((res)=>{
            console.log(res)
            return res
        })
        .catch((err)=>{
            console.log(err)
            return err
        })
}













