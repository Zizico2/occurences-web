import type * as React from "react";
import { getRequestContext } from "@cloudflare/next-on-pages";
import Layout from "./components/Layout";

interface EnvVars {
	GOOGLE_MAPS_API_KEY: string;
}

export default function RootLayout(props: { children: React.ReactNode }) {
	const googleMapsApiKey = (getRequestContext().env as unknown as EnvVars)
		.GOOGLE_MAPS_API_KEY;
	return <Layout googleMapsApiKey={googleMapsApiKey}>{props.children}</Layout>;
}
