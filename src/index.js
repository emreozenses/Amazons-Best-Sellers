import React from 'react'
import ReactDOM from 'react-dom/client'
import BookList from './BookList'
import './index.css';
/*
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => <h2>emre özenses</h2>
const Message = () => {
  return <p>this is my message</p>
}*/



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList/>)
