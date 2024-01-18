FROM ubuntu

RUN apt-get update \
    && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_21.x | bash - \
    && apt-get install -y nodejs

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN npm install -g npm@latest \
    && npm install

COPY index.js index.js


ENTRYPOINT [ "node", "index.js" ]
