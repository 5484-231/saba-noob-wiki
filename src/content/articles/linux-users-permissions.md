---
title: Linuxユーザー/権限の基本
description: Linuxのユーザー、グループ、権限表記の要点まとめ
category: server
tags: [linux, permission, basics]
updated: 2026-03-03
---

## 概要

Linuxでは、ファイルとディレクトリに対して**所有者・グループ・その他**の3区分で権限を管理する。

## よく使う確認コマンド

```bash
id
ls -l
```

## よく使う変更コマンド

```bash
chmod 644 sample.txt
chown user:group sample.txt
```

## メモ

- `rwx` は `4/2/1` の合計で数値指定できる
- ディレクトリの実行権限は「中に入れるか」に関係する
