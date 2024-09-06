"use client";
import BlogMainHeading from "@/components/headings/blogMainHeading/BlogMainHeading";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark as prismaStyle } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PageEsp8266Dashboard() {
  const codeString = `const server = require('express')();
const http = require('http').Server(server);`;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };
  return (
    <div className="container">
      <BlogMainHeading>
        ESP8266 Dashboard with WebSocket and Express.js
      </BlogMainHeading>
      <div style={{ position: "relative" }}>
        <button
          onClick={handleCopy}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            background: "gold",
            color: "white",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <SyntaxHighlighter
          language="javascript"
          style={prismaStyle}
          showInlineLineNumbers
          showLineNumbers
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
