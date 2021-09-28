import styles from '../../styles/Details.module.css'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(contact => {
        return {
            params: { id: contact.id.toString() }
        }
    })




    return {
        paths: paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json()

    return {
        props: { contact: data }
    }
}


const Details = ({ contact }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h1 className={styles.title}>{contact.name}</h1>
                <div className={styles.circle}><p className={styles.letter}>{contact.name[0]}</p></div>
            </div>
            <div className="cardBody">
                <p><b>Phone: </b>{contact.phone}</p>
                <p><b>Email: </b>{contact.email}</p>
                <p><b>Website: </b>{contact.website}</p>
                <p><b>Company: </b>{contact.company.name}</p>
            </div>
        </div>
    );
}

export default Details;