"use client";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import javascript from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";

SyntaxHighlighter.registerLanguage("javascript", javascript);

export default function PageEsp8266Dashboard() {
  const codeString = `
        const server = require('express')();
        const http = require('http').Server(server);
    `;
  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      <SyntaxHighlighter language="javascript" style={docco}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
