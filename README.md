# 🎨 Xoi Studio - Cyberpunk Interior Neon

> Nền tảng học tập 3D và marketplace cho các models chuyên nghiệp

## ✨ Features

### 🏠 Landing Page
- Hero section với gradient text animation
- Featured models showcase
- Giới thiệu về Xoi Studio
- Call-to-action sections

### 🛍️ Model Marketplace
- Grid layout với filters (Category, Software, Price)
- Model cards với hover effects
- Search functionality
- Free & Pro models

### 💳 Model Detail & Payment
- Image carousel
- Technical specifications table
- PayOS payment modal với VietQR
- Countdown timer
- Copy-to-clipboard functionality

### 📚 Courses
- Course listing với stats
- Progress tracking
- Special offers section

### 🎓 Learning Platform
- Video player placeholder
- Syllabus sidebar với lock/unlock states
- Tabs: Description, Files, Contact
- Active lesson highlighting

### 📦 My Assets
- Models đã mua
- Khóa học đang học
- Progress tracking
- Statistics overview

## 🎨 Design System

### Colors
- **Background**: `#000000` (Deep Black)
- **Primary**: `#00d4ff` (Ocean Blue)
- **Accent**: `#39ff14` (Neon Green)
- **Surface**: `#0a0a0a` (Dark Gray)

### Effects
- Neon glow (blue & green)
- Glassmorphism
- Grid background pattern
- Gradient text
- Smooth transitions

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
xoai-studio-demo/
├── app/
│   ├── page.tsx              # Landing page
│   ├── models/
│   │   ├── page.tsx          # Model gallery
│   │   └── [id]/
│   │       └── page.tsx      # Model detail
│   ├── courses/
│   │   ├── page.tsx          # Courses list
│   │   └── [id]/
│   │       └── learn/
│   │           └── page.tsx  # Learning platform
│   ├── my-assets/
│   │   └── page.tsx          # User assets
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   └── navbar.tsx            # Navigation component
└── tailwind.config.ts        # Tailwind configuration
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter

## 🎯 Next Steps (Backend Integration)

1. Setup Supabase database
2. Integrate PayOS payment gateway
3. Implement authentication
4. Add Google Drive proxy for downloads
5. Real video player integration
6. Admin dashboard functionality

## 📝 Notes

This is a **skeleton/demo** version focused on UI/UX. Backend integration pending.

---

Made with 💙 by Xoi Studio
