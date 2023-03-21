import { inter } from "@/pages";
import { fetchWithDelay, useTime } from "@/utils/utils";
import Head from "next/head";
import React from "react";

export async function getServerSideProps() {
	const res = await fetchWithDelay("https://jsonplaceholder.typicode.com/todos");
	const data = await res.json();

	return {
		props: {
			data,
			time: new Date().toJSON(),
		},
	};
}

export default function SSRPage({ data, time }: any) {
	const rendered = useTime();

	return (
		<>
			<Head>
				<title>SSR - Sample Next App</title>
				<meta name="description" content="Created by ZehDolphin" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main className={inter.className}>
				<h1>Server Side Render</h1>
				<p>This page uses a simple Server Side Rendering to fetch and display fresh data on each request.</p>
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
