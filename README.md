###　 技術スタック
| 項目 | バージョン | 説明 |
| --- | --- | --- |
| Typescript | 5 | - |
| React | 18 | JavaScript FW |
| NextJS | 13.5.4 | React FW |
| tailwindcss | 3.14.13 | CSS フレームワーク |
| contentlayer | 0.3.4 | コンテンツ管理 |
| shadcn/ui | 2.1.0 | UI フレームワーク |

### 備忘

- NextJS
  - contentlayer の導入は v13 でないといけない
  - tailwindcss が導入時に崩れたので、改めて入れ直せば元に戻る
- tailwindcss
  - CSS ファイル作成しなくて良い
  - contentlayer で markdown の html 読み込みに`tailwindcss/typography`を使用
- contentlayer
  - 画像などは shadcn のもの、そのまま流用中
  - SEO で metadata をブログ詳細ページでは動的に書き換え
