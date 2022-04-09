# Coc Zig

[Coc.nvim](https://github.com/neoclide/coc.nvim) wrapper for the
[Zig Language Server](https://github.com/zigtools/zls).

Is recommended to use [zig.vim](https://github.com/ziglang/zig.vim) also.

## Configuration

If your `coc-settings`:

```json
"zig.enabled": true,
"zig.startUpMessage": true,
"zig.path": "zls",
"zig.debugLog": false,
```

## Install

In you Neovim run:

```
:CocInstall coc-zig
```

Or using Packer:

```lua
use {'UltiRequiem/coc-zig', run='yarn install --frozen-lockfile && yarn build'}
```

## License

coc-zig is licensed under the [MIT License](./LICENSE)

---

> This extension is built with
> [create-coc-extension](https://github.com/fannheyward/create-coc-extension)
