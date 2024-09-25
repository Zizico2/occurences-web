export const runtime = "edge";
import type * as React from "react";
import { APIProvider, Map as GMap } from "@vis.gl/react-google-maps";
import { getRequestContext } from "@cloudflare/next-on-pages";
import OMap from "@/app/components/OMap";
import { cacheExchange, createClient, fetchExchange, gql } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";
import { PageContainer } from "@toolpad/core";
import { graphql, type ResultOf } from "@/graphql";

interface EnvVars {
	GOOGLE_MAPS_API_KEY: string;
}

// https://fogos.icnf.pt/localizador/webserviceocorrencias.asp
// https://fogos.icnf.pt/localizador/mostragooglemapsheatmaps.asp
// https://fogos.icnf.pt/sgif2010/IncPrint.asp?Codigo=20240918936
// https://prociv-portal.geomai.mai.gov.pt/arcgis/apps/experiencebuilder/experience/?id=29e83f11f7a34339b35364e483e3846f
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

export default async function OrdersPage() {
	const result = await getClient().query(fires, {});
	const { data, error } = result;

	if (error) return <p>Oh no... {error.message}</p>;
	if (!data) return <p>Loading...</p>;

	return <OMap fires={data} />;
}
