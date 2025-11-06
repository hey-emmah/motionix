// src/components/Button.tsx
import React from "react";

// src/components/Button.styles.ts
import styled, { css } from "styled-components";
var StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 160ms ease, box-shadow 160ms ease, opacity 160ms ease;

  ${({ variant }) => variant === "outline" ? css`
          background: transparent;
          border: 2px solid var(--m-primary, #6C63FF);
          color: var(--m-primary, #6C63FF);
        ` : css`
          background: var(--m-primary, #6C63FF);
          color: white;
        `}

  ${({ size }) => size === "sm" ? css`
          padding: 6px 10px;
          font-size: 0.85rem;
        ` : size === "lg" ? css`
          padding: 12px 18px;
          font-size: 1.05rem;
        ` : css`
          padding: 8px 14px;
          font-size: 0.95rem;
        `}

  &:hover {
    transform: translateY(-2px);
  }
`;

// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = React.forwardRef(
  ({ children, variant = "solid", size = "md", className = "", ...props }, ref) => {
    return /* @__PURE__ */ jsx(StyledButton, { ref, variant, size, className, ...props, children });
  }
);
Button.displayName = "Button";

// src/motion/FadeIn.tsx
import { motion } from "framer-motion";
import { jsx as jsx2 } from "react/jsx-runtime";
var FadeIn = ({ delay = 0, duration = 0.45, children, className }) => {
  return /* @__PURE__ */ jsx2(
    motion.div,
    {
      className,
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { delay, duration },
      children
    }
  );
};

// src/utils/cn.ts
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/theme/token.ts
var tokens = {
  colors: {
    primary: "#6C63FF",
    accent: "#00E6A8",
    background: "#0B0F19",
    surface: "#0F1724",
    text: "#FFFFFF"
  },
  radii: { sm: 6, md: 8, lg: 12 }
};
export {
  Button,
  FadeIn,
  cn,
  tokens
};
