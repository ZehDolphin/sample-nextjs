import type { AppProps } from "next/app";
import Link from "next/link";
import "../style.scss";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<section id="menubar">
				<Link prefetch={false} href="/">
					Home
				</Link>
				<Link prefetch={false} href="/csr">
					CSR
				</Link>
				<Link prefetch={false} href="/ssr">
					SSR
				</Link>
				<Link prefetch={false} href="/ssg">
					SSG
				</Link>
				<Link prefetch={false} href="/isr">
					ISR
				</Link>
			</section>
			<Component {...pageProps} />
		</>
	);
}
