import React from 'react';
import '../../App.css';
import './News.css';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { useContentfulData } from "../CMS/contentful";
   
function News () {
    const newsList = useContentfulData('newsPage');

    return (
        <div>
            <div className='news-and-updates'>
                <h1>NEWS & UPDATES</h1>
            </div>        
            

            <div className='headlines'>
                {newsList.map((post) => (
                    <div key={post.sys.id}>
                    <Link to={`/newsPost/${post.sys.id}`}>
                        <div className='news-card'>
                            <p>{post.fields.newsDate}</p>
                            <p className='news-headline'>{post.fields.newsHeadline}</p>
                        </div>            
                    </Link>
                    <hr></hr>                       
                    </div>
        
                    

                ))}

        
            </div>
            <Footer/>
          
        </div>
 
    );
}

export default News;