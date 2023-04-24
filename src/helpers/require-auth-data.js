import React, {useState, useEffect} from 'react'
//import d'une action qui chargera les bière venant dun back

import {useSelector, useDispatch} from 'react-redux' 
import {selectUser, connectUser} from '../slices/userSlice'

import {Navigate, useParams} from 'react-router-dom'
import {updateProfil, checkMyToken} from '../api/user'


//HOC de controle des datas et de la sécurité
const RequireDataAuth = (props) =>{
    //on récup les params de la route
    const params = useParams()
    //on récupère la state user dans le store en mode lecture
    const user = useSelector(selectUser)

    //on prépare la fonctionnalité pour dispatcher notre action dans le store
    const dispatch = useDispatch()
    //on récupère le composant à afficher qui a été passé en tant que props via App.js
    const Child = props.child
    
    //gestion de la redirection
    const [redirect, setRedirect] = useState(false)
    
    //au chargement de chaque composant
    useEffect(()=>{
        
        if(user.isLogged===true){
            console.log("accès à la route protégée autorisée")
        }
        else{
            setRedirect(true)
        }

    }, [props])
    
    if(redirect){
        return <Navigate to="/login"/>
    }
    return (<Child {...props} params={params}/>)
}

export default RequireDataAuth