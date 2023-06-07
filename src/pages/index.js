import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useUserContext } from '../../cotext/contextapi'
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';
import TrendingPackages from '../../components/TrendingPackages';
import TrendingVisas from '../../components/TrendingVisas';
import WhyBookWithUs from '../../components/WhyBookWithUs';
import Footer from '../../components/Footer';

export default function Home() {
  const {user} = useUserContext();
  return (
    <>
    <Navbar/>
    <Carousel/>
    <TrendingPackages/>
    <TrendingVisas/>
    <WhyBookWithUs/>
    <Footer/>
    </>
  )
}
