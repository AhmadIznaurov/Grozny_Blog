import React from 'react';
import {Blogs_data} from "@/data_view/blogs";
import styles from '../../styles/blogs.module.scss';
import {Blog} from "@/components/Blogs/Blog";

export const Blogs = () => {
    return (
        <div className={styles.container}>
            {
                Blogs_data.map((item) => {
                    return <Blog item={item} key={item.id} />
                })
            }
        </div>
    );
}

