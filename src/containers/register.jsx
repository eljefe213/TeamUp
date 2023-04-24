import React, { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";

import { addOneUser } from "../api/user";

const Register = (props) => {

    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword]=useState("")
    const [gender, setGender]=useState("")
    const [phone,setPhone]=useState("")
    const [birthday, setBirthday]=useState("")
    const [city, setCity]=useState("")
    const [country, setCountry]=useState("")
    const [photo, setPhoto]=useState("")
    const [service, setService]=useState("")
    
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState(null);

    const [collaborateur, setCollaborateur] = useState({
        id: '',
        gender: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phone: '',
        birthdate: '',
        city: '',
        country: '',
        photo: '',
        service: '',
        isAdmin: false,
      });

    const onSubmitForm = () => {
        setError(false);
      
        if (
            firstName === "" ||
            lastName === "" ||
            email === "" ||
            password === "" 
        ) {
            setError("Please fill out all fields");
        } else if (password === confirmPassword) {
            const data = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                gender: gender,
                phone: phone,
                birthday: birthday,
                city: city,
                service: service,
                isAdmin: false
            };
            addOneUser(data)
            .then((response) => {
                if (response.status !== 200) {
                    setError(response.msg);
                } else {
                    setRedirect(true);
                }
            })
            .catch((error) => {
              setError(error);
            });
        }else{
            console.log("Erreur, echec enregistrement")
        }
      
    }
    
    return (
    <div>
      <h2>S'enregistrer</h2>
            <form
                className="b-form"
                onSubmit={(e)=>{
                 e.preventDefault()
                 onSubmitForm()
                }}
            >
                <input type="text"
                    placeholder="FirstName"
                    onChange={(e)=>{
                        setFirstName(e.currentTarget.value)
                    }}
                    required
                />
                <input type="text"
                    placeholder="LastName"
                    onChange={(e)=>{
                        setLastName(e.currentTarget.value)
                    }}
                    required
                />
                <input type="email"
                    placeholder="Email"
                    onChange={(e)=>{
                        setEmail(e.currentTarget.value)
                    }}
                    required
                />
                
                <input type="password"
                    placeholder="password"
                    onChange={(e)=>{
                        setPassword(e.currentTarget.value)
                    }}
                    required
                />
                
                <input type="text"
                    placeholder="gender"
                    onChange={(e)=>{
                        setGender(e.currentTarget.value)
                    }}
                    required
                />
                
                <input type="text"
                    placeholder="Phone"
                    onChange={(e)=>{
                        setPhone(e.currentTarget.value)
                    }}
                    required
                />
                
                <input type="text"
                    placeholder="birthday"
                    onChange={(e)=>{
                        setBirthday(e.currentTarget.value)
                    }}
                    required
                />
                
                <input type="text"
                    placeholder="city"
                    onChange={(e)=>{
                        setCity(e.currentTarget.value)
                    }}
                    required
                />

                <input type="text"
                    placeholder="country"
                    onChange={(e)=>{
                        setCountry(e.currentTarget.value)
                    }}
                    required
                />

                <input type="text"
                    placeholder="photo"
                    onChange={(e)=>{
                        setPhoto(e.currentTarget.value)
                    }}
                    required
                />

                <input type="text"
                    placeholder="service"
                    onChange={(e)=>{
                        setService(e.currentTarget.value)
                    }}
                    required
                />
                
                <input type="submit" name="Submit" />
            </form>
    </div>
  );
  
}

export default Register