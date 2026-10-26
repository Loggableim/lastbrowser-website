# Beta 0.1.57-demo.4 — public download hosting

Website links (after deploy + publish):

- `https://lastbrowser.com/downloads/beta/Lastbrowser-0.1.57-demo.4-x64-setup.exe`
- `https://lastbrowser.com/downloads/beta/Lastbrowser-0.1.57-demo.4-x86_64.AppImage`

Beta downloads are hosted on GitHub Releases. The Cloudflare Pages Function `functions/downloads/beta/[file].js` 302-redirects to the GitHub asset (or to the releases page if the asset is not yet published).

To add a beta: publish it as a GitHub (pre)release, then set `githubUrl` for the file in `functions/_lib/beta-download-assets.js`.

## Upload gate

Upload only after Cid confirms the exact SHA-256 values. This beta line is not a
stable release: no Git tag, no GitHub Release, no merge to `main` without a
separate acceptance. The stable v0.1.55 GitHub assets stay unchanged.

## Artifacts

| File path | File | SHA-256 | Notes |
| --- | --- | --- | --- |
| `beta/Lastbrowser-0.1.57-demo.4-x64-setup.exe` | Windows setup (signed) | `48a47345d7c23badedfc7c8b39836e132c6a987a09236854699c4a27d37293d7` | Verified signed candidate from #294 (`77006141`). Unsigned build hash was `b0ed565e72eb49ded0fc1e3dc8c8643b83e3a6a6d3c7eb24b3415b6b96aeb319`; Authenticode changes the bytes, so the signed hash replaces it. |
| `beta/Lastbrowser-0.1.57-demo.4-x64-portable.exe` | Windows portable (signed) | `5395678ae23f98279af29a8d0b2c7a56c458aaf77a97feb6ddc3ac1d1d66379b` | Verified signed candidate from #294 (`77006141`). Not linked on the website; upload for parity. |
| `beta/Lastbrowser-0.1.57-demo.4-x86_64.AppImage` | Linux AppImage | `4d6080c9f0cb044effd2376928333d17c092ceece374bbdfe737e1ba7a175870` | Build commit `77006141` on `lastbrowser/demo4-ship-b614` (source: PR #286). |

The function returns the releases page until `githubUrl` is set for a file. No Git tag and no
GitHub Release are created for this beta line yet.
