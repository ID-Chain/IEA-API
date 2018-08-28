FROM arthurmanz/ubuntu-indy-nodejs:1.5.0

ARG pool_ip

WORKDIR /var/app

ENV LD_LIBRARY_PATH=$HOME/.local/lib:/usr/local/lib:/usr/lib

## Copy rest of the app
COPY . .

# RUN npm install --save indy-sdk
RUN npm install

RUN bash ./bin/generate-genesis $pool_ip

CMD [ "npm", "start" ]

EXPOSE 8000
