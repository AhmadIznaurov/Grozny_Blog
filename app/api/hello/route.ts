import {Blogs_data} from "@/app/api/hello/Blogs";
import {NextResponse} from "next/server";
import {Blogs_data} from "@/app/api/hello/Blog";





export async function GET(request: Request) {
    return  NextResponse.json(Blogs_data)
}