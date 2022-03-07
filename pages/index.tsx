import type { NextPage } from "next";
import Head from "next/head";
import Info from "../components/Info";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Info />
    </div>
  );
};

export default Home;
