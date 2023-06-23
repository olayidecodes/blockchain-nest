import React from 'react'
import images from '../../constants/images'
import { Link } from 'react-router-dom'
import { Menu } from '../../components'
import './Single.scss'

const Single = () => {
  return (
    <div className='single app__section'>
      <div className='content'>
        <img src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <div className='user'>
          <img src= "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
          <div className='info'>
            <span>Matthews Victoria</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src={images.edit} alt='Edit Post'/>
            </Link>
            <img src={images.deleter} alt='Delete Post'/>
          </div>
        </div>
        <h1 className='section__title'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Irure sunt fugiat quis ut incididunt amet ex fugiat nisi. Magna nulla voluptate adipisicing enim commodo dolore laborum. Incididunt Lorem Lorem dolore ipsum. Do est et exercitation laboris velit consectetur dolor nulla labore dolore amet. Labore mollit dolore id nostrud Lorem officia exercitation aliqua.
          Qui adipisicing nisi nisi quis non veniam pariatur sint ad culpa. Dolore eiusmod quis occaecat deserunt non aliqua tempor incididunt sunt. Reprehenderit tempor mollit irure sit ad officia ipsum aliquip ullamco consequat nostrud. Ut in ea Lorem reprehenderit est laborum tempor. Non commodo incididunt cillum reprehenderit. Eu do esse do aute ipsum ad quis proident cupidatat fugiat deserunt occaecat et. Ipsum anim velit ipsum deserunt in pariatur culpa commodo.
          Excepteur sint dolor est laborum in dolore est enim anim. Esse ea duis laboris duis. Duis nulla est tempor laboris eu consectetur adipisicing esse sint Lorem reprehenderit nostrud est excepteur.
          Lorem do est incididunt ad nostrud ad dolor deserunt eiusmod. Non nulla nostrud esse voluptate labore. Nisi consequat esse dolore amet eu fugiat officia reprehenderit. Culpa dolore sunt veniam nisi consectetur excepteur laboris labore tempor in eiusmod. Commodo in incididunt sint mollit irure commodo dolore proident laboris culpa irure. Mollit duis ad duis ipsum pariatur. Consequat Lorem duis eu ex duis dolore.
          Deserunt duis non in mollit labore. Cupidatat magna sint magna irure qui ipsum in et enim deserunt incididunt qui eu. Irure aliquip sit do et duis labore. Quis occaecat duis aliqua exercitation adipisicing eu ullamco enim incididunt. Deserunt consectetur in laboris sit ut et adipisicing duis nostrud eu velit officia sit proident. Labore enim proident in do eiusmod velit laborum. Laborum ipsum anim nulla officia esse.
        </p>
      </div>

      <Menu />
    </div>
  )
}

export default Single