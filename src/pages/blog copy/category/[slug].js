import Category from '../../../../components/blog/category/Category'
import Navbar from '../../../../components/blog/Navbar'
import React from 'react'
import Head from 'next/head'
import Footer from '../../../../components/Footer'
const CategoryPage = ({ data, category }) => {


  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>{category.charAt(0).toUpperCase() + category.slice(1)}</title>
        <meta name="title" content={category.charAt(0).toUpperCase() + category.slice(1)} />
        {/* <meta name="description" content={descData[category]?descData[category]:'Description not available for this category.'} /> */}

        {/* <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://mohd-usman.vercel.app/blog/category/${category.toLowerCase()}`} />
        <meta property="og:title" content={category.charAt(0).toUpperCase() + category.slice(1)} />
        <meta property="og:description" content={descData[category]?descData[category]:'Description not available for this category.'} />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://mohd-usman.vercel.app/blog/category/${category.toLowerCase()}`} />
        <meta property="twitter:title" content={category.charAt(0).toUpperCase() + category.slice(1)} />
        <meta property="twitter:description" content={descData[category]?descData[category]:'Description not available for this category.'} />
        <meta property="twitter:image" content="" /> */}
      </Head>
      <Navbar />
      {
        data && data.length > 0 &&
        <>
          <Category category={category} data={data} />
        </>
      }
      {
        data && data.length <= 0 &&
        <div className="m-auto p-4">
          <h2 className="text-center">
            No Article Found in <b>{category[0].toUpperCase()}{category.slice(1).toLowerCase()}</b> category
          </h2>
        </div>
      }
      <Footer />
    </>
  )
}

export default CategoryPage
export async function getServerSideProps(context) {
  const { slug } = context.params
  const response = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/api/blog/fetchcategory', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ category: slug })
  })
  var data = await response.json();

  if (data.success) {
    data = data.articles;
  } else {
    data = "";
  }
  return {
    props: {
      data: data,
      category: slug
    }, // will be passed to the page component as props
  }
}