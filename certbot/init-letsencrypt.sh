#!/bin/bash

DOMAIN=growthsauras.com
EMAIL=your-email@example.com
WEBROOT_PATH=/var/www/certbot

# Obtain SSL certificate
certbot certonly --webroot --webroot-path=$WEBROOT_PATH -d $DOMAIN -d www.$DOMAIN --email $EMAIL --agree-tos --non-interactive

# Reload Nginx to apply the new certificates
nginx -s reload
