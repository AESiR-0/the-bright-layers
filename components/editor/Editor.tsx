'use client'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import HTMLReactParser from "html-react-parser";
import axios from "axios";
import React, {useState, useRef} from 'react'

export default function Editor() {
    async function handlePost(e:object) {
        
        const res = await axios.post('/blog/create', {html : content})
        console.log('====================================');
        console.log(await res);
        console.log('====================================');
    }
    const editor = useRef(null);
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const toolbarOptions = [
        ["bold", "italic"],
        ["link", "image"],
      ];
      const mod = {
        toolbar: toolbarOptions,
      };
      console.log('====================================');
      console.log(content);
      console.log('====================================');
    return (
    <div>
       <ReactQuill
        modules={mod}
        theme="snow"
        ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />
      <button className="w-full my-20" onClick={handlePost}> Submit </button>
    </div>
  )
}
