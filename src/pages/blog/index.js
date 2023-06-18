import React from 'react'
import Navbar from '../../../components/blog/Navbar'
import Recent from '../../../components/blog/home/Recent'
import Home from '../../../components/blog/home/Home'
import Footer from '../../../components/Footer'
import Head from 'next/head'
const Blog = ({data, category}) => {
  return (
    <>
    <Head>
            {/* <!-- Primary Meta Tags --> */}
            <title>{process.env.NEXT_PUBLIC_WEBSITE} - Blog</title>
            <meta name="title" content="Mohd Usman - Blog" />
            <meta name="description" content="Discover thought-provoking stories, tips, and insights on technology and more. Engage with our SEO-optimized blog for expertly written content that keeps you informed and entertained." />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://mohd-usman.vercel.app/blog" />
            <meta property="og:title" content="Mohd Usman - Blog" />
            <meta property="og:description" content="Discover thought-provoking stories, tips, and insights on technology and more. Engage with our SEO-optimized blog for expertly written content that keeps you informed and entertained." />
            <meta property="og:image" content="" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={`https://mohd-usman.vercel.app/blog`} />
            <meta property="twitter:title" content="Mohd Usman - Blog" />
            <meta property="twitter:description" content="" />
            <meta property="twitter:image" content="" />
          </Head>
    <Navbar/>
    <Recent data={data.reverse()}/>
    <Home data={data} category={category}/>
    <Footer/>
    </>
  )
}

export default Blog
export async function getServerSideProps(context) {
  var response = await fetch(process.env.NEXT_PUBLIC_DOMAIN+'/api/blog/fetchall')
  var data = await response.json();
  console.log(data)
  if (data.success) {
    data = data.article;
    data = data.filter(item=>item.live)
    var response = await fetch(process.env.NEXT_PUBLIC_DOMAIN+'/api/setting/widget/fetch');
    var json = await response.json();
    console.log(json)
    if(json.success){
      var category = json.widget
      console.log(category)
    }
  } else {
    data = "";
  }
  console.log(data);
  return {
    props: {
      data: data,
      category:category
    }, // will be passed to the page component as props
  }
}