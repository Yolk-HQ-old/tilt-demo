FROM yolkai/base

WORKDIR /usr/src/app

RUN npx nx build frontend

CMD ["npx", "nx", "serve", "frontend"]