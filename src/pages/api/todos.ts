import { wait } from "@/utils/utils";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	generated: string;
	todos: any[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	await wait(500);
	const response = await fetch("https://jsonplaceholder.typicode.com/todos");
	const data = await response.json();

	res.status(200).json({ generated: new Date().toISOString(), todos: data });
}
