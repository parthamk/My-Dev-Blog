import React, { useEffect, useState } from 'react'
import { createClient } from "contentful"
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';





const BlogList = () => {
    const [blogPosts, setBlogPosts] = useState([])
    const client = createClient({ space: "ck1jpucpjqym", accessToken: "URubI-sJaaWB5Rm6bl6Uwbc7SIf03abIDMxVQH6_wbQ" })

    useEffect(() => {
      const getAllEntries = async () => {
        try {
          await client.getEntries().then((entries) => {
            console.log(entries)
            setBlogPosts(entries)
          })
        } catch (error) {
          console.log(`Error fetching authors ${error}`);
        }
      };
      getAllEntries()
    }, [])

  return (
    <div id="layout" className="pure-g">
    <div className="content pure-u-1 pure-u-md-3-4">
      <div>
        <div className="posts">
          <h1 className="content-subhead">Web Dev Blog</h1>

          {blogPosts?.items?.map((post) => (
            <section className="post" key={post.sys.id}>
              <header className="post-header">
                <img src={post.fields.blogImage.fields.file.url} title="" alt={post.fields.title} width="578" height="291" />
                <h2 className="post-title pt-3">{post.fields.blogTitle}</h2>
                <p className="post-meta">
                  By: <a href="https://twitter.com/imparthamk" className="post-author">{post.fields.blogAuthor}</a> Post Date: <span></span>
                  <small>
                  {new Intl.DateTimeFormat('en-GB', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                    }).format(isNaN(Date.parse(post.fields.createDate)) ? new Date() : new Date(post.fields.createDate))}
                  </small>
                </p>
                
                <p className='post-description'>
                    {post.fields.blogSummery}
                </p>
              </header>
              <div className="post-description">
                <p>{post.fields.blogSummary}
                </p>
                {/* className="button button1" */}
                <Link
                  to={`/blogDetails/${post.sys.id}`}
                  >
                  <Button variant="contained">Read More</Button>
                </Link>
              </div>
              <hr />  
            </section>
          ))}
        </div>


        <div className="footer">
          <div className="pure-menu pure-menu-horizontal">
            <div className="pure-menu-item">
                <a href="https://twitter.com/imparthamk" className="pure-menu-link"><span>Follow me on: </span>Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BlogList