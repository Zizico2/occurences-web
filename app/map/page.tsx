export const runtime = "edge";
import type * as React from "react";
import { APIProvider, Map as GMap } from "@vis.gl/react-google-maps";
import { getRequestContext } from "@cloudflare/next-on-pages";
import OMap from "@/app/components/OMap";
import { cacheExchange, createClient, fetchExchange } from "@urql/next";
import { registerUrql } from "@urql/next/rsc";
import { PageContainer } from "@toolpad/core";
import { graphql, type ResultOf } from "@/graphql";
import { Fires, getClient } from "../queries";

interface EnvVars {
	GOOGLE_MAPS_API_KEY: string;
}

export default async function OrdersPage() {
	const result = await getClient().query(Fires, {});
	const { data, error } = result;

	if (error) return <p>Oh no... {error.message}</p>;
	if (!data) return <p>Loading...</p>;

	return <OMap fires={data} />;
}
