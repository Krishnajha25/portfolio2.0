import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Krishna Jha</title>
                <meta name="description" content="Krishna Jha portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                Hi There! It&apos;s me.
            </main>

            <footer className={styles.footer}>
                Made with ❤ by Krishna Jha
            </footer>
        </div>
    )
}

export default Home
