"use client";
import { assets } from '@/Assets/assets';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Header = () => {
    const [email, setEmail] = useState("")
    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("email", email);
        const response = await axios.post('/api/email', formData)
        if (response.data.success) {
            toast.success(response.data.msg)
            setEmail("")
        } else {
            toast.error("Error while Subscribing")
        }
    }
    return (
        <div className=" p-5 md:px-12 lg:px-28">
            <div className="flex justify-between items-center">
                <Image src={assets.logo} width={180} alt="logo" className="w-[130px] sm:w-auto" />
                <Link href={'/admin'}>
                    <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black border-solid shadow-[-7px_7px_0px_#000]">
                        Get started <Image src={assets.arrow} alt="arrow logo" />
                    </button>
                </Link>
            </div>
            <div className="text-center my-8">
                <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
                <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, consectetur adipisicing elit. Lorem ipsum dolor sit amet Ratione, laborum!
                </p>
                <form onSubmit={submitHandler} className="flex justify-between max-w-[700px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000]  ">
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter your email" className="pl-4 outline-none" />

                    <button type="submit" className=" text-sm sm:text-xl border-l border-black p-5 sm:px-8 active:bg-gray-600 active:text-white flex items-center justify-center">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>


    );
};

export default Header;
