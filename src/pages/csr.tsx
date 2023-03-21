import { inter } from "@/pages";
import { fetchWithDelay, useTime } from "@/utils/utils";
import Head from "next/head";
import React, { useEffect, useState } from "react";

export default function CSRPage() {
	const rendered = useTime();

	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetchWithDelay("https://jsonplaceholder.typicode.com/todos")
			.then((res) => res.json())
			.then((data) => setTodos(data));
	}, []);

	return (
		<>
			<Head>
				<title>CSR - Sample Next App</title>
				<meta name="description" content="Created by ZehDolphin" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={inter.className}>
				<h1>Client Side Render</h1>
				<p>This example is rendered on the client completely after the page has loaded.</p>
				<pre>
					{JSON.stringify(
						{
							generated: rendered,
							rendered: rendered,
							age_seconds: rendered != "" ? (new Date(rendered).getTime() - new Date(rendered).getTime()) / 1000 : "",
							num_todos: todos.length,
							todos: todos,
						},
						null,
						4
					)}
				</pre>
			</main>
		</>
	);
}
