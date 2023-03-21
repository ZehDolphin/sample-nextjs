import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";

export const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Sample Next App</title>
				<meta name="description" content="Created by ZehDolphin" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={inter.className}>
				<h1>Sample NextJS App</h1>
				<p>This project is used for various benchmarking tests on new server configurations.</p>
			</main>
		</>
	);
}
