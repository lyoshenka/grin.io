#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

(
  cd $DIR
  hugo server -D -p 8000 --bind 0.0.0.0
)
