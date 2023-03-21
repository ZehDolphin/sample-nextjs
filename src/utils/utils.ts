import { useEffect, useState } from "react";

export function useTime() {
	const [time, setTime] = useState("");
	useEffect(() => {
		setTime(new Date().toJSON());
	}, []);
	return time;
}

export function wait(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchWithDelay(url: string, delay: number = 500) {
	return wait(delay).then(() => fetch(url));
}
