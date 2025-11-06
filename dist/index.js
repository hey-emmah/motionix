"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  FadeIn: () => FadeIn,
  cn: () => cn,
  tokens: () => tokens
});
module.exports = __toCommonJS(index_exports);

// src/components/Button.tsx
var import_react = __toESM(require("react"));

// src/components/Button.styles.ts
var import_styled_components = __toESM(require("styled-components"));
var StyledButton = import_styled_components.default.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 160ms ease, box-shadow 160ms ease, opacity 160ms ease;

  ${({ variant }) => variant === "outline" ? import_styled_components.css`
          background: transparent;
          border: 2px solid var(--m-primary, #6C63FF);
          color: var(--m-primary, #6C63FF);
        ` : import_styled_components.css`
          background: var(--m-primary, #6C63FF);
          color: white;
        `}

  ${({ size }) => size === "sm" ? import_styled_components.css`
          padding: 6px 10px;
          font-size: 0.85rem;
        ` : size === "lg" ? import_styled_components.css`
          padding: 12px 18px;
          font-size: 1.05rem;
        ` : import_styled_components.css`
          padding: 8px 14px;
          font-size: 0.95rem;
        `}

  &:hover {
    transform: translateY(-2px);
  }
`;

// src/components/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = import_react.default.forwardRef(
  ({ children, variant = "solid", size = "md", className = "", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledButton, { ref, variant, size, className, ...props, children });
  }
);
Button.displayName = "Button";

// src/motion/FadeIn.tsx
var import_framer_motion = require("framer-motion");
var import_jsx_runtime2 = require("react/jsx-runtime");
var FadeIn = ({ delay = 0, duration = 0.45, children, className }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_framer_motion.motion.div,
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  FadeIn,
  cn,
  tokens
});
