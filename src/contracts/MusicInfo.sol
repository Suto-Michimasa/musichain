// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

pragma experimental ABIEncoderV2;

contract MusicInfo {
  uint256 public musicsCount;
  // 音楽情報を表現する構造体
  struct Music {
    string approvedDate;
    string contributor;
    string uploadData;
    string detailedInfo;
  }
  Music[] public _musics;
  //   音楽情報登録イベントの定義
  event RegisterMusicInfo(
    string approvedDate,
    string contributor,
    string uploadData,
    string detailedInfo
  );

  //   音楽情報を登録するメソッド
  function registerMusicInfo(
    string memory approvedDate,
    string memory contributor,
    string memory uploadData,
    string memory detailedInfo
  ) public {
    // 引数に設定された  音楽情報をもとに構造体を作成し、  音楽情報の配列に追加する。
    // 同時に、  音楽情報の登録件数もインクリメントする。
    Music memory music = Music({
      approvedDate: approvedDate,
      contributor: contributor,
      uploadData: uploadData,
      detailedInfo: detailedInfo
    });
    _musics.push(music);
    musicsCount++;
    //   音楽情報の登録イベントを実行する。
    emit RegisterMusicInfo(approvedDate, contributor, uploadData, detailedInfo);
  }

  // 登録された  音楽情報を全件取得するメソッド
  // 画面に表示する処理を考慮して、音楽情報の構造体の各項目をそれぞれ配列形式でレスポンスする。
  function getAllMusicInfos()
    public
    view
    returns (
      string[] memory approvedDates,
      string[] memory contributors,
      string[] memory uploadDataes,
      string[] memory detailedInfos
    )
  {
    // レスポンス用の配列を初期化する。
    approvedDates = new string[](musicsCount);
    contributors = new string[](musicsCount);
    uploadDataes = new string[](musicsCount);
    detailedInfos = new string[](musicsCount);
    // 登録された  音楽情報の件数分、レスポンス用の各配列に構造体の各項目の値を追加する。
    for (uint256 i = 0; i < musicsCount; i++) {
      Music storage music = _musics[i];
      approvedDates[i] = music.approvedDate;
      contributors[i] = music.contributor;
      uploadDataes[i] = music.uploadData;
      detailedInfos[i] = music.detailedInfo;
    }
    return (approvedDates, contributors, uploadDataes, detailedInfos);
  }
}
