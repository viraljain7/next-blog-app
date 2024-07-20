"use client"
import { assets } from '@/Assets/assets';
import Footer from '@/components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {
    const [data, setData] = useState(null);

    const fetchBlogData = async () => {
        const response = await axios.get("/api/blog", {
            params: {
                id: params.id
            }
        })
        setData(response.data)
    }

    useEffect(() => {
        fetchBlogData()
    }, [])

    return (data ?
        <>
            <div className=" p-5 md:px-12 lg:px-28  bg-slate-200/65">
                <div className="flex justify-between items-center">
                    <Image src={assets.logo} width={180} alt="logo" className="w-[130px] sm:w-auto" />
                    <Link href={'/admin'}>
                        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black border-solid shadow-[-7px_7px_0px_#000]">
                            Get started <Image src={assets.arrow} alt="arrow logo" />
                        </button>
                    </Link>
                </div>
                <div className='text-center my-24'>
                    <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto '>
                        {data.title}
                    </h1>
                    <Image className='mx-auto mt-6 border border-white rounded-full' src={data.authorImg} width={60} height={60} alt="authorImg" />
                    <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
                </div>
            </div>
            <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10 '>
                <Image src={data.image} className='border-4 text-white' width={1280} height={720} alt='content-pic' />
                <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
                <p>{data.description}</p>

                <div className='my-24'>
                    <p className='text-black font font-semibold my-4 '>Share this article on social media</p>
                    <div className="flex">
                        <Image src={assets.facebook_icon} alt='facebook logo' width={40} />
                        <Image src={assets.twitter_icon} alt='twitter logo' width={40} />
                        <Image src={assets.googleplus_icon} alt='google logo' width={40} />
                    </div>
                </div>
            </div>
            <Footer />

        </>

        : <></>
    )
}

export default page
