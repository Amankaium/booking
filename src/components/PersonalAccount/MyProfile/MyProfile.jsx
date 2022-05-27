import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import s from "./MyProfile.module.css"
import axios from 'axios'


const MyProfile = () => {
    const [myToken, setToken] = useState()
    const [user, setUser] = useState({})
    const [authUser, setAU] = useState({
      login: "",
      email: "",
    })

    function setLogin(e) {
        setUser({
          ...user,
          username: e.target.value
        })
    }
  
    function setPassword(e) {
        setUser({
          ...user,
          password: e.target.value
        })
    }

    function auth(event) {
        event.preventDefault()
        fetch(
            'http://kaiaman.pythonanywhere.com/api/login',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json;charset=utf-8',
              },
              body: JSON.stringify({
                username: user.username,
                password: user.password,
              })
            }
          ).then(r=>r.json())
          .then(({key}) => {
            setToken(key)
          })
    }

    function getAuthUser() {
      axios.get(
        "http://kaiaman.pythonanywhere.com/api/user",
        {headers: {Authorization: `token ${myToken}`}}
      ).then(response => {
          console.log(response)
          setAU({
            login: response.data.data.username,
            email: response.data.data.email,
          })
      })
    }

    useEffect(getAuthUser, [myToken])

    if (myToken) {
    return(<div>
        <h3>Логин: {authUser.login}</h3>
        <h3>Почта: {authUser.email}</h3>
    </div>)
    } else {
        return (
        <form onSubmit={auth}>
            <input type="text" placeholder='Логин' value={user.username ?? ""} onChange={setLogin}/>
            <input type="password" placeholder='Пароль' value={user.password ?? ""} onChange={setPassword}/>
            <button>Войти</button>
        </form>
        )
    }
}

export default MyProfile;