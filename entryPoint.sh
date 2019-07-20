#!/bin/sh
#set -xe
#: "${PROD_URL?Need an api url}"


mainFileName=\"\$(ls /usr/share/nginx/html/main*.js)\" && \
          envsubst '\$PROD_URL' < \${mainFileName} > main.tmp && \
          mv main.tmp  \${mainFileName} && nginx -g 'daemon off;'" > run.sh