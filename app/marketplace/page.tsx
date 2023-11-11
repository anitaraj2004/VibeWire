<<<<<<< HEAD
=======
const sdk = require('api')('@verbwire/v1.0#cfbl71zelo76w7am');

sdk.auth('sk_live_e0fe1549-697a-489c-9b3c-662f93ad9489');
sdk.postNftMintQuickmintfromfile({
  allowPlatformToOperateToken: 'true',
  chain: 'bsc-testnet',
  name: 'VibeWire',
  description: 'VibeWire',
  recipientAddress: 'vibewiretoken'
})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

  const sdk = require('api')('@verbwire/v1.0#cfbl71zelo76w7am');

sdk.auth('sk_live_e0fe1549-697a-489c-9b3c-662f93ad9489');
sdk.postNftMintMintfromfile({allowPlatformToOperateToken: 'true', quantity: '1', chain: 'goerli'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));
