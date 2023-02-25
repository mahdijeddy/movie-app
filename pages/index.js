import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Results from "@/components/Results";
import Head from "next/head";
import requests from "@/utils/requests";

export default function Home({ results }) {
    console.log(results);
    return (
        <>
            <Head>
                <title>Movie-App</title>
                <meta name="description" content="movie app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Header */}
            <Header />
            {/* Navbar */}
            <Navbar />
            {/* Results */}
            <Results results={results} />
        </>
    );
}

export async function getServerSideProps(context) {
    const genre = context.query.genre || "fetchTrending";

    const request = await fetch(`https://api.themoviedb.org/3${requests[genre].url}`).then((res) =>
        res.json()
    );

    return {
        props: {
            results: request.results,
        },
    };
}
