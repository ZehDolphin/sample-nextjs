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
	};
}

export default function SSGPage({ data, time }: any) {
	const rendered = useTime();

	return (
		<>
			<Head>
				<title>SSG - Sample Next App</title>
				<meta name="description" content="Created by ZehDolphin" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={inter.className}>
				<h1>Static Site Generation</h1>
				<p>This page uses SSG to pre-render the page at build-time and then serve it as static files during runtime.</p>
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
