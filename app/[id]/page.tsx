import React from 'react';


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
        <>
           <h1>{data.title}</h1>
            <p>{data.blog_text}</p>
        </>
    );
}

