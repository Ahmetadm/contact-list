import Head from 'next/head'
import styles from '../../styles/Contacts.module.css'
import Card from '../../components/Card';



export const getStaticProps = async () => {

    const res = await fetch(' https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: { contacts: data }
    }
}



const Contacts = ({ contacts }) => {

    return (

        <>
            <Head>
                <title>Contact List | All Contacts</title>
                <meta name="keywords" content="contacts" />
            </Head>
            <div>
                <h1>
                    All Contacts
                </h1>
                <div className={styles.container}>
                    {contacts.map(contact => (
                        <Card key={contact.id} name={contact.name} id={contact.id}/>

                    ))}
                </div>
            </div>
        </>
    );
}

export default Contacts;