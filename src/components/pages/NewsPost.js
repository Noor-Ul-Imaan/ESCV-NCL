import React, { useState, useEffect } from 'react';
import './News.css';
import Footer from '../Footer';
import { createClient } from 'contentful';
import { useParams } from 'react-router-dom';

function NewsPost() {
  const [singleNewsPost, setSingleNewsPost] = useState(null);
  const { id } = useParams();
  const client = createClient({
    space: "fg8c8ttvyh8y",
    accessToken: "sQcdQjMZoB8rwKgxtF4XEIQcRIqZX3TurNC2FiOdFk8",
  });

  useEffect(() => {
    const getEntryById = async () => {
      try {
        const entry = await client.getEntry(id);
        setSingleNewsPost(entry);
      } catch (error) {
        console.log(`Error fetching entry: ${error}`);
      }
    };
    getEntryById();
  }, [client, id]);

  if (!singleNewsPost) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='news-page-container'>
        <h1 className='headline'>{singleNewsPost.fields.newsHeadline}</h1>
        <img src={singleNewsPost.fields.newsImage.fields.file.url} className='news-img' alt='News' />
        <p className='news-para'>{singleNewsPost.fields.newsContent}</p>
      </div>
      <Footer />
    </>
  );
}

export default NewsPost;
