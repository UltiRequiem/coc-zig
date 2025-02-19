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

Open an Issue, I will check it as soon as possible 👀

## Licence

Licensed under the MIT License 📄
