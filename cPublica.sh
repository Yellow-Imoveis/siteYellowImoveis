#!/bin/bash

# remove todos os arquivos da pasta build
rm -rf build

# pega todos os arquivos do zip e descompacta na pasta build
unzip build.zip

# remove o zip
rm build.zip

# copia o arquivo de configuracao htaccess
cp bk_htaccess build/.htaccess