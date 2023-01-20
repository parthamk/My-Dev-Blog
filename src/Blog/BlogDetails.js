import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { createClient } from "contentful"
import ReactMarkdown from 'react-markdown'

const BlogDetails = () => {
    const [singleBlogpost, setSingleBlogpost] = useState([])
    const client = createClient({ space: "ck1jpucpjqym", accessToken: "URubI-sJaaWB5Rm6bl6Uwbc7SIf03abIDMxVQH6_wbQ" })
    const {id} = useParams()
    console.log(id);
    useEffect(() => {
      const getEntryById = async () => {
          try{
              await client.getEntry(id).then((entries) => {
                  console.log(entries)
                  setSingleBlogpost(entries)
                })
          }catch(error){
              console.log(error)
          }
      }
      getEntryById()
    },[])

console.log(singleBlogpost)

  return (

    <div id="layout" className="pure-g">
    <div className="content pure-u-1 pure-u-md-3-4">
      <div>
        <div className="posts">
          <Link to="/BlogList" className="content-subhead"> 
          Back to Main
          </Link>
            <section className="post">
              <header className="post-header">
                <h2 className="post-title pt-3">{singleBlogpost?.fields?.blogTitle}</h2>
                <img src={singleBlogpost?.fields?.blogImage?.fields?.file?.url} title="" alt={singleBlogpost?.fields?.blogTitle} width="578" height="291" />
                <p className="post-meta">
                  By: <a href="https://twitter.com/imparthamk" className="post-author">{singleBlogpost?.fields?.blogAuthor}</a> Post Date: <span></span>
                  <small>
                  {new Intl.DateTimeFormat('en-GB', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                    }).format(isNaN(Date.parse(singleBlogpost?.fields?.createDate)) ? new Date() : new Date(singleBlogpost?.fields?.createDate))}
                  </small>
                </p>
                <hr />
                {/* <p className='post-description'>
                    {singleBlogpost?.fields?.postContent}
                </p> */}
              <div className="post-description">
                <ReactMarkdown children={singleBlogpost?.fields?.postContent} />
              </div>
                
              </header>
            </section>

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

export default BlogDetails