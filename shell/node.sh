#!/bin/bash


NODE_VERSION="10.15.3"

cd /opt/

wget https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.xz


tar -xvf node-v${NODE_VERSION}-linux-x64.tar.xz

rm -rf node-v${NODE_VERSION}-linux-x64.tar.xz


ln -s /opt/node-v${NODE_VERSION}-linux-x64/bin/node /usr/local/bin/node
ln -s /opt/node-v${NODE_VERSION}-linux-x64/bin/npm /usr/local/bin/npm
