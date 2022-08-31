import React, { useEffect, useState } from 'react';
import styles from './Post.module.css';
import { category_names, category_colors } from './categories.js';

export default function Post({ post, users }) {
    return (
        <a className={styles.post} href={`https://discuss.ego4d-data.org/t/${post.slug}/${post.id}`} target="_blank">
            <div className={styles.postHeader} style={{ background: category_colors[post.category_id] || '#000' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{category_names[post.category_id] || 'Uncategorized'} </span>
                    <span>{new Date(post.created_at).toLocaleDateString('en-us', { month: "short", day: "numeric" })}</span>
                </div>
            </div>
            <div className={styles.postBody}>
                {post.title}
            </div>
        </a>
    );
}
