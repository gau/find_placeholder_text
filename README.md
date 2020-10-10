# README

サンプルテキストの割り付けで挿入された「山路を登りながら」と「情に棹させば流される」を含む文字オブジェクトが、ドキュメント内にあるかどうかを調べるためのIllustrator用スクリプトです。

<div class="fig center" style="margin-bottom: 20px;"><img src="https://www.graphicartsunit.com/saucer/images/find_placeholder_text/cover.png" alt="イメージ" class="noshadow"></div>

### 更新履歴

* 0.1.0：新規作成

----

### 検証バージョン

* Illustrator 2020（24.3）

----

### ダウンロード

* [スクリプトをダウンロードする](https://github.com/gau/find_placeholder_text/archive/master.zip)

----

### インストール方法

1. ダウンロードしたファイルを解凍します。
2. 所定の場所に「サンプルテキストを探す.jsx」をコピーします。Windows版ではお使いのIllustratorの種類によって保存する場所が異なりますのでご注意ください。
3. Illustratorを再起動します。
4. `ファイル > スクリプト > サンプルテキストを探す`と表示されていればインストール成功です。

#### ファイルをコピーする場所

| OS | バージョン | フォルダの場所 |
|:-----|:-----|:-----|
| Mac | 全 | /Applications/Adobe Illustrator *(ver)*/Presets/ja_JP/スクリプト/ |
| 32bit Win | CS5まで | C:\Program Files\Adobe\Adobe Illustrator *(ver)*\Presets\ja_JP\スクリプト\ |
| 64bit Win | CS5, CS6（32bit版） | C:\Program Files (x86)\Adobe\Adobe Illustrator *(ver)*\Presets\ja_JP\スクリプト\ |
| 64bit Win | CS6（64bit版）以降 | C:\Program Files\Adobe\Adobe Illustrator *(ver)* (64 Bit)\Presets\ja_JP\スクリプト\ |

* *(ver)*にはお使いのIllustratorのバージョンが入ります
* 本スクリプトは2020（24.3）以外では動作を検証しておりません

----

### スクリプトの概要

<div class="fig center"><img src="https://www.graphicartsunit.com/saucer/images/find_placeholder_text/step1.png" alt="スクリプトの概要" class="noshadow"></div>

スクリプトを実行すると、ドキュメント内から「山路を登りながら」と「情に棹させば流される」のワードを含む文字オブジェクトを探し、個数を報告します。オブジェクトがロックされていたり、非表示になっているものもすべて検索します。該当文字がどこにあるのかを表示する機能などは、今のところありません。

* レイヤーがロックされているときもロックとしてカウントされます

----

### 見つからなかったとき

<div class="fig center"><img src="https://www.graphicartsunit.com/saucer/images/find_placeholder_text/step2.png" alt="見つからなかったとき" class="noshadow"></div>

サンプルテキストが見つからなかったときは、上記のアラートを表示します。

----

### 免責事項

* このスクリプトを使って起こったいかなる現象についても制作者は責任を負えません。すべて自己責任にてお使いください。
* オブジェクトの状態によって見落としてしまう可能性もゼロではありません。
* スクリプトの実行前はドキュメントを保存しておくことをお勧めします。
* OSのバージョンやその他の状況によって実行できないことがあるかもしれません。もし動かなかったらごめんなさい。

----

### ライセンス

* サンプルテキストを探す.jsx
* Copyright (c) 2020 Toshiyuki Takahashi
* Released under the MIT license
* [http://opensource.org/licenses/mit-license.php](http://opensource.org/licenses/mit-license.php)
* Created by Toshiyuki Takahashi ([Graphic Arts Unit](http://www.graphicartsunit.com/))
* [Twitter](https://twitter.com/gautt)