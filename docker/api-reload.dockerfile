FROM arthurmanz/ubuntu-indy-nodejs:1.5.0

ENV LD_LIBRARY_PATH=$HOME/.local/lib:/usr/local/lib:/usr/lib

VOLUME ["/var/app"]

WORKDIR /var/app

CMD ["sh", "-c", "./bin/run-dev ${POOL_IP}"]

EXPOSE 8000
