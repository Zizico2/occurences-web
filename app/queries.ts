import { graphql, type ResultOf } from "@/graphql";
import { cacheExchange, createClient, fetchExchange } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";

export const Fires = graphql(`
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

export type Fires = ResultOf<typeof Fires>;

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

export const { getClient } = registerUrql(makeClient);
