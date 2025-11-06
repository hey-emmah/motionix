# 📘 Motionix Documentation

**Motion-first React + TypeScript UI System**

Build expressive, composable, and animated interfaces that feel alive.

[![GitHub](https://img.shields.io/badge/GitHub-hey--emmah%2Fmotionix-blue?logo=github)](https://github.com/hey-emmah/motionix)
[![NPM](https://img.shields.io/npm/v/@hey-emmah/motionix.svg?color=brightgreen)](https://www.npmjs.com/package/@hey-emmah/motionix)
[![Twitter](https://img.shields.io/badge/Twitter-@hey__emmah-1DA1F2?logo=twitter&logoColor=white)](https://twitter.com/hey_emmah)

---

## 🧭 Introduction

**Motionix** is a motion-first **React + TypeScript** UI library built for developers who want to craft expressive, beautiful, and high-performance interfaces effortlessly.

It merges **Framer Motion**, **Styled Components**, and **React** into one cohesive system — allowing you to make user interfaces move and interact naturally.

> "Motionix helps you build applications that don’t just look good — they *feel alive*."

---

## 🚀 Getting Started

### Installation

```bash
npm install @hey-emmah/motionix
# or
yarn add @hey-emmah/motionix
```

### Setup

If using Next.js, enable styled-components in your config:

```js
// next.config.js
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
};
module.exports = nextConfig;
```

### Example

```tsx
'use client';
import React from 'react';
import { Button, FadeIn } from '@hey-emmah/motionix';

export default function App() {
  return (
    <main style={{ padding: 40 }}>
      <FadeIn duration={0.6}>
        <Button variant="solid" size="lg">
          Hello Motionix ⚡️
        </Button>
      </FadeIn>
    </main>
  );
}
```

---

## 🎨 Theming

Motionix uses **Styled Components** to provide theme-based styling across all components.  
You can define custom themes for brand identity and consistency.

```tsx
import { ThemeProvider } from 'styled-components';
import { Button } from '@hey-emmah/motionix';

const theme = {
  colors: {
    primary: '#6C63FF',
    accent: '#00E6A8',
    background: '#FFFFFF',
    text: '#111111',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
};

export default function ThemedApp() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Custom Themed Button</Button>
    </ThemeProvider>
  );
}
```

---

## 🎞️ Motion Primitives

Motionix integrates seamlessly with **Framer Motion**, offering composable motion primitives that make animations intuitive.

### FadeIn

```tsx
import { FadeIn } from '@hey-emmah/motionix';

<FadeIn delay={0.2} duration={0.6}>
  <p>Subtle fade-in animation for smooth entrance effects.</p>
</FadeIn>;
```

### SlideIn (coming soon)

```tsx
import { SlideIn } from '@hey-emmah/motionix';

<SlideIn direction="up" distance={40}>
  <Button>Slide Me In!</Button>
</SlideIn>;
```

---

## 🧱 Core Components

| Component | Description |
|------------|--------------|
| **Button** | Styled and animated button with multiple variants and sizes |
| **Card** | Layout container with built-in elevation and motion |
| **FadeIn** | Simple animation wrapper for entry transitions |
| **Modal** *(coming soon)* | Animated modal dialog with motion transitions |
| **Tooltip** *(coming soon)* | Motion-aware tooltip component |

### Example: Button

```tsx
<Button variant="solid" size="lg">Click Me</Button>
```

### Example: Card

```tsx
<Card>
  <h3>Motionix ❤️ React</h3>
  <p>Build expressive, animated UI that feels natural.</p>
</Card>
```

---

## 🧩 Tokens

Motionix provides a **token system** for colors, spacing, and radii — promoting design consistency across projects.

```ts
import { tokens } from '@hey-emmah/motionix';

console.log(tokens.colors.primary); // #6C63FF
```

| Category | Token | Example |
|-----------|--------|----------|
| **Colors** | `tokens.colors.primary` | `#6C63FF` |
| **Radii** | `tokens.radii.md` | `8px` |
| **Space** | `tokens.space.md` | `12px` |
| **Typography** | *(coming soon)* | — |

---

## 🧠 Developer Toolkit

Motionix includes handy hooks and utilities to simplify animation workflows and user interactions.

| Hook | Description |
|------|--------------|
| `usePrefersReducedMotion()` | Detects user’s OS-level motion preference |
| `useTheme()` | Access theme tokens dynamically |
| `useToggle()` | Simple boolean state management hook |

---

## ⚙️ Building Locally

You can build and test Motionix locally to preview your components before publishing.

```bash
git clone https://github.com/hey-emmah/motionix.git
cd motionix
npm install
npm run build
```

Then pack and install it in another project:

```bash
npm pack
npm install ./motionix-1.0.3.tgz
```

---

## 🧭 Roadmap

| Status | Feature |
|--------|----------|
| ✅ | Core Components (Button, Card, FadeIn) |
| 🔄 | ThemeProvider + Dark Mode |
| 🔄 | Motion Primitives (SlideIn, ScaleIn) |
| ⏳ | Advanced Components (Modal, Tooltip, Dropdown) |
| ⏳ | Storybook Documentation |
| 🚀 | Motionix Studio — Online Playground |

---

## 🤝 Contributing

We welcome contributions from the community 💜

1. **Fork the repository**
2. **Create a new feature branch**

```bash
git checkout -b feature/new-component
```

3. **Make your changes and test them**

```bash
npm run build
```

4. **Commit and push your changes**

```bash
git commit -m "Added new component"
git push origin feature/new-component
```

5. **Open a Pull Request 🚀**

Read the **Contribution Guide** for coding standards and best practices.

---

## 🐞 Issues & Feedback

- Report bugs or feature requests → [GitHub Issues](https://github.com/hey-emmah/motionix/issues)  
- Share ideas or feedback → [@hey_emmah on Twitter](https://twitter.com/hey_emmah)

---

## 🪄 Design Language

| Element | Value |
|----------|--------|
| **Primary Color** | `#6C63FF` |
| **Accent Color** | `#00E6A8` |
| **Font Family** | Inter, JetBrains Mono |
| **Tone** | Bold • Minimal • Motion-driven |

> Motionix blends design and motion to create intuitive, beautiful interfaces.

---

## 📜 License

Licensed under the **MIT License** — free for personal and commercial use.  
See [LICENSE](./LICENSE) for details.

---

## 💜 Author

Built with motion and intention by **Emmah**  
Follow for updates, tutorials, and releases → [@hey_emmah](https://twitter.com/hey_emmah)

---

© 2025 **Motionix** — Built with React, TypeScript & Framer Motion
