# AI 專家部落格圖片使用指南

## 免費圖庫資源

基於《圖檔規範.md》中的建議，以下為推薦的免費圖庫，特別適合 AI 主題內容：

### 主要推薦圖庫

1. **Unsplash** (unsplash.com)
   - 優勢：社群大、風格統一
   - 適用：AI、科技、商務場景
   - 關鍵字：artificial intelligence, technology, data, coding, robot

2. **Pexels** (pexels.com)
   - 優勢：繁中介面、搜尋功能佳
   - 適用：商務、教育、科技場景
   - 關鍵字：machine learning, computer, business, innovation

3. **Pixabay** (pixabay.com)
   - 優勢：圖片/插圖/影片多元
   - 適用：科技插圖、圖表、概念圖
   - 關鍵字：AI, algorithm, network, brain, digital

## AI 部落格圖片建議

### 首頁橫幅 (Hero Image)
- **主題**：科技感、未來感、專業
- **建議關鍵字**：
  - "artificial intelligence abstract"
  - "technology network"
  - "digital transformation"
  - "data visualization"
  - "neural network"

### 文章封面圖片
- **LLM 相關文章**：語言、文字、對話概念
- **AI 倫理文章**：平衡、人性、道德抉擇
- **技術教學文章**：程式碼、圖表、學習場景

### 專案頁面圖片
- **聊天機器人**：對話氣泡、機器人、通訊
- **電腦視覺**：眼睛、攝影機、辨識
- **訓練平台**：雲端、伺服器、儀表板
- **NLP 工具**：文字處理、語言、翻譯

## 圖片優化建議

### 尺寸規格
- **首頁橫幅**：1920x1080 (16:9)
- **文章封面**：1200x630 (社交媒體最佳比例)
- **專案卡片**：800x600 (4:3)
- **Logo**：正方形，多種尺寸

### 處理原則
1. **品牌一致性**：統一色調、風格
2. **二次創作**：添加文字、裁切、調色
3. **壓縮優化**：使用 WebP 格式
4. **響應式設計**：提供多種尺寸

### 色彩建議
- **主色調**：科技藍 (#0066CC)
- **輔助色**：深灰 (#333333)
- **強調色**：綠色 (#00AA66) 或橙色 (#FF6600)

## 法律合規

### 使用安全守則
1. ✅ 下載前確認授權條款
2. ✅ 進行二次創作（裁切、加文字、調色）
3. ✅ 避免含辨識人物的圖片用於負面情境
4. ✅ 保留下載記錄和授權證明
5. ❌ 不得轉售原始圖檔
6. ❌ 不得集合成圖庫販售

### 建議工作流程
1. 搜尋並下載合適圖片
2. 使用 Figma/Photoshop 進行編輯
3. 添加品牌元素（Logo、色彩、文字）
4. 優化檔案大小和格式
5. 上傳到 `/public/static/images/` 目錄

## 圖片命名規範

```
ai-hero-banner.webp          # 首頁橫幅
llm-article-cover.webp       # LLM 文章封面
ethics-article-cover.webp    # 倫理文章封面
chatbot-project.webp         # 聊天機器人專案
computer-vision-project.webp # 電腦視覺專案
nlp-toolkit-project.webp    # NLP 工具專案
ai-platform-project.webp    # AI 平台專案
```

## 技術實作

### Next.js 圖片優化
```javascript
import Image from 'next/image'

// 推薦用法
<Image
  src="/static/images/ai-hero-banner.webp"
  alt="AI 專家部落格"
  width={1920}
  height={1080}
  priority // 首頁重要圖片
  className="rounded-lg"
/>
```

### 響應式圖片
```css
.hero-image {
  @apply w-full h-auto;
  max-height: 60vh;
  object-fit: cover;
}

@media (max-width: 768px) {
  .hero-image {
    max-height: 40vh;
  }
}
```

這個指南將幫助我們建立一個視覺上專業且合法合規的 AI 專家部落格。