import React, { useEffect, useState } from 'react'
import AuthService from '../../../services/auth.service';

const authService = new AuthService()

export default function Profile(props) {

    const [userName, setuserName] = useState('')

    useEffect(() => {
        isloggedin()
    }, [])

    const isloggedin = (e) => {

        authService
            .isloggedin()
            .then(res => {
                setuserName = {
                    userName: res.data.userName
                }
                console.log(res)

            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <h2>hola {props.userName}</h2>
        </div>
    )
}
