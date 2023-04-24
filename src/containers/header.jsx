
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux' 
import {selectUser, logoutUser} from '../slices/userSlice'
import {useNavigate, useParams, useLocation} from 'react-router-dom'
import { motion } from "framer-motion";

const Header=(props)=>{

    const params = useParams()
    const location= useLocation()
    const user = useSelector(selectUser)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    

    useEffect(()=>{
            console.log(location.pathname)
         
    },[location])

    return (
        <div className="header">
                {!user.isLogged&&
                <>
                    
                    <p>TeamUp</p>
                    <p>Connexion</p>
                </>
                }
                {user.isLogged&&
                 <>
                 <p>TeamUp</p>
                 <div className="header-right-container">
                    <button onClick={()=>{
                        navigate('/list')
                    }}>Liste</button>
                    {location.pathname==="/list"&&user.infos.user.isAdmin===true&&
                    <button onClick={()=>{
                        navigate('/admin/addUser')
                    }}>Ajouter</button>}
                    <img src={user.infos.user.photo}/>
                    <button onClick={()=>{
                        dispatch(logoutUser())
                        navigate('/login')
                    }}>Déconnexion</button>
                 </div>
             </>
                }
                
        </div>
    )
}

export default Header;