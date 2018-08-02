# IdentityChain Agent REST API

## Running locally

### Without Docker

#### Requirements

- Running [Hyperledger Indy Node] Pool.

- Running [MongoDB] instance which is used for persistence on top of
Indy-DLT to support stateless REST API.

- Check [Install MongoDB Community Edition] on how to install MongoDB
on your system.

> NOTE: libindy creates a `.indy_client` directory in your home directory
to store data. If API does not connect correctly to the pool, please
remove this folder to allow for new configuration settings.

#### Run

```bash
npm install
npm run dev
```

#### Config

Check `.env` file for configuration of indy-pool, host and port of API
and DB. If required add own `pool_transaction_genesis` file and change
configuration here.

### With Docker Compose

This will build and run 3 services: Indy-Pool, MongoDB & this project API.

#### Requirements

Please follow the instruction to install [Docker] & [Docker-Compose]

#### Run

```bash
docker-compose up
```

> Ports are exposed and you can also develop the API by commenting all lines
related to the API service from the docker-compose.yml file and running
`npm run dev`

## Running Tests

1. Run API as described in the previous section
1. Run the test using npm script:
    ```bash
    npm test
    ```

[Docker]: https://docs.docker.com/install/
[Docker-Compose]: https://docs.docker.com/compose/install/
[Hyperledger Indy Node]: https://github.com/hyperledger/indy-node
[MongoDB]: https://www.mongodb.com/
[Install MongoDB Community Edition]:
  https://docs.mongodb.com/manual/administration/install-community/
