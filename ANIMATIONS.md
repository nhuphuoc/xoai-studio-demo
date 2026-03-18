# 🎬 Animations Guide - Xoi Studio Cyberpunk

## ✨ Animation Features

### 1. **Hero Section Animations**
- 🌟 **Animated Background**: Floating particles with connections
- 🎨 **Gradient Shift**: Continuous color flow animation
- 💫 **Floating Orbs**: Ambient background elements
- 📝 **Slide Down**: Title entrance animation
- 💬 **Fade In**: Subtitle appearance
- 🎯 **Slide Up**: Button entrance from bottom
- 🎪 **Scroll Indicator**: Bouncing scroll prompt

### 2. **Stats Section**
- 📊 **Animated Counter**: Numbers count up on scroll into view
- 🎭 **Stagger Effect**: Sequential appearance (100ms delay each)
- 🎨 **Gradient Text**: Blue to Green gradient on numbers
- ✨ **Hover Scale**: Cards scale up on hover

### 3. **Featured Models**
- 🃏 **Scale In**: Cards fade and scale from 90% to 100%
- ⏱️ **Stagger Delay**: 100ms delay per card
- 🌈 **Shimmer Effect**: Moving light gradient on hover
- 🔄 **Scale + Rotate**: Icon transforms on hover
- 💡 **Glow Line**: Bottom accent line appears on hover
- ✨ **Badge Pulse**: Neon pulsing on FREE/PRO badges

### 4. **Intro Section**
- 📦 **Scale In**: Card entrance with scale effect
- 🌟 **Glow Pulse**: Pulsing neon glow on special offer badge
- 📝 **Slide Up**: Text paragraphs with stagger
- 🎯 **Underline Hover**: Animated underline on links

### 5. **CTA Section**
- 🌊 **Gradient Shift**: Background gradient animation
- 💎 **Glow Pulse**: Button with pulsing glow effect
- ⚡ **Particle Burst**: Particles on button hover
- 🎪 **Float Animation**: Feature icons floating effect
- 🎭 **Icon Scale**: Icons scale on hover

## 🎨 Custom Animations

### Tailwind Config Animations:
```typescript
- pulse-neon: Opacity pulse (2s)
- float: Vertical floating (6s)
- float-delayed: Delayed floating (6s, 2s delay)
- glow-pulse: Pulsing glow effect (3s)
- slide-up: Entrance from bottom (0.8s)
- slide-down: Entrance from top (0.8s)
- fade-in: Opacity fade (0.8s)
- scale-in: Scale + fade entrance (0.5s)
- bounce-slow: Slow bounce (3s)
- shimmer: Moving light effect (2.5s)
- gradient-shift: Background gradient flow (8s)
```

## 🎯 Performance Features

### Optimization Techniques:
1. **Intersection Observer**: Animations trigger on scroll into view
2. **Client Component**: Animations run only on client side
3. **RequestAnimationFrame**: Smooth 60fps animations
4. **CSS Transforms**: Hardware-accelerated animations
5. **Conditional Rendering**: Mounted state prevents flash

## 🎪 Interactive Elements

### Hover Effects:
- ✨ Neon glow intensification
- 🔄 Scale transforms
- 🌈 Color transitions
- 💡 Glassmorphism effects
- ⚡ Particle effects

### Scroll Effects:
- 📊 Counter animations
- 📝 Fade in on view
- 🎭 Stagger sequences
- 🎨 Parallax-like effects

## 🚀 Usage Examples

### Animated Counter:
```tsx
<AnimatedCounter end={500} suffix="+" duration={2000} />
```

### Stagger Animation:
```tsx
style={{ animationDelay: `${index * 100}ms` }}
```

### Conditional Animation:
```tsx
className={mounted ? "animate-slide-down" : "opacity-0"}
```

## 🎨 Color Palette
- **Primary Glow**: #00d4ff (Ocean Blue)
- **Accent Glow**: #39ff14 (Neon Green)
- **Background**: #000000 (Deep Black)
- **Surface**: #0a0a0a (Dark Gray)

## 💡 Tips

1. **Reduce Motion**: Consider adding `prefers-reduced-motion` support
2. **Mobile Performance**: Test on mobile devices
3. **Battery Impact**: Canvas animations may drain battery
4. **Accessibility**: Ensure animations don't cause seizures

---

**All animations follow Cyberpunk aesthetic with neon glows and smooth transitions! 🎮**
