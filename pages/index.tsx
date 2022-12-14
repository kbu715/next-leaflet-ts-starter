import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ShowMap from "../components/map";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [icon, setIcon] = useState("car");

  return (
    <div className={styles.container}>
      <Head>
        <title>Next Leaflet TS Starter</title>
        <meta
          name="description"
          content="Next Leaflet Typescript Mapping Project Starter"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next Leaflet TS Starter</h1>

        <Link href="/full">
          <a>
            <ShowMap icon={icon} />
          </a>
        </Link>

        <h2>Choose your icon</h2>

        <div>
          <Image
            src="/Car.svg"
            alt="car"
            width={"50px"}
            height={"50px"}
            style={{
              cursor: "pointer",
            }}
            onClick={() => setIcon("car")}
          />
          <Image
            src="/Arrow.svg"
            alt="car"
            width={"50px"}
            height={"50px"}
            style={{
              cursor: "pointer",
            }}
            onClick={() => setIcon("arrow")}
          />
        </div>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://github.com/kbu715/next-leaflet-ts-starter"
            target="_blank"
            className={styles.card}
            rel="noreferrer"
          >
            <h3>GitHub &rarr;</h3>
            <p>See the code in action.</p>
          </a>

          <a
            href="https://nextjs.org/docs"
            target="_blank"
            className={styles.card}
            rel="noreferrer"
          >
            <h3>Next.js &rarr;</h3>
            <p>Getting started with Next.js</p>
          </a>

          <a
            href="https://leafletjs.com/"
            target="_blank"
            className={styles.card}
            rel="noreferrer"
          >
            <h3>Leaflet &rarr;</h3>
            <p>Mapping features and APIs.</p>
          </a>

          <a
            href="https://react-leaflet.js.org/"
            target="_blank"
            className={styles.card}
            rel="noreferrer"
          >
            <h3>React Leaflet &rarr;</h3>
            <p>Native Leaflet components in React</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
