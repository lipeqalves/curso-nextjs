import styles from "../styles/Home.module.css";

import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Head>
        <title>Página Principal</title>
      </Head>
      <div>
        <h1 className={styles.title}>Hello World Next.js</h1>
        <Image
          src="/images/city.jpg"
          width="300"
          height="400"
          alt="Cidade a noite"
        ></Image>
      </div>
    </>
  );
};
export default Home;
