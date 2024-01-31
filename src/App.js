import React from 'react'
import BlogItem from './components/BlogItem'




function App(props) {
    console.log(props)

    //Javascript in HTML example
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

    // array.Map examples

    //FIRST EXAMPLE
    const nums = [1, 2, 3, 4, 5];

    nums.map(
        function square(x) {
            return x * x
        }
    )

    let square = nums.map(
        (x) => x * x
    )

    console.log(nums)
    console.log(square)

    //SECOND EXAMPLE
    const names = ["alice","bob", "charlie", "danielle" ]

    const capitalize = names.map(
        (name) => {
            return name.charAt(0).toUpperCase() + name.substring(1)
        })
    
    console.log(names)
    console.log(capitalize)
    
    //THIRD EXAMPLE 
    const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
    // --> ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]

    const pokemonPTags = pokemon.map(
        (mon) => {
            return `<p>${mon}</p>`
    })


    console.log(pokemon)
    console.log(pokemonPTags)



    console.log(props.name)  
    console.log(header)



    return(
        <div className="row">
            <h1>Props</h1>
            <h1>Good {timeofDay} {props.name} {props.isOn}</h1>
            <h1>{pokemonPTags}</h1>
        </div>
    )
}




export default App;

