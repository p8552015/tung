#!/usr/bin/env node

/**
 * AI 專家部落格 - 圖片檢查腳本
 * 檢查所有必要的圖片是否已正確上傳
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 定義需要的圖片列表
const requiredImages = [
  {
    name: 'ai-expert-logo.webp',
    size: '512x512',
    purpose: '網站 Logo',
    priority: 'high',
  },
  {
    name: 'ai-expert-social-banner.webp',
    size: '1200x630',
    purpose: '社交媒體橫幅',
    priority: 'high',
  },
  {
    name: 'llm-introduction.webp',
    size: '1200x630',
    purpose: 'LLM 文章封面',
    priority: 'medium',
  },
  {
    name: 'ai-ethics.webp',
    size: '1200x630',
    purpose: 'AI 倫理文章封面',
    priority: 'medium',
  },
  {
    name: 'chatbot-framework.webp',
    size: '800x600',
    purpose: '聊天機器人專案',
    priority: 'medium',
  },
  {
    name: 'computer-vision.webp',
    size: '800x600',
    purpose: '電腦視覺專案',
    priority: 'medium',
  },
  {
    name: 'ml-platform.webp',
    size: '800x600',
    purpose: 'ML 平台專案',
    priority: 'medium',
  },
  {
    name: 'nlp-toolkit.webp',
    size: '800x600',
    purpose: 'NLP 工具專案',
    priority: 'medium',
  },
]

// 圖片目錄路徑
const imagesDir = path.join(__dirname, '../public/static/images/ai')

console.log('🔍 AI 專家部落格圖片檢查')
console.log('='.repeat(50))

// 檢查目錄是否存在
if (!fs.existsSync(imagesDir)) {
  console.log('❌ 圖片目錄不存在:', imagesDir)
  console.log('請先創建目錄: mkdir -p public/static/images/ai')
  process.exit(1)
}

let missingImages = []
let existingImages = []

// 檢查每張必要的圖片
requiredImages.forEach((image) => {
  const imagePath = path.join(imagesDir, image.name)
  const exists = fs.existsSync(imagePath)

  if (exists) {
    const stats = fs.statSync(imagePath)
    const sizeKB = Math.round(stats.size / 1024)

    existingImages.push({
      ...image,
      path: imagePath,
      sizeKB: sizeKB,
    })

    console.log(`✅ ${image.name}`)
    console.log(`   用途: ${image.purpose}`)
    console.log(`   建議尺寸: ${image.size}`)
    console.log(`   檔案大小: ${sizeKB} KB`)
    console.log()
  } else {
    missingImages.push(image)
    console.log(`❌ ${image.name} (缺失)`)
    console.log(`   用途: ${image.purpose}`)
    console.log(`   建議尺寸: ${image.size}`)
    console.log(`   優先級: ${image.priority}`)
    console.log()
  }
})

// 總結報告
console.log('📊 檢查總結')
console.log('='.repeat(50))
console.log(`✅ 已上傳: ${existingImages.length}/${requiredImages.length} 張圖片`)
console.log(`❌ 缺失: ${missingImages.length} 張圖片`)
console.log()

if (missingImages.length > 0) {
  console.log('🚨 缺失的圖片:')
  missingImages.forEach((image) => {
    console.log(`   - ${image.name} (${image.purpose})`)
  })
  console.log()
  console.log('📖 請參考 docs/download-instructions.md 取得下載指引')
  console.log('🔗 推薦圖庫: https://unsplash.com, https://pexels.com')
}

if (existingImages.length > 0) {
  console.log('✨ 已上傳的圖片:')
  existingImages.forEach((image) => {
    console.log(`   - ${image.name} (${image.sizeKB} KB)`)
  })
}

// 檢查檔案大小建議
console.log()
console.log('💡 檔案大小建議:')
console.log('   - Logo: < 50 KB')
console.log('   - 文章封面: < 150 KB')
console.log('   - 專案圖片: < 100 KB')
console.log('   - 社交媒體橫幅: < 200 KB')

// 完成狀態
if (missingImages.length === 0) {
  console.log()
  console.log('🎉 所有圖片都已正確上傳！')
  console.log('👉 現在可以執行 yarn dev 測試部落格')
} else {
  console.log()
  console.log('⚠️  請完成缺失圖片的上傳後重新檢查')
}

process.exit(missingImages.length > 0 ? 1 : 0)