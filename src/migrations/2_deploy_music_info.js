const MusicInfo = artifacts.require("./MusicInfo.sol");
module.exports = function(deployer) {
  deployer.deploy(MusicInfo);
};