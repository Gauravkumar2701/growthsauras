#!/bin/sh

# Exit on errors
set -e

# Variables
DOMAIN="growthsauras.com"
EMAIL="gouravkumar2701@gmail.com"
CERT_PATH="/etc/letsencrypt/live/$DOMAIN"

# For testing, add --staging flag to avoid rate limits
# STAGING_FLAG="--staging" 
STAGING_FLAG="" 

echo "### Checking for existing certificate for $DOMAIN..."

if [ -d "$CERT_PATH" ]; then
  echo "### Certificate found, starting renewal process..."
else
  echo "### Certificate not found, requesting a new one..."
  
  # Request a new certificate
  certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email "$EMAIL" \
    --agree-tos \
    --no-eff-email \
    --non-interactive \
    -d "$DOMAIN" \
    $STAGING_FLAG
fi

# Start a renewal loop in the background
(
  while :; do
    echo "### Renewing certificate..."
    certbot renew --quiet
    sleep 12h
  done
) &

# Wait for the background process to prevent the container from exiting
wait
