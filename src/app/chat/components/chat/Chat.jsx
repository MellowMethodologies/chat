import React from 'react'
import style from './Chat.module.scss'
import UserInfo from './UserInfo/UserInfo'



const Chat = () => {
  return (
    <div className={style.chat}>
      <UserInfo name={"receiver"} pic={"/avatars/2.jpeg"}/>
    </div>
  )
}

export default Chat
