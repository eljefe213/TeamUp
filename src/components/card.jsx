import React, {useState, useEffect} from 'react'
import {getRandom} from '../api/user'
import {useSelector, useDispatch} from 'react-redux' 
import {useNavigate} from 'react-router-dom'
import {selectUser, connectUser} from '../slices/userSlice'
import {selectTeam, loadTeam} from '../slices/teamSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { faPhone, faCakeCandles} from '@fortawesome/free-solid-svg-icons'
import {getAllPeople, updateProfil, deleteProfil} from '../api/user'


const Card=(props)=>{

    const user= useSelector(selectUser)
    const team=useSelector(selectTeam)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    


    const dispatchTeam=()=>{
        getAllPeople()
        .then((res)=>{
            dispatch(loadTeam(res.data))
        })
    }

    const deleteUser=(id)=>{
        deleteProfil(id)
        .then((res)=>{
            console.log(res)
            dispatchTeam()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    

    
    
    return(
        <>
        {user.isLogged&&
         <div className="card" style={props.style}>
            
         <div className="service">
             <p>{props.infos.service}</p>
         </div>
         <div className="card-image-container">
             <img src={props.infos.photo} />
         </div>
         <div className="infos-container">
             <p id="nom-prenom">{props.infos.firstname} {props.infos.lastname}</p>
             <p id="ville-pays">{props.infos.city}, {props.infos.country}</p>
             <div className="icon-text">
                 <FontAwesomeIcon icon={faEnvelope}/>
                 <p>{props.infos.email}</p>
             </div>
             <div className="icon-text">
             <FontAwesomeIcon icon={faPhone} />
                 <p>{props.infos.phone}</p>
             </div>
             <div className="icon-text">
             <FontAwesomeIcon icon={faCakeCandles} />
                 <p>{props.infos.birthdate}</p>
             </div>
             {user.infos.user.isAdmin===true&&
                 <div className="admin-card-button-container">
                     <button onClick={()=>{
                         navigate(`/admin/updateProfil/${props.infos.id}`)
                     }}>Éditer</button>
                     <button onClick={()=>{
                         deleteUser(props.infos.id)
                     }}>Supprimer</button>
                 </div>
             }
             

         </div>
     </div>
        }
       
        </>
    )
}

export default Card