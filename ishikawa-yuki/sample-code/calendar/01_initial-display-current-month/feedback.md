# Review Feedback
## 初期表示時に現在日時から算出した表示年月要素を動的に表示

## 指摘事項
特筆して指摘するポイントはありませんでしたが、以下のようにすると更に良くなると思ったので記載します。

### HTML

#### HTMLタグの変更
date-pickerは主にナビデーションとしての役割を担っている要素なので`navタグ`に変更しました。
```
- <header class="date-picker">
+ <nav class="date-picker">
```

#### 不要な要素を除去
DOM構造とCSSをよく観察してみるとcalendar-wrapは不要そうだったので消しました。
```
-   <div class="calendar-wrap">
-     <table class="calendar">
-       <thead>
+   <table class="calendar">
+     <thead>
```

### CSS

#### 不要な定義の除去
下記の定義は有っても無くても表示は変わらなかったのでHTMLタグと共に消しました。
```
@media (max-width: 767.98px) {
  .calendar-wrap {
    display: flex; /* フレックスコンテナに設定 */
    flex-direction: column; /* 縦方向に配置 */
  }
}
```

#### ブレークポイントの指定
MediaQueryでmax-width, min-widthを指定すると以下の意味になります。
- `@media (max-width: ??px)`: ??px以下の場合に適応するスタイル
- `@media (min-width: ??px)`: ??px以上の場合に適応するスタイル

恐らくブレークポイントを768px(Bootstrapのタブレットサイズ)に設けたかったのだと思うのですが、
境界値を含むか否かの判定の帳尻を合わせるために768pxよりも微妙に小さい値を使わざるを得なくなってしまったのだと思います。

解決策としては、`@media (min-width: 768px)`を使用して、MediaQuery内外のスタイル定義を入れ替える事でピッタリ整数のピクセル数を指定できます。
```
# MediaQueryの指定箇所
- @media (max-width: 767.98px)
+ @media (min-width: 768px)
```

### JavaScript

#### グローバル変数のスコープ調整と変数名

ここで定義しているグローバル変数の意味は以下の通り。
- `date`: (Date) 現在日時
- `year`:   (number) 今年
- `month`:  (number) 今月

出来る限りグローバル変数は使用しないというのが良いコードの鉄則です。

グローバル変数の使用を避けるべき理由は以下の通り
- コードを読む時に意識すべき情報を少なくするため
- （今回はconstだから問題ないが）予期せず書き換えられるリスクが発生するため

また、なるべく具体的な変数名の方が可読性が良いので`date`から`today`に変更しています。

※ 今回は"日付"を強調したいので`today`という命名を選択しましたが、"日時"を強調したい場合は`now`と名付けるのがベター
