export const runtime = "edge";
import type * as React from "react";
import DataGrid from "@/app/components/Datagrid";
import { cacheExchange, createClient, fetchExchange } from "@urql/next";
import { registerUrql } from "@urql/next/rsc";
import type { DocumentInput } from "@urql/next";
import type { ResultOf } from "gql.tada";
import { graphql } from "@/graphql";
import { Fires, getClient } from "../queries";



export default async function HomePage() {
	const result = await getClient().query(Fires, {});
	const { data, error } = result;
	if (error) return <p>Oh no... {error.message}</p>;
	if (!data) return <p>Loading...</p>;

	return <DataGrid fires={data} />;
}
