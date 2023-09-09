import React from 'react';
import styles from '../../styles/blogs.module.scss';
import {Blog} from "@/components/Blogs/Blog";
import {Blogs_dataProps} from "@/data_view/Blogs";




async function getBlogs() {
    const res = await fetch("http://localhost:3000/api/hello");
    return await res.json()
}

export const Blogs: React.FC = async () => {
    const Blogs_data = await getBlogs()
    return (
        <div className={styles.container}>
                {Blogs_data.map((item: Blogs_dataProps) => {
                   return <Blog item={item} key={item.id}/>;
                },
                )}
        </div>
    );
}

