import { useEffect, useState } from "react";

export function useTime() {
	const [time, setTime] = useState("");
	useEffect(() => {
		setTime(new Date().toJSON());
	}, []);
	return time;
}
