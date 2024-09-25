export const runtime = "edge";
import type * as React from "react";
import DataGrid from "@/app/components/Datagrid";
import { cacheExchange, createClient, fetchExchange } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";
import type { DocumentInput } from "@urql/next";
import type { ResultOf } from "gql.tada";
import { graphql } from "@/graphql";

const makeClient = () => {
	return createClient({
		url: "https://fires-gql-282262722329.us-west2.run.app",
		exchanges: [cacheExchange, fetchExchange],
	});
};

const { getClient } = registerUrql(makeClient);

const fires = graphql(`
  query Fires {
    occurences {
      nature
      location {
        latitude
        longitude
      }
      groupedStatus
      occurenceStatus
    }
  }`);

export type Fires = ResultOf<typeof fires>;

export default async function HomePage() {
	const result = await getClient().query(fires, {});
	const { data, error } = result;
	if (error) return <p>Oh no... {error.message}</p>;
	if (!data) return <p>Loading...</p>;

	return <DataGrid fires={data} />;
}
