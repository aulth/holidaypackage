import React from 'react'
import Recent from '../../../components/blog/home/Recent'
import Navbar from '../../../components/blog/Navbar'
import Home from '../../../components/blog/home/Home'
import Footer from '../../../components/Footer'
import { NextSeo } from 'next-seo';
import Head from 'next/head'
import SEO from '../../../components/SEO'
const Blog = ({ data }) => {

  return (
    <>
      <SEO
        title={`${process.env.NEXT_PUBLIC_WEBSITE} - Home`}
        description="This is the description of my page"
        ogTitle={`${process.env.NEXT_PUBLIC_WEBSITE} - Home`}
        ogDescription="This is the description of my page for Open Graph"
        ogImageUrl="https://example.com/image.jpg"
      />
      <Navbar />
      <Recent data={data.reverse()} />
      <Home data={data} />
      <Footer />
    </>
  )
}

export default Blog
export async function getServerSideProps(context) {
  const response = await fetch(process.env.NODE_ENV == 'production' ? 'https://mohd-usman.vercel.app/api/blog/fetchall' : 'http://localhost:3000/api/blog/fetchall')
  var data = await response.json();
  if (data.success) {
    data = data.article;
    data = data.filter(item => item.live)
  } else {
    data = "";
  }
  return {
    props: {
      data: data
    }, // will be passed to the page component as props
  }
}