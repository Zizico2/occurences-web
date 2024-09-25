import { graphql, type ResultOf } from "@/graphql";

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
