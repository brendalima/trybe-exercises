#!/bin/bash
ARQUIVO="Cervello.jpg"
CAMINHO="pwd"
if [ -e "$CAMINHO/$ARQUIVO" ]
then
    echo "O caminho $CAMINHO/$ARQUIVO está habilitado!"
fi

if [ -w "$CAMINHO/$ARQUIVO" ]
then
    echo "Você tem permissão para editar $ARQUIVO"
else
    echo "Você NÃO foi autorizado a editar $ARQUIVO"
fi
