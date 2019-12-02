FROM mhart/alpine-node:8

WORKDIR /app

COPY package.json /app
COPY lerna.json /app
COPY yarn.lock /app
COPY babel.config.js /app

COPY packages/isomorphic-next /app/packages/isomorphic-next
COPY shared/isomorphic /app/shared/isomorphic
COPY shared/common /app/shared/common

RUN apk --no-cache add pkgconfig autoconf automake libtool nasm build-base zlib-dev
RUN yarn && cd packages/isomorphic-next && yarn build

CMD [ "yarn", "serve:iso-next" ]

EXPOSE 3000
