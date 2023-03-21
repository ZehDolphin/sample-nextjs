import type { AppProps } from "next/app";
import Link from "next/link";
import "../style.scss";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<section id="menubar">
				<Link href="/">Home</Link>
				<Link href="/csr">CSR</Link>
				<Link href="/ssr">SSR</Link>
				<Link href="/ssg">SSG</Link>
				<Link href="/isr">ISR</Link>
			</section>
			<Component {...pageProps} />
		</>
	);
}
