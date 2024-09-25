set dotenv-load

fetch-graphql-schema:
    bun run hive schema:fetch --type sdl --registry.accessToken $HIVE_REGISTRY_TOKEN --write schema.graphql $OCCURENCES_API_HIVE
