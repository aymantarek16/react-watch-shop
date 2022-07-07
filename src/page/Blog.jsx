import React from 'react'
import { Helmet } from 'react-helmet'
import BlogItems from '../components/blog-items/BlogItems'
import BlogTitle from '../components/blog-title/BlogTitle'
import Footer from '../components/footer/Footer'

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | eCommers</title>
      </Helmet>
      <BlogTitle/>
      <BlogItems/>
      <Footer/>
    </>
  )
}

export default Blog