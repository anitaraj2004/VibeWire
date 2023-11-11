curl --request POST \
     --url https://api.verbwire.com/v1/nft/mint/quickMintFromFile \
     --header 'X-API-Key: sk_live_e0fe1549-697a-489c-9b3c-662f93ad9489' \
     --header 'accept: application/json' \
     --header 'content-type: multipart/form-data' \
     --form allowPlatformToOperateToken=true \
     --form chain=bsc-testnet \
     --form name=VibeWire \
     --form description=VibeWire \
     --form recipientAddress=vibewiretoken