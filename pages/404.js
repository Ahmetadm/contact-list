
import styles from '../styles/NotFound.module.css'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {

      router.push('/')
    }, 3000)
  }, [])
    return ( 
        <div className={styles.notFound}>
            <h1>Hmmm...</h1>
            <h2>That page can not be found</h2>
            <p>Go back to the <Link href='/'><a className={styles.link}>Home page</a></Link></p>
        </div>
     );
}
 
export default NotFound;