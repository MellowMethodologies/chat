import React from 'react'
import style from './ChatList.module.scss'
import { FiSearch } from "react-icons/fi";
import { FaRegSquarePlus } from "react-icons/fa6";


function ChatList() {
  return (
    <div>
      <div className={style.searchBar}>
        {/* not imported from the ui library */}
        <div className={style.textField}>
          < FiSearch/>
          <input className={style.textSearch} placeholder="Search" label="Search" type='text'/>
          <FaRegSquarePlus />
        </div>
      </div>
    </div>
  )
}

export default ChatList
