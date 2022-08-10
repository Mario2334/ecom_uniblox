import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {StateProvider} from "./StateProvider";
import reducer,{initialState} from "./reducer";

function MyApp({ Component, pageProps }: AppProps) {
  return(
      <StateProvider reducer={reducer} initialState={initialState}>
        <Component {...pageProps} />
      </StateProvider>
  )
}

export default MyApp
