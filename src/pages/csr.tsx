import { inter } from "@/pages";
import { useTime } from "@/utils/utils";
import Head from "next/head";
import React, { useEffect, useState } from "react";

export default function CSRPage() {
	const rendered = useTime();

	const [todos, setTodos] = useState([]);
	const [generated, setGenerated] = useState("");

	useEffect(() => {
		fetch("/api/todos")
			.then((res) => res.json())
			.then((data) => {
				setTodos(data.todos);
				setGenerated(data.generated);
			});
	}, []);

	return (
		<>
			<Head>
				<title>CSR - Sample Next App</title>
				<meta name="description" content="Created by ZehDolphin" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main className={inter.className}>
				<h1>Client Side Render</h1>
				<p>This example is rendered on the client completely after the page has loaded.</p>
				<pre>
					{JSON.stringify(
						{
							generated: generated,
							rendered: rendered,
							age_seconds: rendered != "" ? (new Date(rendered).getTime() - new Date(generated).getTime()) / 1000 : "",
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
