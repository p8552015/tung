interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'AI 聊天機器人開發框架',
    description: `基於大型語言模型（LLM）的智慧對話系統開發框架，支援多種 AI 模型整合，
    包含自然語言理解、意圖識別和多輪對話管理功能。適用於客服、教育和企業應用場景。`,
    imgSrc: '/static/images/google.png',
    href: 'https://github.com/p8552015',
  },
  {
    title: '電腦視覺物件偵測系統',
    description: `運用深度學習技術開發的即時物件偵測系統，基於 YOLO 和 Transformer 架構，
    可應用於智慧監控、自動駕駛和工業品質檢測等領域。`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/computer-vision-project',
  },
  {
    title: 'AI 模型訓練與部署平台',
    description: `一站式機器學習平台，提供模型訓練、調優、版本管理和部署服務。
    支援 TensorFlow、PyTorch 等主流框架，並提供自動化 MLOps 工作流程。`,
    imgSrc: '/static/images/google.png',
    href: 'https://github.com/p8552015',
  },
  {
    title: 'NLP 文本分析工具集',
    description: `整合情感分析、文本分類、命名實體識別等功能的自然語言處理工具包。
    支援繁體中文，並針對台灣在地化內容進行優化。`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/nlp-toolkit',
  },
]

export default projectsData
