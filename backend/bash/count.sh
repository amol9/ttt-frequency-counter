#!/bin/bash

n=$1

curl -s https://terriblytinytales.com/test.txt | grep -Po "\w+" | grep -Pv "\d+" | tr [A-Z] [a-z] | sort | uniq -c | sort -k1 -n -r | head -n $n | sed -e "s/\([0-9]\+\)\s\(\w\+\)/[\"\2\", \1]/g" | sed -e "s/^[ \t]*//g" | tr '\n' ',' | rev | cut -c2- | rev | sed -e "s/\(.*\)/[\1]/" 