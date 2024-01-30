import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import BlogsRow from './BlogsRow'

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div className="container">
        <App name="Mr.App" isOn={true} nums={8} />
        <BlogsRow />
    </div>
)