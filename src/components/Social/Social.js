import React from 'react'
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import Loading from '../Loading/Loading'

const Social = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)
    const [signInWithFacebook, FbUser, FbLoading, FbError] = useSignInWithFacebook(auth)
    const navigate = useNavigate()

    if (googleUser || FbUser) {
        navigate('/home')
    }
    if (googleLoading || FbLoading) {
        return <Loading></Loading>
    }
    let socialError
    if (googleError || FbError) {
        socialError = <p className='text-danger '> {googleError?.message} {FbError?.message}</p>
    }
    return (
        <div>
            {socialError}
            <button className='btn btn-primary d-block mx-auto my-2' onClick={() => signInWithGoogle()}>SignIn With Google</button>

            <button className='btn btn-primary d-block mx-auto my-2' onClick={() => signInWithFacebook()}>SignIn With FaceBook</button>
        </div>
    )
}

export default Social