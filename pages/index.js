import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import Link from 'next/link'





export default function Home() {

  return (
    <>
    <Head>
    <title>Contact List | Home</title>
    <meta name="keywords" content="contacts" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi atque quos quo magni possimus nostrum autem assumenda nisi voluptatibus distinctio.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi atque quos quo magni possimus nostrum autem assumenda nisi voluptatibus distinctio.</p>
      <div className={styles.center}><Link href='/contacts'><a className={styles.btn}>See Contact Listing</a></Link></div>
    </div>
    </>
  )
}



// export async function getStaticProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

// https://jsonplaceholder.typicode.com/users