---
title: DNS名前解決の流れ
description: クライアントから権威DNSまでの問い合わせの基本フロー
category: network
tags: [dns, tcp-ip, basics]
updated: 2026-03-03
---

## 概要

DNSは、ホスト名をIPアドレスへ変換するための仕組み。

## 名前解決の流れ

1. スタブリゾルバがキャッシュを確認
2. 再帰DNSへ問い合わせ
3. ルートDNS → TLD DNS → 権威DNS の順で参照
4. 応答をキャッシュしてクライアントへ返す

## トラブル時の確認

```bash
nslookup example.com
dig example.com
```
