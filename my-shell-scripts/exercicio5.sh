#!/bin/bash
if [ -d "./$1" ]
    then
        NUMEROARQUIVOS=`ls -l ./$1 | grep "^-" -c`
        echo "O $1 tem $NUMEROARQUIVOS arquivos."
else
    echo "O argumento $1 não é um diretório!"
fi
