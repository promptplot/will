import { FcGoogle } from 'react-icons/Fc';
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react'
import App from '.';

const Login = () => {
    const { data: session } = useSession();
    console.log(session)

    if (session) {
        return (
            // <div>
            //     <p> Welcome, {session.user.name} </p>
            //     <button onClick={() => signOut()}> SignOut </button>
            // </div>
            <App/>
        )
    }
    else {
        return (
            <div className='bg-gray-200'>
                <div className="w-screen h-screen flex justify-center items-center ">
                    <div className="border border-gray-700 p-6 bg-white rounded-[12px] ">


                        <button type="button" onClick ={() => signIn()} className="text-white bg-[#0361ff] rounded-[12px] w-60 py-2 ">
                            Log In
                        </button>
                        <div className="relative flex py-5 items-center w-full ">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>

                        <div>
                            <button type="button" className="text-white bg-[#0361ff] rounded-[12px] w-60 py-2 mt-2 ">
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default Login