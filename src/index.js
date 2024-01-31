import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import BlogsRow from './BlogsRow'
import ContactItem from './components/ContactCards'

let root = ReactDOM.createRoot(document.getElementById('root'));

const outlookContactAPI = 
[
    {
        fName:"Margarito",
        lName:"Valencia",
        email:"margarito.valencia@mscoding.org"
    },
    {
        fName:"Andrew",
        lName:"Stamps",
        email:"andrew.stamps@mscoding.org"
    },
    {
        fName:"Jonathan",
        lName:"Pruitt",
        email:"jPruit12312@yahoo.com"
    }
]

console.log(outlookContactAPI[1].fName)

const contactDataList = outlookContactAPI.map(
    (currentItem) => {
        return <ContactItem 
        fName={currentItem.fName} lName={currentItem.lName} email={currentItem.email} />
    }
)

root.render(
    <div className="container">
        <App name="Mr.App" isOn={true} nums={8} />
        <BlogsRow />
        <div className="row ContactCard">
            {contactDataList}
        </div>
    </div>
)