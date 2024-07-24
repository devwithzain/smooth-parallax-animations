"use client";
import { useEffect } from "react";
import { SMHome } from "@/components";
import Lenis from "@studio-freight/lenis";

export default function App() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<>
			<SMHome />
		</>
	);
}
