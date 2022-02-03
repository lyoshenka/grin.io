#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

(
  cd $DIR
  bundle exec jekyll serve --watch -P 8000 # -H 0.0.0.0  # uncomment for LAN access
)
