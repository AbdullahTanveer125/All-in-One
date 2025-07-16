import React from 'react'
import { useSelector } from 'react-redux';
import Counter from '../Components/Counter'

import { motion } from 'framer-motion';
import { FiUser, FiMail, FiLogOut } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { clearUser } from '../Slices/userSlice'; // Assuming you have this action

import { useNavigate } from 'react-router-dom';



function Home() {

    const navigate = useNavigate();

    const user = useSelector((state) => state.user.user);
    console.log("In Home Page= ", user)

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(clearUser());
        // Additional logout logic if needed
    };


    return (
        <div className='bg-slate-100'>


            {/* <div>
                {user ? (
                    <>
                        <h2>Welcome, {user.name}!</h2>
                        <p>Email: {user.email}</p>
                    </>
                ) : (
                    <p>No user logged in.</p>
                )}
            </div> */}






            <div className=" min-h-[300px] flex items-center justify-center p-4">
                {user ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                        {/* Profile header with gradient */}
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-center">
                            <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4">
                                <FiUser className="text-white text-3xl" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">{user.name}</h2>
                            <p className="text-indigo-100 mt-1">Welcome back!</p>
                        </div>

                        {/* Profile details */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                                <div className="p-2 rounded-full bg-indigo-100 text-indigo-600">
                                    <FiMail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="font-medium text-gray-900">{user.email}</p>
                                </div>
                            </div>

                            {/* Additional user details can be added here */}
                            {/* Example:
                        {user.role && (
                            <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                                <div className="p-2 rounded-full bg-green-100 text-green-600">
                                    <FiAward className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Role</p>
                                    <p className="font-medium text-gray-900 capitalize">{user.role}</p>
                                </div>
                            </div>
                        )} */}

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleLogout}
                                className="w-full flex items-center justify-center space-x-2 py-3 px-4 mt-6 rounded-lg font-medium text-white bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 transition-all cursor-pointer"
                            >
                                <FiLogOut className="h-5 w-5" />
                                <span>Sign Out</span>
                            </motion.button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md w-full"
                    >
                        <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4">
                            <FiUser className="text-gray-400 text-xl" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-700">No user logged in</h3>
                        <p className="text-gray-500 mt-1 mb-4">Please sign in to view your profile</p>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => navigate('/login')}
                            className="px-6 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all cursor-pointer"
                        >
                            Sign In
                        </motion.button>
                    </motion.div>
                )}
            </div>

            <Counter />


        </div>
    )
}

export default Home
