import {Blogs_data} from "@/app/api/hello/Blogs";
import {NextResponse} from "next/server";



export async function GET(request: Request) {
    return  NextResponse.json(Blogs_data)
}