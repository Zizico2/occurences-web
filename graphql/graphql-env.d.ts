/* eslint-disable */
/* prettier-ignore */

export type introspection_types = {
    'Boolean': unknown;
    'Coordinates': { kind: 'OBJECT'; name: 'Coordinates'; fields: { 'latitude': { name: 'latitude'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null; }; } }; 'longitude': { name: 'longitude'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null; }; } }; }; };
    'Float': unknown;
    'GroupedStatus': { name: 'GroupedStatus'; enumValues: 'ACTIVE' | 'CONCLUDING' | 'DISPATCH' | 'RESOLUTION'; };
    'Occurence': { kind: 'OBJECT'; name: 'Occurence'; fields: { 'groupedStatus': { name: 'groupedStatus'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'GroupedStatus'; ofType: null; }; } }; 'location': { name: 'location'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Coordinates'; ofType: null; }; } }; 'nature': { name: 'nature'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'occurenceStatus': { name: 'occurenceStatus'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'OccurenceStatus'; ofType: null; }; } }; }; };
    'OccurenceStatus': { name: 'OccurenceStatus'; enumValues: 'ACTIVE' | 'INITIAL_DISPATCH' | 'CONCLUDING' | 'RESOLUTION' | 'MONITORING' | 'ARRIVAL_ON_SCENE' | 'DISPATCH'; };
    'QueryRoot': { kind: 'OBJECT'; name: 'QueryRoot'; fields: { 'occurences': { name: 'occurences'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Occurence'; ofType: null; }; }; }; } }; }; };
    'String': unknown;
};

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  name: never;
  query: 'QueryRoot';
  mutation: never;
  subscription: never;
  types: introspection_types;
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}