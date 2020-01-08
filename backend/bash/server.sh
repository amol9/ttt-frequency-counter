#!/bin/bash

while true; do echo `./count.sh 10` | nc -l 8000; done