export type Category =
  | 'Chat & Writing'
  | 'Image'
  | 'Video'
  | 'YouTube & Creators'
  | 'Audio & Voice'
  | 'Productivity'
  | 'Coding'

export interface Tool {
  name: string
  url: string
  category: Category
  description: string
  pricing: 'Free' | 'Freemium' | 'Paid'
}

export const categories: Category[] = [
  'Chat & Writing',
  'Image',
  'Video',
  'YouTube & Creators',
  'Audio & Voice',
  'Productivity',
  'Coding',
]

export const tools: Tool[] = [
  { name: 'ChatGPT', url: 'https://chatgpt.com', category: 'Chat & Writing', pricing: 'Freemium', description: 'General-purpose AI assistant for writing, research and brainstorming.' },
  { name: 'Claude', url: 'https://claude.ai', category: 'Chat & Writing', pricing: 'Freemium', description: 'Thoughtful AI assistant for long documents, analysis and writing.' },
  { name: 'Gemini', url: 'https://gemini.google.com', category: 'Chat & Writing', pricing: 'Freemium', description: "Google's multimodal assistant connected to your Google apps." },
  { name: 'Perplexity', url: 'https://www.perplexity.ai', category: 'Chat & Writing', pricing: 'Freemium', description: 'Answer engine that searches the web and cites its sources.' },
  { name: 'Grammarly', url: 'https://www.grammarly.com', category: 'Chat & Writing', pricing: 'Freemium', description: 'Grammar, tone and clarity suggestions wherever you write.' },
  { name: 'QuillBot', url: 'https://quillbot.com', category: 'Chat & Writing', pricing: 'Freemium', description: 'Paraphrasing, summarizing and citation tools for students.' },
  { name: 'Midjourney', url: 'https://www.midjourney.com', category: 'Image', pricing: 'Paid', description: 'Striking, artistic image generation from text prompts.' },
  { name: 'Leonardo AI', url: 'https://leonardo.ai', category: 'Image', pricing: 'Freemium', description: 'Image generation with fine-tuned models for game and product art.' },
  { name: 'Ideogram', url: 'https://ideogram.ai', category: 'Image', pricing: 'Freemium', description: 'Image generator that is great at rendering text in pictures.' },
  { name: 'Adobe Firefly', url: 'https://firefly.adobe.com', category: 'Image', pricing: 'Freemium', description: 'Commercially safe generative fill, effects and images.' },
  { name: 'Remove.bg', url: 'https://www.remove.bg', category: 'Image', pricing: 'Freemium', description: 'Remove image backgrounds in one click.' },
  { name: 'Canva Magic Studio', url: 'https://www.canva.com/magic', category: 'Image', pricing: 'Freemium', description: 'AI design tools built into Canva for posts, slides and more.' },
  { name: 'Runway', url: 'https://runwayml.com', category: 'Video', pricing: 'Freemium', description: 'Generate and edit video with text, image and video prompts.' },
  { name: 'Pika', url: 'https://pika.art', category: 'Video', pricing: 'Freemium', description: 'Turn ideas and images into short, stylized video clips.' },
  { name: 'CapCut', url: 'https://www.capcut.com', category: 'Video', pricing: 'Freemium', description: 'Video editor with auto captions, effects and AI tools.' },
  { name: 'HeyGen', url: 'https://www.heygen.com', category: 'Video', pricing: 'Freemium', description: 'AI avatars and video translation for presenters.' },
  { name: 'Descript', url: 'https://www.descript.com', category: 'Video', pricing: 'Freemium', description: 'Edit video and podcasts by editing the transcript.' },
  { name: 'Opus Clip', url: 'https://www.opus.pro', category: 'Video', pricing: 'Freemium', description: 'Turn long videos into viral-ready shorts automatically.' },
  { name: 'TubeBuddy', url: 'https://www.tubebuddy.com', category: 'YouTube & Creators', pricing: 'Freemium', description: 'Keyword research, A/B tests and SEO for YouTube channels.' },
  { name: 'vidIQ', url: 'https://vidiq.com', category: 'YouTube & Creators', pricing: 'Freemium', description: 'Video ideas, title suggestions and channel analytics.' },
  { name: 'Thumbnail.ai', url: 'https://thumbnail.ai', category: 'YouTube & Creators', pricing: 'Freemium', description: 'Rate and improve your YouTube thumbnails with AI.' },
  { name: 'Submagic', url: 'https://www.submagic.co', category: 'YouTube & Creators', pricing: 'Paid', description: 'Animated captions and b-roll for short-form videos.' },
  { name: 'ElevenLabs', url: 'https://elevenlabs.io', category: 'Audio & Voice', pricing: 'Freemium', description: 'Lifelike text-to-speech and voice cloning in many languages.' },
  { name: 'Suno', url: 'https://suno.com', category: 'Audio & Voice', pricing: 'Freemium', description: 'Create full songs with vocals from a text prompt.' },
  { name: 'Adobe Podcast', url: 'https://podcast.adobe.com', category: 'Audio & Voice', pricing: 'Freemium', description: 'Enhance speech so recordings sound studio-quality.' },
  { name: 'Otter.ai', url: 'https://otter.ai', category: 'Audio & Voice', pricing: 'Freemium', description: 'Live meeting transcription, notes and summaries.' },
  { name: 'Notion AI', url: 'https://www.notion.so/product/ai', category: 'Productivity', pricing: 'Paid', description: 'Write, summarize and search across your Notion workspace.' },
  { name: 'Gamma', url: 'https://gamma.app', category: 'Productivity', pricing: 'Freemium', description: 'Generate presentations, docs and webpages from a prompt.' },
  { name: 'NotebookLM', url: 'https://notebooklm.google.com', category: 'Productivity', pricing: 'Free', description: 'Research assistant grounded in your own documents.' },
  { name: 'Zapier AI', url: 'https://zapier.com/ai', category: 'Productivity', pricing: 'Freemium', description: 'Automate workflows across thousands of apps with AI.' },
  { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', category: 'Coding', pricing: 'Freemium', description: 'AI pair programmer inside your editor.' },
  { name: 'Cursor', url: 'https://www.cursor.com', category: 'Coding', pricing: 'Freemium', description: 'AI-first code editor that understands your codebase.' },
  { name: 'Bolt.new', url: 'https://bolt.new', category: 'Coding', pricing: 'Freemium', description: 'Prompt, run and deploy full-stack web apps in the browser.' },
]
