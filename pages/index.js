import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Results from "@/components/Results";
import Head from "next/head";

export default function Home() {
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
            <Results />
        </>
    );
}
