import 'bootstrap/dist/css/bootstrap.css'
import { Inter } from 'next/font/google'
import  "../styles/about_module.css";
import  "../styles/privacypolicy_module.css"
import "../styles/return_module.css"
import "../styles/terms_of_service_module.css"
import '../styles/Footer_module.css';
import '../styles/Secondary_module.css';
import '../styles/carousel_module.css'
import '../styles/Header_module.css'
import '../styles/toggle_module.css'
import '../styles/Fabric_module.css'
import '../styles/pattern_module.css'
import '../styles/size_module.css'
import '../styles/sizes_module.css'



const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
 
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      
    </>
  );
}




