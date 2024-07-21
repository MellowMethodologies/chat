import React from 'react'
import style from './UserInfo.module.scss'
import Image from 'next/image'

function Avatar({id, alt}) {
  return (
      <Image priority src={`/avatars/${id}.jpeg`}  alt={alt} width="60" height="60"/>
  )
}


function UserInfo() {
  return (
    <div className={style.userInfo}>
      <div className={style.avatar}>
        <Avatar  id="2" alt="player name" />
      </div>
        <h2> JohnDoe</h2>
    </div>
  )
}
 
export default UserInfo
