import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useUserContext } from '../../cotext/contextapi'
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';
import TrendingPackages from '../../components/TrendingPackages';
import TrendingVisas from '../../components/TrendingVisas';
import WhyBookWithUs from '../../components/WhyBookWithUs';
import Footer from '../../components/Footer';

export default function Home({ top3Visas, top3Packages, allPackage }) {
  const { user } = useUserContext();
  return (
    <>
      <Navbar />
      <Carousel content={allPackage}/>
      <TrendingPackages top3Packages={top3Packages} />
      <TrendingVisas top3Visas={top3Visas} />
      <WhyBookWithUs />
      <Footer />
    </>
  )
}
export async function getServerSideProps(context) {
  let data = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/visa/getall`);
  data = await data.json();
  let visas = data.visas;
  visas.sort((a, b) => b.views - a.views);
  const top3Visas = visas.slice(0, 3);
  data = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/package/getall`);
  data = await data.json();
  let packages = data.packages;
  let allPackage = packages
  packages.sort((a, b) => b.views - a.views);
  const top3Packages = packages.slice(0, 3);
  return {
    props: {
      top3Visas: top3Visas,
      top3Packages: top3Packages,
      allPackage:allPackage
    }, // will be passed to the page component as props
  }
}

