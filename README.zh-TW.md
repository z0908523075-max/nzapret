<div align="center">

<a href="README.md">Русский</a> | <a href="README.en.md">English</a> | <b>繁體中文</b>

# 🚀 nzapret by nikitos4683

**Android 繞過 DPI 模組 (Magisk / KernelSU)**

![Android](https://img.shields.io/badge/Platform-Android-2ea44f?style=for-the-badge)
![Root](https://img.shields.io/badge/Root-Magisk%20%7C%20KernelSU-1f6feb?style=for-the-badge)
![Engine](https://img.shields.io/badge/Engine-nfqws2%20%7C%20nztg-f59e0b?style=for-the-badge)
![UI](https://img.shields.io/badge/UI-KernelSU%20WebUI-8b5cf6?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-v3.2.0-blue?style=for-the-badge)

</div>

---

**nzapret** 是一個適用於已 Root Android 裝置的獨立且輕量級模組。該模組**基於 [zapret2](https://github.com/bol-van/zapret2)**，使用本地的 `nfqws2` 引擎以及 `iptables`/`ip6tables` 規則來繞過 DPI (深度封包檢測)，同時內建 `nztg` 代理伺服器來解除 Telegram 的封鎖。

`nfqws2` 的二進位檔案、負載 (payloads) 以及路由清單皆來自原始的上游專案，而 `nztg` 代理伺服器則是基於客製化 Go 語言實作建置。整個封裝程式碼是專為 Android 重新撰寫的，提供方便的 WebUI 並避免佔用系統資源。

---

## 📌 目錄

- [✨ 主要功能](#-主要功能)
- [🚧 限制與已知問題](#-限制與已知問題)
- [🚀 快速開始](#-快速開始)
- [🏗 架構與結構](#-架構與結構)
- [🛠 模組編譯](#-模組編譯)
- [📄 授權條款](#-授權條款)

---

## ✨ 主要功能

- **內建 WebUI：** 直接在 KernelSU 模組管理員中提供方便且美觀的圖形介面。
- **強大的 CLI：** 透過終端機進行完整的模組管理。
- **智慧路由：** 攔截 IPv4 和 IPv6 在 `OUTPUT` 以及 `FORWARD` 鏈中的流量。
- **自動偵測 IP 堆疊：** 模組會自動啟動 IPv4 的攔截規則，如果裝置支援 `ip6tables`，也會一併啟動 IPv6 的規則，無需手動選擇。
- **Telegram 繞過封鎖：** 內建本地 MTProto 代理伺服器 (`nztgproxy`)，透過 WebSocket-over-TLS 橋接並支援 Cloudflare 備援，與主要服務一起管理。
- **私人 DNS 管理：** 自動初始化 DNS 並可透過 WebUI/CLI 切換提供者。
- **個人專屬 `list-user`：** 使用者的自訂網域清單，可直接從介面進行編輯。
- **VPN 相容性：** 支援與多數熱門 VPN 用戶端一起運作。
- **獨立運作：** 模組使用本機資料，開機啟動時不需要網際網路連線。

<details>
<summary>⚙️ 網路、DNS 及 Telegram 詳細邏輯 (寫給極客們)</summary>

- **網路堆疊：** 模組永遠會為 IPv4 啟動 DPI 攔截；當裝置支援 `ip6tables` (mangle 表) 時，也會為 IPv6 啟動攔截。這裡沒有單獨的模式選擇，也不需要：在沒有 IPv6 流量時，閒置的 IPv6 規則不會造成效能負擔，並且已準備好在之後出現 IPv6 時 (例如切換 Wi-Fi 或行動網路時) 保護您的連線。這解決了過去的舊問題：在「僅限 IPv4 模式」下，部分流量 (如 YouTube 或 Instagram) 可能會透過 IPv6 洩漏，從而未經過繞過處理。
- **私人 DNS：** 在服務首次啟動時初始化一次。如果系統中已經設定了有效的第三方「私人 DNS 提供者主機名稱」，則會保留該設定。否則 (如「已停用」、「自動」或未設定)，它會預設使用 `xbox-dns.ru` (這也是繞過如 ChatGPT、Gemini 等 AI 服務 DNS 封鎖的必要條件)。透過 CLI 或 WebUI 手動更改的 DNS 設定將會儲存，不會在下次啟動時被重設。
- **Telegram 代理 (nztgproxy)：** 一個基於 Go 語言的本地 MTProto 代理伺服器 (靜態且不依賴 CGO 的 `nztg` 執行檔)。它會接收來自 Telegram 用戶端的 MTProto 連線，解碼經過混淆的握手 (handshake)，並透過 WSS (WebSocket-over-TLS) 協定將流量橋接至官方的 Telegram 資料中心，以繞過對 IP 位址的 DPI 封鎖。支援直接 TCP 備援，以及 Cloudflare Worker / CDN 轉發 (CF 代理)，當 ISP 封鎖了 Telegram 的 WebSocket 伺服器 IP 時，可以將流量路由通過 Cloudflare 網路。

</details>

---

## 🚧 限制與已知問題

> [!NOTE]
> **Telegram：** 此模組內建了本地 MTProto 代理伺服器 (`nztgproxy`) 以繞過 Telegram 封鎖。啟動模組後，開啟 WebUI 中的 **Telegram** 分頁並點擊 **「在 Telegram 中開啟」** (或手動複製連結 / 輸入 `127.0.0.1:1443` 及 Secret)。如果 Telegram 的 IP 遭到 ISP 封鎖，流量會自動透過 Cloudflare 代理進行。如果媒體無法載入，請移除 DC 設定中的 `2:149.154.167.220` 該行。

> [!NOTE]
> **KernelSU WebUI 錯誤：** 由於 KernelSU 管理員的特性，當 KernelSU 從最近的應用程式中被滑掉時，透過 WebUI 的 **Start** 按鈕 *手動* 啟動的 `nfqws2` 和 `nztg` 程序可能會被系統終止。此錯誤已在 KernelSU-Next 中修復 (參見 issue [#1180](https://github.com/KernelSU-Next/KernelSU-Next/issues/1180))！對於標準的 KernelSU，建議使用模組清單中的 **Action** 按鈕，或者在終端機中執行 `nzapret start` 指令。

---

## 🚀 快速開始

### 1. 安裝
1. 從 Releases 頁面下載預先編譯好的 `ZIP` 壓縮檔。
2. 透過 **Magisk** 或是 **KernelSU** 進行標準刷入。
3. 重新啟動裝置。
4. 在 KernelSU 開啟模組分頁以進入 **WebUI**。*(Magisk 使用者將需要 [KsuWebUI](https://github.com/KOWX712/KsuWebUIStandalone) 應用程式才能使用介面)。*

### 2. CLI 使用方式
透過 CLI 管理需要 Root 權限 (`su`)。如果 `nzapret` 指令不在您的 PATH 環境變數中，請使用完整路徑：`/data/adb/modules/nzapret/system/bin/nzapret`。

#### 🔌 服務管理
| 指令 | 說明 |
| :--- | :--- |
| `nzapret start` | 初始化 iptables 規則並啟動 `nfqws2` |
| `nzapret stop` | 停止服務程序並清除防火牆鏈 |
| `nzapret restart` | 完全重新啟動並套用更改後的設定 |

#### 📊 監控與診斷
| 指令 | 說明 |
| :--- | :--- |
| `nzapret status` | 檢視目前狀態與服務狀態 |
| `nzapret status --json` | 以 JSON 格式輸出狀態 (用於 WebUI) |
| `nzapret log` | 檢視系統服務日誌 |
| `nzapret diagnose` | 收集詳細的診斷資訊以供除錯 |

#### 🌐 網路與私人 DNS
| 指令 | 說明 |
| :--- | :--- |
| `nzapret update` | 下載並更新繞過清單 (hostlists) |
| `nzapret network status` | 顯示作用中的防火牆堆疊 (IPv4 / IPv4 + IPv6) |
| `nzapret dns status` | 顯示目前 Android 私人 DNS 狀態 |
| `nzapret dns set default` | 設定預設 DNS (`xbox-dns.ru`) |
| `nzapret dns set auto` | 回復至系統的自動 DNS 模式 |
| `nzapret dns set off` | 完全停用系統的私人 DNS |
| `nzapret dns set hostname <host>` | 設定自訂的 DNS 提供者主機名稱 |

#### 📝 使用者清單管理 (`list-user`)
| 指令 | 說明 |
| :--- | :--- |
| `nzapret list-user status` | 顯示清單狀態與網域數量 |
| `nzapret list-user show` | 顯示目前的清單內容 |
| `nzapret list-user add <domains...>` | 新增一個或多個網域至清單 |
| `nzapret list-user remove <domains...>` | 從清單中移除指定的網域 |
| `nzapret list-user replace <domains...>` | 使用新的網域覆寫清單 |
| `nzapret list-user clear` | 完全清除使用者清單 |

#### ✈️ Telegram (`tg`)
| 指令 | 說明 |
| :--- | :--- |
| `nzapret tg status` | 顯示代理伺服器狀態、Secret 以及連結 |
| `nzapret tg status --json` | 以 JSON 格式輸出狀態 (用於 WebUI) |
| `nzapret tg link` | 輸出用於連線的 `tg://` 連結 |
| `nzapret tg open` | 使用已設定的代理伺服器開啟 Telegram |
| `nzapret tg regen-secret` | 產生新的 Secret |
| `nzapret tg cf-test` | 檢查 Cloudflare 代理的可用性 |
| `nzapret tg set host <ip>` | 設定監聽位址 |
| `nzapret tg set port <n>` | 設定通訊埠 |
| `nzapret tg set cf <on\|off>` | 啟用/停用 Cloudflare 備援 |
| `nzapret tg set cf-domain <domain>` | 設定自訂 CF 網域 (留空以重設) |
| `nzapret tg set dc <"n:IP..">` | 設定 DC 規則 (每行一條規則) |

> Telegram 服務會與模組一起啟動和停止 (`start`/`stop`/`restart`)。設定更改將在重新啟動後套用。

---

## 🏗 架構與結構

| 檔案 / 資料夾 | 說明 |
| :--- | :--- |
| ⚙️ [service.sh](service.sh) | 系統自動啟動腳本。設定防火牆規則並執行 `nfqws2`。 |
| 🧠 [system/bin/nzapret](system/bin/nzapret) | CLI 控制介面。處理 start、stop 指令，並收集 WebUI 的指標資料。 |
| ✈️ [bin/nztg](bin/) | 用於 Telegram 的本地 MTProto 代理伺服器 (Go 語言，靜態二進位檔案)。與 nfqws2 一同執行。 |
| 🎨 [webroot/](webroot/) | 整合至 KernelSU 的 WebUI 程式碼 (HTML, CSS, JS)。 |
| 📁 [profiles/](profiles/) | 包含 `nfqws2` 參數的設定檔。 |
| 📁 [lists/](lists/) | 網域路由清單 (包含使用者的 `list-user.txt`)。 |
| 📁 [payloads/](payloads/) | 用於繞過 DPI 的二進位偽造封包 (TLS/QUIC)。 |
| 🛠 [customize.sh](customize.sh) | 模組安裝程式 (偵測裝置架構，解壓縮並設定權限)。 |

---

## 🛠 模組編譯

如果您想自行編譯模組，您的系統 (Linux/WSL) 需安裝基本的公用程式：`bash`、`zip`、`sed`、`mktemp`。

只需輸入一行指令即可開始建置過程：
```sh
bash build.sh
```
可刷入的 `nzapret-vX.Y.Z.zip` 壓縮檔將會在根目錄中建立。您可以在裝置上 (例如在 Termux 中) 或是 PC 上進行建置。

---

## 📄 授權條款

此專案採用 [MIT](LICENSE) 授權。詳細資訊請參閱 [LICENSE](LICENSE) 檔案。

---

<div align="center">
  <b>🌍 Enjoy open Internet!</b>
</div>
