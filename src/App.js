import React from 'react'
import BlogItem from './components/BlogItem'




function App(props) {
    console.log(props)


    let header = <h1>Hello</h1>
    let date = new Date()
    let hours = date.getHours() ;
    let timeofDay;

    if (hours < 12) {
        timeofDay = 'morning'
    } else if ( hours >= 12 && hours < 17) {
        timeofDay = "afternoon"
    } else {
        timeofDay = "night"
    }
    console.log(props.name)  
    console.log(header)
    return(
        <div className="row">
            <h1>Props</h1>
            <h1>Good {timeofDay} {props.name} {props.isOn}</h1>
        </div>
    )
}


function BlogsRow() {
    return(
        <div className="row">



            <BlogItem title="SMART" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." buttonName="CLICK HERE" imagePath={smart}/>
            <BlogItem title="STRONG" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. " buttonName="NO HERE CLICK ME" imagePath="https://placehold.jp/200x100.png"/>
            <BlogItem title="STABLE" description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            buttonName="You're forgettign about me!" imagePath={smart} />
            {/* <BlogItem title="SUPER" description="Hi I'm superman" buttonName="INfinity and Beyond" imagePath="" /> */}
        </div>
    )
}

export default App;

