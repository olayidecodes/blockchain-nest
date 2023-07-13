import React from 'react'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Write.scss'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

const Write = () => {

  const state = useLocation().state
  const [value, setValue] = useState(state?.title || '');
  const [title, setTitle ] = useState(state?.desc || '')
  const [ file, setFile ] = useState(null)
  const [ cat, setCat ] = useState(state?.cat || "")

  const navigate = useNavigate()

  const upload = async () => {
    try{
      const formData = new FormData();
      formData.append("file", file)
      const res = await axios.post("/upload", formData)
      return res.data
    } catch(err){
      console.log(err)
    }
  }

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
          navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='add'>
      <div className="content">
        <input type="text" value={title} placeholder='Title' onChange={e=> setTitle(e.target.value)}/>
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{display:"none"}} type="file" name="" id="file" onChange={e=> setFile(e.target.files[0])}/>
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
          <input type="radio" checked={cat === "blockchain"} name="cat" value="blockchain" id="blockchain" onChange={e=> setCat(e.target.value)}/>
          <label htmlFor="blockchain">Blockchain</label>
          </div>
          <div className="cat">
          <input type="radio" checked={cat === "web"} name="cat" value="web" id="web" onChange={e=> setCat(e.target.value)}/>
          <label htmlFor="web">Web</label>
          </div>
          <div className="cat">
          <input type="radio" checked={cat === "fintech"} name="cat" value="fintech" id="fintech" onChange={e=> setCat(e.target.value)}/>
          <label htmlFor="Fintech">Fintech</label>
          </div>
          <div className="cat">
          <input type="radio" checked={cat === "ai"} name="cat" value="ai" id="ai" onChange={e=> setCat(e.target.value)}/>
          <label htmlFor="ai">AI</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write