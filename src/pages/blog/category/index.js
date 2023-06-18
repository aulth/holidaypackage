import Navbar from '../../../../components/blog/Navbar'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Popular from '../../../../components/blog/home/Popular'
import Subscribe from '../../../../components/blog/home/Subscribe'
import Head from 'next/head'
import Footer from '../../../../components/Footer'
const Index = () => {
    const [data, setData] = useState('')
    const fetchArticle = async () => {
        let response = await fetch('/api/blog/fetchall');
        let json = await response.json();
        if (json.success) {
          let categoryCounts = {};
          json.article.forEach(item => {
            const categories = item.category.split(', ');
            categories.forEach(category => {
              if (categoryCounts[category]) {
                categoryCounts[category]++;
              } else {
                categoryCounts[category] = 1;
              }
            });
          });
          // Example output: { 'Category A': 3, 'Category B': 2, 'Category C': 2, ... }
          setData(categoryCounts);
        }
      };
      
    useEffect(() => {
      fetchArticle();
    }, [])
    
    return (
        <>
            <Head>
                {/* <!-- Primary Meta Tags --> */}
                <title>Category - Blog</title>
                <meta name="title" content="Category - Mohd Usman Blog" />
                <meta name="description" content="Discover diverse content on our category page. From tips to stories, thoughts to tech, join the conversation and expand your knowledge with our informative and engaging pieces." />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://mohd-usman.vercel.app/blog/category/`} />
                <meta property="og:title" content="Category - Mohd Usman Blog" />
                <meta property="og:description" content="Discover diverse content on our category page. From tips to stories, thoughts to tech, join the conversation and expand your knowledge with our informative and engaging pieces." />
                <meta property="og:image" content="" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={`https://mohd-usman.vercel.app/blog/category/`} />
                <meta property="twitter:title" content="Category - Mohd Usman Blog"/>
                <meta property="twitter:description" content="Discover diverse content on our category page. From tips to stories, thoughts to tech, join the conversation and expand your knowledge with our informative and engaging pieces." />
                <meta property="twitter:image" content="" />
            </Head>
            <Navbar />
            <div className="container m-auto flex gap-4 flex-col xl:flex-row xl:px-16 px-4 py-4">
                <div className="w-full flex flex-col gap-4 xl:w-[60%]">
                    <div className="w-full rounded-lg">
                        <div className="container m-auto flex gap-4 flex-col    justify-center  ">
                            {
                                data && Object.keys(data).map((item, index)=>{
                                    return <div key={index} className='w-full bg-white flex justify-between p-2 rounded'>
                                            <Link href={`/blog/category/${item.toLowerCase()}`}><h3 className="font-semibold">{item[0].toUpperCase()+item.slice(1).toLowerCase()}</h3></Link>
                                            <h4 className="font0semibold">{data[item]}</h4>
                                        </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4 xl:w-[40%]">
                    <div className="w-full rounded-lg bg-white">
                        <Popular />
                    </div>
                    <div className="w-full rounded-lg bg-white">
                        <Subscribe />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Index