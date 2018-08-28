# IdentityChain Agent REST API

## Running the application

### Prerequisites

-   Please follow the instruction to install:

1.  [Docker] & [Docker-Compose]
1.  [NodeJS] & [NPM]

### Config

Check `.env` file for configuration of indy-pool, host and port of API
and DB. If required add own `pool_transaction_genesis` file and change
configuration here. If using the default pool test network you only need
to adjust the pool_ip & pool_network_base.

> For example: pool_ip=123.1.1.100, pool_network_base=123.1.1

### Running locally - Live reload

#### Run

```bash
./manage run dev
```

#### Stop

```bash
./manage stop dev
```

### Running on Azure

#### Run

```bash
./manage run azure
```

#### Stop

```bash
./manage stop azure
```

#### Re-start API after update

```bash
./manage restart-api azure
```

## Running Tests

1. Run API as described in the previous section
1. Run the test using npm script:
    ```bash
    npm test
    ```

[docker]: https://docs.docker.com/install/
[docker-compose]: https://docs.docker.com/compose/install/
[nodejs]: https://nodejs.org/en/download/
[npm]: https://www.npmjs.com/get-npm
