#!/bin/bash
if [ -d "$1" ]
    then
        echo "$1 é um diretório!"
elif [ -f "$1" ]
    then
        echo "$1 é um arquivo comum"
else
    echo "$1 é outro tipo de arquivo"
fi

ls -l $1