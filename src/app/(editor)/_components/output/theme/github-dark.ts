import { CSSProperties } from "react";

export const githubDark: { [key: string]: CSSProperties } = {
  hljs: {
    display: "block",
    overflowX: "auto",
    padding: "0.5rem 0",
    color: "#c9d1d9",
    background: "#0d1117",
    borderRadius: "6px",
    border: "1px solid #292f38",
  },

  "hljs-comment": {
    color: "#8b949e",
  },
  "hljs-quote": {
    color: "#7ee787",
  },
  "hljs-doctag": {
    color: "#ff7b72",
  },
  "hljs-keyword": {
    color: "#ff7b72",
  },
  "hljs-formula": {
    color: "#8b949e",
  },
  "hljs-section": {
    color: "#1f6feb",
    fontWeight: "bold",
  },
  "hljs-name": {
    color: "#7ee787",
  },
  "hljs-selector-tag": {
    color: "#7ee787",
  },
  "hljs-deletion": {
    color: "#ffdcd7",
    backgroundColor: "#67060c",
  },
  "hljs-subst": {
    color: "#c9d1d9",
  },
  "hljs-literal": {
    color: "#79c0ff",
  },
  "hljs-string": {
    color: "#a5d6ff",
  },
  "hljs-regexp": {
    color: "#a5d6ff",
  },
  "hljs-addition": {
    color: "#aff5b4",
    backgroundColor: "#033a16",
  },
  "hljs-attribute": {
    color: "#79c0ff",
  },
  "hljs-meta-string": {
    color: "#a5d6ff",
  },
  "hljs-built_in": {
    color: "#ffa657",
  },
  "hljs-class .hljs-title": {
    color: "#d2a8ff",
  },
  "hljs-attr": {
    color: "#79c0ff",
  },
  "hljs-variable": {
    color: "#79c0ff",
  },
  "hljs-template-variable": {
    color: "#ff7b72",
  },
  "hljs-type": {
    color: "#ff7b72",
  },
  "hljs-selector-class": {
    color: "#79c0ff",
  },
  "hljs-selector-attr": {
    color: "#79c0ff",
  },
  "hljs-selector-pseudo": {
    color: "#7ee787",
  },
  "hljs-number": {
    color: "#79c0ff",
  },
  "hljs-symbol": {
    color: "#ffa657",
  },
  "hljs-bullet": {
    color: "#f2cc60",
  },
  "hljs-link": {},
  "hljs-meta": {
    color: "#79c0ff",
  },
  "hljs-selector-id": {
    color: "#79c0ff",
  },
  "hljs-title": {
    color: "#d2a8ff",
  },
  "hljs-emphasis": {
    color: "#c9d1d9",
    fontStyle: "italic",
  },
  "hljs-strong": {
    color: "#c9d1d9",
    fontWeight: "bold",
  },
} as const;
