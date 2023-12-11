# 簡易仕様書

### 作者
太田 直希
### アプリ名
グルメサーチ

#### コンセプト
すぐに近くのお店が分かる！
食べたいものがすぐ見つかる。

#### こだわったポイント
データベースを使わず、Cookieを使ったデータの保存

近くの飲食店をすぐに見ることができる。
飲食店の検索条件を豊富に選択できるようにしました。

### 該当プロジェクトのリポジトリ URL
https://github.com/Naoki-02/Web_API_app

## 開発

### 開発期間
1週間（一日3時間程度）

### 開発環境
VSCode 1.85.0

### ブラウザ
Firefox 120.0.1

### 開発言語
python 3.6

### フレームワーク
Django 3.2.23

### デザイン
Figma

### インフラ
Docker
nginx

### 動作対象OS
Windows

## アプリケーション機能

### 機能一覧
- レストラン検索：ホットペッパーグルメサーチAPIを使用して、現在地周辺の飲食店を検索する。
- 絞り込み検索：レストラン検索の際の絞り込み。
- レストラン情報取得：ホットペッパーグルメサーチAPIを使用して、飲食店の詳細情報を取得する。

### 画面一覧
- 検索、一覧画面：条件を指定してレストランを検索し、検索結果の飲食店を一覧表示する。
- 検索、詳細画面：飲食店の詳細を表示する、検索もできる。

### 使用しているAPI,SDK,ライブラリなど
- ホットペッパーグルメサーチAPI
- GeolocationAPI

## アドバイスして欲しいポイント
一覧画面や詳細画面の構図やデザインをもっと食欲がそそられるような、美しいものにしたい。

## 自己評価
就活や大学などで忙しく時間があまりとれませんでしたが、cssやjavascriptなどあまり触れてこなかった部分に触れることができいい経験ができました。
データベースを作成しアカウント機能をつけて履歴を残せる機能やお気に入り保存機能、履歴からの傾向でおすすめする機能などをつけたかったですが、今回はCookieを使って一時的に情報を保存することにしました。
デザインですが、食欲がわくような暖色を使い、一覧表示した時、ぱっと見ですぐに情報が確認できるようなデザインにしました、店舗の文の位置の固定化をして揃えたかったですが間に合いませんでした。
エラーページであったり追加しないといけないものはたくさんありますが、短い時間の中で頑張ったと思います。
