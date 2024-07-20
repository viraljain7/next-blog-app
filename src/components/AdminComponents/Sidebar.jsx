import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-slate-100'>
            <div className='px-2 sm:pl-14 py-3 border border-black'>
                <Image src={assets.logo} alt='logo' width={120} />
            </div>
            <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>

                <div className="absolute right-0 w-[50%] sm:w-[80%]">
                    <Link href={'/admin/addProduct'} className='flex items-center gap-3 font-medium px-3   bg-white shadow-[-5px_5px_0px_#000] py-2 border border-black '>
                        <Image src={assets.add_icon} alt='blog' width={28} />
                        <p className='hidden sm:block'>
                            Add Blogs
                        </p>
                    </Link>
                    <Link href={'/admin/blogList'} className='mt-5 flex items-center gap-3 font-medium px-3 bg-white shadow-[-5px_5px_0px_#000] py-2 border border-black'>
                        <Image src={assets.blog_icon} alt='blog' width={28} />
                        <p className='hidden sm:block'>
                            Blogs lists
                        </p>
                    </Link>
                    <Link href={'/admin/subscriptions'} className='mt-5 flex items-center gap-3 font-medium px-3 bg-white shadow-[-5px_5px_0px_#000] py-2 border border-black '>
                        <Image src={assets.email_icon} alt='blog' width={28} />
                        <p className='hidden sm:block'>
                            Subscriptions
                        </p>

                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
