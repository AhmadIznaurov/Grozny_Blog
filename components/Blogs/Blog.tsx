import React from 'react';
import styles from '../../styles/blogs.module.scss';
import Link from "next/link";

interface BlogProps {
    item: {
        id: number
        title: string
        blog_text: string
    }
}

export const Blog: React.FC<BlogProps> = ({item}) => {
    return (
        <div className={styles.blog}>
            <Link href={`/${item.id}`}>
                <h2>{item.title}</h2>
            </Link>
            <p>{item.blog_text}</p>
        </div>
    );
}

