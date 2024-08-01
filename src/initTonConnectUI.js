import { TonConnectUI } from '@tonconnect/ui'

export function initTonConnectUI() {
  const tonConnectUI = new TonConnectUI({
    manifestUrl: new URL('/js-template/tonconnect-manifest.json', window.location.href).toString(),
  });

  return tonConnectUI;
}