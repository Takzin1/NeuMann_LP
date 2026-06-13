# NeuMann.LLC — 公式LP

地域見守り・防災・リスク査定・脱炭素支援のためのAIプロダクトを開発する NeuMann.LLC の1ページLPです。

- **フレームワーク**: Next.js 14 (App Router) + TypeScript
- **スタイリング**: Tailwind CSS v3
- **デプロイ前提**: Vercel

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで http://localhost:3000 を開きます。

## ビルド

```bash
npm run build
npm run start
```

## ファイル構成

```
neumann-lp/
├── app/
│   ├── layout.tsx        # 全体レイアウト・メタデータ
│   ├── page.tsx          # セクションの組み立て
│   └── globals.css       # Tailwind・全体スタイル
├── components/           # 各セクション・UIパーツ
├── lib/
│   └── content.ts        # ★ テキスト・データはすべてここ
├── tailwind.config.ts    # 配色・フォント定義
├── tsconfig.json
├── next.config.mjs
├── postcss.config.js
└── package.json
```

## 編集のしかた

文言・項目の変更は基本的に `lib/content.ts` だけを編集すれば反映されます。
配色やフォントは `tailwind.config.ts` で管理しています。

## 後から差し替えるべき項目

- 連絡先（`lib/content.ts` の `contact`）: Email / X / GitHub は仮置きです。
- 各プロダクトのリンク（`products[].href`）: RiskFix・たんクレは `#` 仮置きです。
- 公開ドメイン（`app/layout.tsx` の `metadataBase`）。
- OGP画像（`public/og.png` などを追加し `openGraph.images` を指定）。
- favicon（`app/icon.png` を追加）。
- ファウンダー写真（必要なら漢字モノグラムと差し替え）。

## Vercelへのデプロイ

1. このプロジェクトをGitHubリポジトリにpush。
2. https://vercel.com で「Add New… → Project」からリポジトリをImport。
3. Framework Preset は **Next.js**（自動検出）。設定はそのままでOK。
4. **Deploy** を押すと公開されます。
