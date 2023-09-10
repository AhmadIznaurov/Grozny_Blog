import React from 'react';
import './page.scss';
import Link from "next/link";


async function getPost() {
    const res = await fetch("http://localhost:3000/api/hello");

    return await res.json()
}

type Props = {
    params: {
        id: string
    }
}

export default async function Post({params: {id}}: Props) {
    const post = await getPost()
    const data = post.find((elem) => elem.id === parseInt(id))
    return (
        <div className='Post_container'>
            <div className='post_header'>
                <div className='post_header_title'>
                    <h2>
                        <Link href='/'>
                            Grozny Blogs
                        </Link>
            </h2>
        </div>
            </div>
            <div className='post'>
                <h2>{data.title}</h2>
                <p>{data.blog_text}</p>
            </div>
        </div>
    );
}

