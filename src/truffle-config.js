const path = require("path");
module.exports = {
  // コンパイル後に作成されるjsonファイルの保存場所を設定する。
  // 初期設定で「"app/src/contracts"」となっているはずなので、もし違う場合は記載の通りに変更する。
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    }
  }
};