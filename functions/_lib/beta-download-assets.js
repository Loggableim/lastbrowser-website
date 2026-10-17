/** @typedef {{ r2Key: string, contentType: string, disposition: string, sha256: string, bytes: number, upstream?: string }} BetaAsset */

export const BETA_VERSION_LABEL = '0.1.57-demo.4';

/** @type {Record<string, BetaAsset>} */
export const BETA_ASSETS = {
  'Lastbrowser-0.1.57-demo.4-x64-setup.exe': {
    r2Key: 'beta/Lastbrowser-0.1.57-demo.4-x64-setup.exe',
    contentType: 'application/octet-stream',
    disposition: 'attachment; filename="Lastbrowser-0.1.57-demo.4-x64-setup.exe"',
    sha256: '48a47345d7c23badedfc7c8b39836e132c6a987a09236854699c4a27d37293d7',
    bytes: 383098440,
  },
  'Lastbrowser-0.1.57-demo.4-x64-portable.exe': {
    r2Key: 'beta/Lastbrowser-0.1.57-demo.4-x64-portable.exe',
    contentType: 'application/octet-stream',
    disposition: 'attachment; filename="Lastbrowser-0.1.57-demo.4-x64-portable.exe"',
    sha256: '5395678ae23f98279af29a8d0b2c7a56c458aaf77a97feb6ddc3ac1d1d66379b',
    bytes: 382744690,
  },
  'Lastbrowser-0.1.57-demo.4-x86_64.AppImage': {
    r2Key: 'beta/Lastbrowser-0.1.57-demo.4-x86_64.AppImage',
    contentType: 'application/octet-stream',
    disposition: 'attachment; filename="Lastbrowser-0.1.57-demo.4-x86_64.AppImage"',
    sha256: '4d6080c9f0cb044effd2376928333d17c092ceece374bbdfe737e1ba7a175870',
    bytes: 403976168,
  },
};
