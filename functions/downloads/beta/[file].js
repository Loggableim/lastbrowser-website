import { BETA_ASSETS } from '../../_lib/beta-download-assets.js';

const RELEASES_URL = 'https://github.com/Loggableim/lastbrowser/releases';

export async function onRequestGet(context) {
  const file = context.params.file;
  const asset = BETA_ASSETS[file];

  if (!asset) {
    return new Response('Not found', { status: 404, headers: { 'content-type': 'text/plain; charset=utf-8', 'x-robots-tag': 'noindex' } });
  }

  const location = asset.githubUrl || RELEASES_URL;
  return new Response(null, {
    status: 302,
    headers: {
      location,
      'cache-control': 'public, max-age=300',
      'x-robots-tag': 'noindex',
    },
  });
}
