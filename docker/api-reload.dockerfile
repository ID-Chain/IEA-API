FROM arthurmanz/ubuntu-indy-nodejs:1.5.0

ARG pool_ip

WORKDIR /var/app

ENV LD_LIBRARY_PATH=$HOME/.local/lib:/usr/local/lib:/usr/lib

VOLUME ["/var/app"]

## Copy rest of the app
ADD . /var/app

RUN ls -l

# RUN npm install --save indy-sdk
RUN npm install

RUN echo $pool_ip
RUN bash ./bin/generate-genesis $pool_ip

CMD [ "npm", "start" ]

EXPOSE 8000
