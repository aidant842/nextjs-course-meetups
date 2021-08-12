import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta
                    name="description"
                    content="Browse a huge list of highly active React meetups"
                />
            </Head>
            <MeetupList meetups={props.meetups} />;
        </>
    );
};

/* export async function getServerSideProps(context) {
    const request = context.req;
    const response = context.response;
    //fetch data from an api
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
    };
} */

//Has to be named getStaticProps
export async function getStaticProps() {
    //fetch data from an API
    const client = await MongoClient.connect(process.env.MONGODB_URL);
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find().toArray();
    client.close();
    //always need to return an object
    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            })),
        },
        // how often to re-render page on server in seconds
        revalidate: 1,
    };
}

export default HomePage;
