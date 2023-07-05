import React from 'react'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Write.scss'

const Write = () => {
  const [value, setValue] = useState('');
  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Ststus: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{display:"none"}} type="file" name="" id="file" />
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
          <input type="radio" name="cat" value="blockchain" id="blockchain" />
          <label htmlFor="blockchain">Blockchain</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="web" id="web" />
          <label htmlFor="web">Web</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="Fintech" id="Fintech" />
          <label htmlFor="Fintech">Fintech</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="ai" id="ai" />
          <label htmlFor="ai">AI</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write