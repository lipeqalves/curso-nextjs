import '@/styles/globals.css'
import MainContainer from "../components/main-container"
export default function App({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  );
}
