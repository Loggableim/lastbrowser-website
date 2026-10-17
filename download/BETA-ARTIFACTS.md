# Beta 0.1.57-demo.4 — public download hosting

Website links (after deploy + upload):

- `https://lastbrowser.com/downloads/beta/Lastbrowser-0.1.57-demo.4-x64-setup.exe`
- `https://lastbrowser.com/downloads/beta/Lastbrowser-0.1.57-demo.4-x86_64.AppImage`

Cloudflare Pages Function: `functions/downloads/beta/[file].js` serves objects from R2 bucket **`lastbrowser-beta-downloads`** (binding `BETA_DOWNLOADS` in `wrangler.toml`).

## Upload gate

Upload only after Cid confirms the exact SHA-256 values. This beta line is not a
stable release: no Git tag, no GitHub Release, no merge to `main` without a
separate acceptance. The stable v0.1.55 GitHub assets stay unchanged.

## Artifacts

| R2 object key | File | SHA-256 | Notes |
| --- | --- | --- | --- |
| `beta/Lastbrowser-0.1.57-demo.4-x64-setup.exe` | Windows setup (signed) | `48a47345d7c23badedfc7c8b39836e132c6a987a09236854699c4a27d37293d7` | Verified signed candidate from #294 (`77006141`). Unsigned build hash was `b0ed565e72eb49ded0fc1e3dc8c8643b83e3a6a6d3c7eb24b3415b6b96aeb319`; Authenticode changes the bytes, so the signed hash replaces it. |
| `beta/Lastbrowser-0.1.57-demo.4-x64-portable.exe` | Windows portable (signed) | `5395678ae23f98279af29a8d0b2c7a56c458aaf77a97feb6ddc3ac1d1d66379b` | Verified signed candidate from #294 (`77006141`). Not linked on the website; upload for parity. |
| `beta/Lastbrowser-0.1.57-demo.4-x86_64.AppImage` | Linux AppImage | `4d6080c9f0cb044effd2376928333d17c092ceece374bbdfe737e1ba7a175870` | Build commit `77006141` on `lastbrowser/demo4-ship-b614` (source: PR #286). |

Example (after `wrangler login`):

```bash
wrangler r2 object put lastbrowser-beta-downloads/beta/Lastbrowser-0.1.57-demo.4-x86_64.AppImage \
  --file=/path/to/Lastbrowser-0.1.57-demo.4-x86_64.AppImage

wrangler r2 object put lastbrowser-beta-downloads/beta/Lastbrowser-0.1.57-demo.4-x64-setup.exe \
  --file=/path/to/signed/Lastbrowser-0.1.57-demo.4-x64-setup.exe
```

The proxy returns HTTP 503 until the objects exist in R2. No Git tag and no
GitHub Release are created for this beta line.
