import connectDB from "@/lib/config/db";
import emailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
    await connectDB()
}
LoadDB()




export async function POST(request) {
    const formData = await request.formData()

    const emailData = {
        email: `${formData.get("email")}`,
    }


    const data = await emailModel.create(emailData)
    console.log(data);

    return NextResponse.json({ success: true, msg: "Email Subscribed" })
}