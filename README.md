# Healthy REST APIs using TypeScript and Node


## Getting Started
1. building docker image
    ```shell
    $ docker-compose build
    ```
1. package install
    ```shell
    $ docker-compose run --rm backend npm install
    ``` 
1. launch docker image
    ```shell
    $ docker-compose up -d
    ```

## API Document
1. generate
   ```shell
   $ docker-compose run --rm backend npm run spec
   ```
2. access
### [access](http://localhost:3000/docs)
**Notes.**
docker must be running.

## Setting development environment
