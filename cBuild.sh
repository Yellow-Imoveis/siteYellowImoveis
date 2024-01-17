#!/bin/bash

# gera o build da aplicação
yarn build

# remove o arquivo build.zip se houver
# check if exists
if [ -f build.zip ]; then
    rm build.zip
fi

# zipa a pasta
zip -r build.zip build/

# manda para o servidor
scp build.zip forepoint.vendiamo:/var/www/yellow_react
