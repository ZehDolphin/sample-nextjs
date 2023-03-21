import { inter } from "@/pages";
import { fetchWithDelay, useTime } from "@/utils/utils";
import Head from "next/head";
import React from "react";

export async function getStaticProps() {
	const res = await fetchWithDelay("https://jsonplaceholder.typicode.com/todos");
	const data = await res.json();

	return {
		props: {
			data,
			time: new Date().toJSON(),
		},
		revalidate: 30,
	};
}

export default function ISRPage({ data, time }: any) {
	const rendered = useTime();

	return (
		<>
			<Head>
				<title>ISR - Sample Next App</title>
				<meta name="description" content="Created by ZehDolphin" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={inter.className}>
				<h1>Incremental Static Regeneration</h1>
				<p>This example uses ISR to pre-render the page but also revalidate the cache every 30 seconds.</p>
				<pre>
					{JSON.stringify(
						{
							generated: time,
							rendered: rendered,
							age_seconds: rendered != "" ? (new Date(rendered).getTime() - new Date(time).getTime()) / 1000 : "",
							num_todos: data.length,
							todos: data,
						},
						null,
						4
					)}
				</pre>
			</main>
		</>
	);
}
