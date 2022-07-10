#!/bin/sh
# run_server_prod.sh
# Run script to deploy the same git repo on frontend/backend prod server,
# using an environment var CV_APP_SIDE to know the server role and run the
# appropiate web/app server.
# 2022-07-08 | CR
#
# Parameters:
# $1 = $PORT (Heroku)
# $2 = Base dir [/app]
# $3 = App side: backend / [frontend]
#
# Run local:
# FrontEnd: sh scripts/run_server_prod.sh "" .
# BackEnd: sh scripts/run_server_prod.sh "" . backend
#
export PORT=$1 ;
export BASE_DIR=$2 ;
if [ "${BASE_DIR}" = "" ]; then
    export BASE_DIR="/app" ;
fi
if [ -f "${BASE_DIR}/.env" ]; then
    set -o allexport; . "${BASE_DIR}/.env"; set +o allexport ;
fi
if [ "$3" != "" ]; then
    export CV_APP_SIDE="$3" ;
fi
echo "";
echo "CV_APP_SIDE: ${CV_APP_SIDE}";
echo "REACT_APP_DEBUG: ${REACT_APP_DEBUG}";
echo "REACT_APP_API_URL: ${REACT_APP_API_URL}";
echo "";
if [ "${CV_APP_SIDE}" = "backend" ]; then
    # npm run server
    if [ "${PORT}" = "" ]; then
        export PORT="3000" ;
    fi
    echo "Running BackEnd server on port: ${PORT}" ;
    # ${BASE_DIR}/node_modules/json-server/lib/cli/bin.js data.json --port ${PORT} ;
    npm run server;
    # json-server data.json --port ${PORT} ;
else
    # npm build ;
    # npm start ;
    if [ "${PORT}" = "" ]; then
        export PORT="8080" ;
    fi
    echo "Running FrontEnd server on port: ${PORT}" ;
    # ${BASE_DIR}/node_modules/react-scripts/bin/react-scripts.js build && node server.js
    if npm run build-prod ; then
        npm run start-prod;
    fi
    # ${BASE_DIR}/node_modules/webpack/bin/webpack.js --mode production && node server.js ;
fi
