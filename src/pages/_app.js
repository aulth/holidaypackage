import '@/styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import NextNProgress from 'nextjs-progressbar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import AppStore from '../../cotext/contextapi';
import { Toaster } from 'react-hot-toast';
export default function App({ Component, pageProps }) {
  return <>
    <NextNProgress color="#DC2626" height={2} showOnShallow={true} />
    <AppStore>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Component {...pageProps} />
      </LocalizationProvider>
    </AppStore>
  </>
}
