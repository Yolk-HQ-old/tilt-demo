FROM yolkai/base

WORKDIR /usr/src/app

RUN npx nx build backend

CMD ["npx", "nx", "serve", "backend"]