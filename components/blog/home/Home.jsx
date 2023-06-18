import React from 'react'
import Popular from './Popular'
import Widget1 from './Widget1'
import Subscribe from './Subscribe'
import Widget3 from './Widget3'
import Widget2 from './Widget2'
import Widget4 from './Widget4'
const Home = ({data, category}) => {
    return (
        <div className="container m-auto flex gap-4 flex-col xl:flex-row xl:px-16 px-4">
            <div className="w-full flex flex-col gap-4 xl:w-[60%] pb-4">
                <div className="w-full rounded-lg bg-white ">
                    <Widget1 title={category.widget1}  data={data.filter(item => item.category.toLowerCase().includes(category.widget1.toLowerCase()))} />
                </div>
                <div className="w-full rounded-lg bg-white ">
                    <Widget2 title={category.widget2}  data={data.filter(item => item.category.toLowerCase().includes(category.widget2.toLowerCase()))}  />
                </div>
                <div className="w-full rounded-lg bg-white ">
                    <Widget3 title={category.widget3}   data={data.filter(item => item.category.toLowerCase().includes(category.widget3.toLowerCase()))}  />
                </div>
                <div className="w-full rounded-lg bg-white ">
                    <Widget4 title={category.widget4}   data={data.filter(item => item.category.toLowerCase().includes(category.widget4.toLowerCase()))}  />
                </div>
            </div>
            <div className="w-full flex flex-col gap-4 xl:w-[40%] pb-4">
                <div className="w-full rounded-lg bg-white">
                    <Popular  data={data} />
                </div>
                <div className="w-full rounded-lg bg-white">
                    <Subscribe />
                </div>
            </div>
        </div>
    )
}

export default Home