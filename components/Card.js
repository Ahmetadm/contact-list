import styles from '../styles/Card.module.css'
import Link from 'next/link';


const Card = ({ name, id }) => {
    return (
        
            <div className={styles.column}>
                 <Link href={`/contacts/${id}`}>
                <a className={styles.card}>
                   
                    <div className={styles.header}>
                        <h3 className={styles.name}>{name}</h3>
                        <div className={styles.circle}><p className={styles.letter}>{name[0]}</p></div></div>
                    
                </a>
                </Link>
            </div>
        

    );
}

export default Card;