import Head from 'next/head';
import NavBar from "../components/NavBar";
import styles from '../styles/Home.module.css';

export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>UniSearch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1 className="text-black text-3xl">
          UniSearch
        </h1>
        <pre>{data && data.name}</pre>
      </main>

      <footer className={styles.footer}>
        Made by Jasneet
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/api/getData");
  const json = await res.json();
  return {
    props: {
      data: json,
    },
  };
}