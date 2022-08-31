import React, { useEffect, useState } from 'react';
import styles from './DiscourseCarousel.module.css';
import Post from './Post';

export default function DiscourseCarousel() {
  const [data, setData] = useState()

  const fetchData = () => {
    fetch("https://discuss.ego4d-data.org/latest.json")
      .then(response => {
        return response.json()
      })
      .then(x => {
        setData(x);
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  let post_elems = [];
  if (data) {
    let ordered = data && data.topic_list.topics.sort((a, b) => (a.created_at < b.created_at) ? 1 : -1);
    post_elems = ordered.slice(0, -1).map(post => <Post post={post} users={data.users} key={post.id}/>)
  }

  return (
    <section className={styles.discourseCarousel}>
        <h3 style={{color: 'var(--ifm-color-secondary-contrast-foreground)'}}>Latest Posts from the Forum:</h3>
        <div style={{ width: '100%', padding: '3% 2% 5% 2%', overflowX: 'auto', overflowY: 'hidden', margin: 'auto'}}>
          <div className={styles.postContainer}>
            {post_elems}
          </div>
        </div>
    </section>
  );
}
