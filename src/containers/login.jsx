import React, {useState, useEffect} from 'react'
import {loginUser} from '../api/user'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux' 
import {selectUser, connectUser} from '../slices/userSlice'


const Login = (props) =>{
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const [redirect, setRedirect] = useState(false)

    const navigate= useNavigate()
    const dispatch= useDispatch()

    useEffect(()=>{
        if(redirect){
            navigate("/")
        }
    },[redirect])
    
    const onSubmitForm = ()=>{
        let datas = {
            email: email,
            password: password
        }
        
        loginUser(datas)
        .then((res)=>{
            if(res.success === "Succès de l'authentification"){
                console.log("inininininiin")
                window.localStorage.setItem('weshToken', res.token)
                let obj ={
                    token: res.token,
                    user : res.user
                }
                dispatch(connectUser(obj))
                setRedirect(true)
            }
        })
        .catch(err=>console.log(err))
    }
    /*if(redirect){
        return <Navigate to="/" />
    }*/
    return (
        <section className="container">
            <div className="section-login">
                <p>Pour vous connectr à Team Up, entrez votre identfiant et mot de passe</p>
                <form
                    className="form"
                    onSubmit={(e)=>{
                    e.preventDefault()
                    onSubmitForm()
                    }}
                >
                    
                    <input type="email"
                        placeholder="Votre mail"
                        onChange={(e)=>{
                            setEmail(e.currentTarget.value)
                        }}
                        required
                    />
                    
                    <input type="password"
                        placeholder="Votre mot de passe"
                        onChange={(e)=>{
                            setPassword(e.currentTarget.value)
                        }}
                        required
                    />
                    
                    <input type="submit" name="Enregistrer" />
                </form>
            </div>
        </section>
    )
}

export default Login