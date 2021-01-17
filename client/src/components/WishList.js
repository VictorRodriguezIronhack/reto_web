import AuthServices from '../services/auth.service'
import React, { useState } from 'react';
import { Button } from 'react-bootstrap'

const WishList = ({ setUser }) => {

    const authServices = new AuthServices()
    const logOut = async () => {

        try {
            const logoutMessage = await authServices.logout()
            console.log(logoutMessage.data.message)
            setUser(undefined)

        } catch (error) {
            console.log(error.response.data)
        }

    }

    return (
        <>
            <h3>WishList</h3>
            <Button variant='warning' onClick={logOut}>Log out</Button>
        </>
    );
}

export default WishList;