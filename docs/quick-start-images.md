# 🚀 圖片快速上傳指南

## 📋 簡化步驟

### 1. 快速檢查當前狀況
```bash
node scripts/check-images.js
```

### 2. 下載推薦圖片

#### 🔗 直接連結 (Unsplash)

**高優先級圖片 (必須先完成)**:

1. **AI Logo** → [抽象科技球體](https://unsplash.com/photos/nGoCBxiaRO0)
   - 下載後調整為 512x512px
   - 命名為 `ai-expert-logo.webp`

2. **社交媒體橫幅** → [AI 神經網路](https://unsplash.com/photos/TXxiFuQLBKQ)
   - 下載後調整為 1200x630px
   - 添加 "AI 專家部落格" 文字
   - 命名為 `ai-expert-social-banner.webp`

**中優先級圖片**:

3. **LLM 文章** → [文字對話氣泡](https://unsplash.com/photos/2Ts5HnA67k8)
   - 調整為 1200x630px → `llm-introduction.webp`

4. **AI 倫理文章** → [平衡天平](https://unsplash.com/photos/9SKhDFnw4c4)
   - 調整為 1200x630px → `ai-ethics.webp`

5. **聊天機器人** → [對話界面](https://unsplash.com/photos/V5vqWC9gyEU)
   - 調整為 800x600px → `chatbot-framework.webp`

6. **電腦視覺** → [眼部掃描](https://unsplash.com/photos/WC6MJ0kRzGw)
   - 調整為 800x600px → `computer-vision.webp`

7. **ML 平台** → [伺服器機房](https://unsplash.com/photos/M5tzZtFCOfs)
   - 調整為 800x600px → `ml-platform.webp`

8. **NLP 工具** → [文字排版](https://unsplash.com/photos/Oaqk7qqNh_c)
   - 調整為 800x600px → `nlp-toolkit.webp`

### 3. 線上圖片處理工具

**推薦使用 Canva (最簡單)**:
1. 註冊免費帳戶: https://canva.com
2. 選擇 "自訂尺寸"
3. 上傳下載的圖片
4. 調整尺寸並添加文字
5. 下載為 PNG，然後用線上工具轉 WebP

**WebP 轉換**:
- 使用 https://squoosh.app 轉換格式
- 品質設定 85-90%

### 4. 檔案上傳

將處理好的圖片放入：
```
/Users/yen/Desktop/Tung/tung/public/static/images/ai/
```

### 5. 驗證結果

```bash
node scripts/check-images.js
```

看到 "🎉 所有圖片都已正確上傳！" 就完成了！

## ⚡ 超級快速版本

如果想最快完成：

1. **只下載前 2 張高優先級圖片** (Logo + 橫幅)
2. **其他 6 張可以先用佔位圖片**
3. **部落格可以正常運行，之後再慢慢替換**

## 🛠️ 佔位圖片生成

如果暫時無法處理所有圖片，可以使用這些佔位服務：

```
https://via.placeholder.com/512x512/0066CC/FFFFFF?text=AI+Logo
https://via.placeholder.com/1200x630/0066CC/FFFFFF?text=AI+Banner  
https://via.placeholder.com/800x600/0066CC/FFFFFF?text=Chatbot
```

先用佔位圖片讓網站運行，再逐步替換為真實圖片。

## 📞 需要協助？

1. 圖片太大？→ 使用 https://tinypng.com 壓縮
2. 不會編輯？→ 使用 Canva 範本
3. 格式錯誤？→ 使用 https://convertio.co 轉換
4. 找不到圖片？→ 在 Unsplash 搜尋關鍵字

完成後執行 `yarn dev` 就能看到全新的 AI 專家部落格！🚀