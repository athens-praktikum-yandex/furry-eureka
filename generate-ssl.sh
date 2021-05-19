#!/usr/bin/env bash

[ -d "ssl" ] && rm -rf ssl
[ -f "server.csr.cnf" ] && rm server.csr.cnf
[ -f "v3.ext"  ] && rm v3.ext

mkdir ssl && cd ssl

cat > server.csr.cnf <<- EOM
[req]
default_bits=2048
prompt=no
default_md=sha256
distinguished_name=dn

[dn]
C=US
ST=New York
L=Rochester
O=End Point
OU=Testing Domain
emailAddress=your-administrative-address@your-awesome-existing-domain.com
CN=localhost
EOM

cat > v3.ext <<- EOM
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names

[alt_names]
DNS.1 = https://athens-furry-eureka-04.ya-praktikum.tech
EOM

openssl genrsa -des3 -out rootCA.key 2048
openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 1024 -out rootCA.pem

sudo su -c 'openssl req -new -sha256 -nodes -out server.csr -newkey rsa:2048 -keyout server.key -config <(cat server.csr.cnf)'
sudo openssl x509 -req -in server.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out server.crt -days 500 -sha256 -extfile v3.ext

