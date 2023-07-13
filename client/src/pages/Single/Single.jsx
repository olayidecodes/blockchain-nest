import React, { useContext, useEffect, useState } from 'react'
import images from '../../constants/images'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu } from '../../components'
import './Single.scss'
import axios from 'axios'
import moment from "moment"
import { AuthContext } from '../../context/authContext'
import DOMPurify from 'dompurify';

const Single = () => {

  const [ post, setPost ] = useState({});

  const location = useLocation()
  const navigate = useNavigate()

  const postId = location.pathname.split("/")[3]
  
  const {currentUser} = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data)
      } catch(err){
        console.log(err)
      }
    };
    fetchData();
  }, [postId])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate('/')
    } catch(err){
      console.log(err)
    }
  }

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className='single app__section'>
      <div className='content'>
        <img src={`../upload/${post.img}`} />
        <div className='user'>
          {post.userImg && <img src={post.userImg} alt='Writer'/>}
          <div className='info'>
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (<div className='edit'>
            <Link to={`/write?edit=2`} state={post}>
              <img src={images.edit} alt='Edit Post'/>
            </Link>
            <img onClick={handleDelete} src={images.deleter} alt='Delete Post'/>
          </div>
          )}
        </div>
        <h1 className='section__title'>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p> 
      </div>

      <Menu cat={post.cat}/>
    </div>
  )
}

export default Single