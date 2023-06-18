import React from 'react'

const page = ({ data }) => {
  return (
    <>
      {
        data && JSON.stringify(data)
      }
    </>
  )
}

export default page
export async function getServerSideProps(context){
  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/blog/fetchone`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ link: 'the-power-of-exercise-physical-and-mental-benefits' }),
  });
  
  let data = await response.json();
  console.log(data)
  if (data.success) {
    data = data.article;
  } else {
    data = null;
  }
  return {
    props: {
      data: data,
    },
  }
}