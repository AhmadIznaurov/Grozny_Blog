import {NextResponse} from "next/server";
import {blog} from "@/app/api/hello/blog";

export async function GET(request: Request) {
    return  NextResponse.json(blog)
}