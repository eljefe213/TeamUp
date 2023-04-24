
import React, { useState, useEffect} from "react";
import {useParams, useNavigate} from 'react-router-dom'
import { Navigate, Link } from "react-router-dom";

import { updateProfil } from "../api/user";

const AdminEdit = (props) => {

    
    const navigate=useNavigate()

    const [user, setUser]=useState(null)


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   // const [confirmPassword, setConfirmPassword]=useState("")
    const [gender, setGender]=useState("")
    const [phone,setPhone]=useState("")
    const [birthdate, setBirthdate]=useState("")
    const [city, setCity]=useState("")
    const [country, setCountry]=useState("")
    const [photo, setPhoto]=useState("")
    const [service, setService]=useState("")
    
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        console.log(service)
    },[service])

    

    const onSubmitForm = () => {
        setError(false);
      
        if (
            firstName === "" ||
            lastName === "" ||
            email === "" 
        ) {
            setError("Please fill out all fields");
        } else {
            const data = {
                gender: gender,
                firstname: firstName,
                lastname: lastName,
                email: email,
                password: password,
                phone: phone,
                birthdate: birthdate,
                city: city,
                country: country,
                photo: photo,
                service: service,
                isAdmin: false
            };
            updateProfil(data)
            .then((response) => {
                if (response.status !== 200) {
                    setError(response.msg);
                } else {
                    console.log(response.msg)
                    setRedirect(true);
                }
            })
            .catch((error) => {
              setError(error);
            });
        }
    }

    useEffect(()=>{
        if(redirect){
            navigate('/list')
        }
    },[redirect])
    
    return (
    <section className="container">
        
            <>
            <h2 style={{marginTop:"12%"}}>Modifier un utilisateur</h2>
            <form
                className="admin-form"
                onSubmit={(e)=>{
                 e.preventDefault()
                 onSubmitForm()
                }}
            >
                <select onChange={(e)=>{
                    setGender(e.currentTarget.value)
                }}>
                    <option >male</option>
                    <option >female</option>
                </select>

                <select onChange={(e)=>{
                    setService(e.currentTarget.value)
                }}>
                    <option >Marketing</option>
                    <option >Technique</option>
                    <option >Client</option>
                </select>

                <input type="text"
                    placeholder="Smith"
                    onChange={(e)=>{
                        setFirstName(e.currentTarget.value)
                    }}
                    required
                />
                <input type="text"
                    placeholder="John"
                    onChange={(e)=>{
                        setLastName(e.currentTarget.value)
                    }}
                    required
                />
                <input type="email"
                    placeholder="johnSmith@email.com"
                    onChange={(e)=>{
                        setEmail(e.currentTarget.value)
                    }}
                    required
                />

                <input type="password"
                    placeholder="(min 8 caractères)"
                    onChange={(e)=>{
                        setPassword(e.currentTarget.value)
                    }}
                    required
                />
                

                <input type="text"
                    placeholder="0765554433"
                    onChange={(e)=>{
                        setPhone(e.currentTarget.value)
                    }}
                    required
                />
                
                <input type="text"
                    placeholder="jj/mm/aaaa"
                    onChange={(e)=>{
                        setBirthdate(e.currentTarget.value)
                    }}
                    required
                />
                
                <input type="text"
                    placeholder="Paris"
                    onChange={(e)=>{
                        setCity(e.currentTarget.value)
                    }}
                    required
                />

                <input type="text"
                    placeholder="France"
                    onChange={(e)=>{
                        setCountry(e.currentTarget.value)
                    }}
                    required
                />

                <input type="text"
                    placeholder="https://"
                    onChange={(e)=>{
                        setPhoto(e.currentTarget.value)
                    }}
                    required
                />

                
                
                <input type="submit" name="Ajouter" />
            </form>
            </>
        
      
    </section>
  );
  
}

export default AdminEdit;