import React from 'react'
import { createContext } from 'react'
import List from './List.js'
export const MessagesContext=createContext();
const Context = () => {
  return (
    <div>
      <MessagesContext.Provider value={{username:'venky'}}>
        <List/>
      </MessagesContext.Provider>
    </div>
  )
}

export default Context
