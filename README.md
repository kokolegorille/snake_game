# Testing WASM with Rust and Webpack

Wasm, Webpack, WasmpackPlugin

```
$ mkdir snake_game
$ cd snake_game
$ cargo init --lib
```

Update Cargo.toml
Add dependencies

```
[package]
name = "snake_game"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2.81"
wee_alloc = "0.4.5"
```

Configure packages
```
$ npm init -y
$ npm i -D @wasm-tool/wasm-pack-plugin html-webpack-plugin webpack webpack-cli webpack-dev-server
```

Configure webpack.config.js

```
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')

module.exports = {
  entry: './public/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html'
    }),
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, '.'),
      forceMode: "production"
    })
  ],
  experiments: {
    asyncWebAssembly: true
  }
}
```
