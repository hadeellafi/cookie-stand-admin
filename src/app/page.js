import Image from 'next/image'
import Header from '../components/Header';
import CookieStandForm from '../components/CreateForm';
import CookieStandAdmin from '@/components/CookieStandAdmin';


export default function Home() {
  return (
   <>
   <Header/>
   <CookieStandAdmin/>
   </>
  )
}
