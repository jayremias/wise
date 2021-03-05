import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import { ToastContainer } from 'react-nextjs-toast';



function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <GlobalStyle/>
    <ToastContainer />
    <Component {...pageProps}/>
  </>
  )
}

export default App
