# blaseball-latest-streamdata

A simple NodeJS app to stream data from the blaseball API and provide GET endpoints so developers can GET once and not worry about streaming

## Endpoints

- `/api/v2/streamData/latest` - return the latest complete streamData data: object. (hopefully) guaranteed to have all fields

- `/api/v2/streamData/games` - returns the latest games object from streamData

- `/api/v2/streamData/leagues` - returns the latest leagues object from streamData

- `/api/v2/streamData/temporal` - returns the latest temporal object from streamData

- `/api/v2/streamData/fights` - returns the latest fights object from streamData

### Deprecated

- `/api/v1/latest/streamData` - returns the latest, potentially incomplete, data: object from streamData
