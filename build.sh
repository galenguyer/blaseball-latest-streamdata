#!/usr/bin/env bash
# build, tag, and push docker images

# exit if a command fails
set -o errexit

# exit if required variables aren't set
set -o nounset

# create docker run image
docker build -t docker.galenguyer.com/blaseball/latest-streamdata:latest .

# push the image to registry
docker push docker.galenguyer.com/blaseball/latest-streamdata:latest
