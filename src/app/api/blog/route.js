import { NextResponse } from "next/server";
import { writeFile } from "fs/promises"
import BlogModel from "@/lib/models/BlogModel";
import connectDB from "@/lib/config/db";


const LoadDB = async () => {
    await connectDB()
}
LoadDB()




export async function GET(request) {
    console.log('GET Method');
    const blogs = BlogModel.find({})
    return NextResponse.json({ blogs })
}

export async function POST(request) {
    const formData = await request.formData()
    const timestamp = Date.now();

    const image = formData.get("image")
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData)
    const path = `./public/${timestamp}_${image.name}`
    await writeFile(path, buffer)
    const imgUrl = `/${timestamp}_${image.name}`

    const blogData = {
        title: `${formData.get("title")}`,
        description: `${formData.get("description")}`,
        category: `${formData.get("category")}`,
        author: `${formData.get("author")}`,
        authorImg: `${formData.get("authorImg")}`,
        image: `${imgUrl}`,
    }

    const data = await BlogModel.create(blogData)
    console.log(data);

    return NextResponse.json({ success: true, msg: "Blog Added" })
}