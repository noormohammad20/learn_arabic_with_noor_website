import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    const navigate = useNavigate()
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <button className='btn btn-primary' onClick={() => signInWithGoogle()}>SignIn With Google</button>
        </div>
    )
}

export default Social