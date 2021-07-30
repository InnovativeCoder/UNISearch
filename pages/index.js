import Head from 'next/head';
import React, { Component } from 'react';
import Counter from "../components/counter";
import NavBar from "../components/NavBar";
import styles from '../styles/Home.module.css';
// import {connect} from 'react-redux';
// import {decrementCounter, incrementCounter} from '../redux/actions/counterActions';


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
        <pre>{data && data.University}</pre>
      </main>
      <Counter />
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


export default class index extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
