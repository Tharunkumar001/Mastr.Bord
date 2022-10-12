import '../styles/globals.css'
import { AppWrapper } from './controllers/AppContext'

function MyApp({ Component, pageProps }) {
  return(
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp
