"use client";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import axios from "axios";
import React, { useState, useRef } from "react";
import {
  Editor
} from "novel";
export default function EditorComp() {
  async function handlePost(e: object) {
    const res = await axios.post("/blog/create", { html: content });
    console.log(await res, "res");

  }
  const [content, setContent] = useState({
    title: '',
    content: ''
  });
  return (
    <div className="container">
      <div className="flex flex-col text-center mt-20  px-40">
        <label className=" block  text-gray-700 text-2xl font-sans mb-2 " >
          Title
        </label>
        <input onChange={(e) => {
            
      }}
          className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
      </div>

      <div className="w-full -mt-10 flex flex-col justify-center items-center py-20">
        <h3 className="text-2xl text-center my-5">Content</h3>
        <Editor />
      </div>
      <div className="flex justify-center">
        <button className="w-[60%] -mt-40 transition-all hover:bg-white hover:text-secondary hover:shadow-lg bg-secondary text-white rounded-md h-10 shadow-lg my-10" onClick={handlePost}>
          Submit
        </button>
      </div>
    </div>
  );
}
