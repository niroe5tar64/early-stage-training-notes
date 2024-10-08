# Task Summary

## 概要
HTML/CSS+JavaScriptを用いてカレンダーをブラウザに表示させる。

## 要件
過去に[二口がVue.jsで実装したカレンダー](https://niros-sample.s3.ap-northeast-1.amazonaws.com/WebPage/dist-vue-calender/index.html)と同様の機能を持つカレンダーを作成する事

下記に大まかな要件を記載する。
- 表示要素
  - カレンダーヘッダー
    - 表示年月
    - 前月/翌月遷移ボタン
  - カレンダーテーブル
    - テーブルヘッダー: 曜日表示
    - テーブルボディー: 日付表示
- 表示について
  - 曜日によって色を分ける（平日: 白黒, 土曜: 青, 日曜: 赤）
  - 表示月前後の日付は薄色で表示する
  - 本日の日付は他とは異なるスタイルで表現する（サンプルは太字に赤丸表示）
- 動作について
  - 初期表示時に当月のカレンダーを表示する
  - 前月遷移ボタン押下で現在表示中の月より1ヶ月前の日付を表示する
  - 翌月遷移ボタン押下で現在表示中の月より1ヶ月後の日付を表示する
- 特に必須ではない要件
  - 日付要素を選択可能にして選択ステータスを持たせる
  - 選択状態の場合、選択中の日付がわかるように下記のように表示をする
    - 日付要素にチェックマークを追加
    - カレンダーテーブルの下部に選択日付を`yyyy-MM-dd形式`で表示

## 実装のステップ
下記のように段階的に課題を分解しながら実装する。

1. HTMLベタ書きでカレンダーを描画する
1. 初期表示時に現在日時から算出した表示年月要素を動的に表示
1. JavaScriptで曜日を動的に表示
1. JavaScriptで日付を動的に表示
1. 前月/翌月遷移ボタンの実装
1. 細かい要件の制御・デザイン調整
