import { blog_data } from '@/Assets/assets'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios'

const BlogList = () => {

    const [menu, setMenu] = useState("All")
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get("/api/blog");
            setBlogs(response.data.blogs);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    }
    useEffect(() => {
        fetchBlogs()
    }, [])


    return (
        <div>

            <div className='flex justify-center gap-6 my-10'>
                <button onClick={() => setMenu("All")} className={menu === "All" ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>All</button>
                <button className={menu === "Technology" ? 'bg-black text-white py-1 px-4 rounded-sm' : ''} onClick={() => setMenu("Technology")}>Technology</button>
                <button className={menu === "Startup" ? 'bg-black text-white py-1 px-4 rounded-sm' : ''} onClick={() => setMenu("Startup")}>Startup</button>
                <button className={menu === "Lifestyle" ? 'bg-black text-white py-1 px-4 rounded-sm' : ''} onClick={() => setMenu("Lifestyle")}>Lifestyle</button>
            </div>
            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                {blogs.filter((item) => menu === "All" ? true : item.category === menu).map((item, index) => {
                    return <BlogItem key={index} image={item.image} id={item._id} category={item.category} title={item.title} description={item.description} />
                })}
            </div>

        </div>
    )
}

export default BlogList
