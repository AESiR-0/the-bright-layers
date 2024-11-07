"use client";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import HTMLReactParser from "html-react-parser";
import axios from "axios";
import React, { useState, useRef } from "react";
// import {
//   EditorBubble,
//   EditorBubbleItem,
//   EditorCommand,
//   EditorCommandItem,
//   EditorContent,
//   EditorRoot,
// } from "novel";

import {EditorIn} from "novel";
export default function EditorComp() {
  async function handlePost(e: object) {
    const res = await axios.post("/blog/create", { html: content });
    console.log("====================================");
    console.log(await res);
    console.log("====================================");
  }

  const [content, setContent] = useState("");
  const toolbarOptions = [
    ["bold", "italic"],
    ["link", "image"],
  ];
  const mod = {
    toolbar: toolbarOptions,
  };
  console.log("====================================");
  console.log(content);
  console.log("====================================");
  return (
    <div>
      <EditorRoot>
        <EditorContent>
          <EditorCommand></EditorCommand>
          <EditorBubble></EditorBubble>
        </EditorContent>
      </EditorRoot>
      <button className="w-full my-20" onClick={handlePost}>
        Submit
      </button>
    </div>
  );
}
