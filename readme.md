# Coc Zig

[Coc.nvim](https://github.com/neoclide/coc.nvim) wrapper for the
[Zig Language Server](https://github.com/zigtools/zls).

Is recommended to use [zig.vim](https://github.com/ziglang/zig.vim) also.

## Configuration

If your `coc-settings.json`:

```json
"zig.enabled": true,
"zig.startUpMessage": true,
"zig.path": "zls",
"zig.debugLog": false,
```

## Install

In you Neovim run 🚀

```
:CocInstall coc-zig
```

Using an external plugin manager 👇

> ⚠ This is not recommended by the coc.nvim team

Packer example 📦

```lua
use {'UltiRequiem/coc-zig', run='yarn install --frozen-lockfile && yarn build'}
```

## Support

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Consider [supporting me on Patreon](https://patreon.com/UltiRequiem) if you like
my work 🙏

Don't forget to start the repo ⭐

## Licence

Licensed under the MIT License 📄
