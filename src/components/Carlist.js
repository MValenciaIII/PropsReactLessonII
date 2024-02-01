
const carData = [
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg",
            "title": "Mazda MX-5",
            "start_production": 1989,
            "class": "Sports car Roadster"
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Kuebelwagen_1.jpg/400px-VW_Kuebelwagen_1.jpg",
            "title": "Volkswagen Kübelwagen",
            "class": "Military vehicle"
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg/400px-2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg",
            "title": "Porsche Cayenne",
            "start_production": 2002,
            "class": "Mid-size luxury crossover SUV"
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG/400px-Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG",
            "title": "Vauxhall Chevette",
            "start_production": 1975,
            "class": "Supermini"
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Dynamixion_car_by_Buckminster_Fuller_1933_%28side_views%29.jpg/400px-Dynamixion_car_by_Buckminster_Fuller_1933_%28side_views%29.jpg",
            "title": "Dymaxion car",
            "start_production": 1933,
            "class": "Concept car"
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ford_Crown_Victoria_LX.jpg/400px-Ford_Crown_Victoria_LX.jpg",
            "title": "Ford Crown Victoria",
            "start_production": 1955,
            "class": "Full-size Ford"
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Plymouth_Superbird.jpg/400px-Plymouth_Superbird.jpg",
            "title": "Plymouth Superbird",
            "start_production": 1970,
            "class": "Muscle car(today) and Race car(Past)"
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/2nd-Saab-9000-hatch.jpg/400px-2nd-Saab-9000-hatch.jpg",
            "title": "Saab 9000",
            "start_production": 1984,
            "class": "Executive car"
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2003-2005_Pontiac_Sunfire.jpg/400px-2003-2005_Pontiac_Sunfire.jpg",
            "title": "Pontiac Sunfire",
            "start_production": 1994,
            "class": "Compact"
        },
]

function CarItem(props) {
    console.log(props) //console.log(props) returns an OBJECT filled with VALUES from COMPONENT call's ATTRIBUTES
                        //ie. <CarItem makeName="Nissan" /> 



    // REACT ALLOWS US TO WRITE JAVASCRIPT INSIDE THE RETURN STATEMENT by = {}
    let name = "Fusion"

    //REACT ALLOWS EVEN OBJECTS TO BE CALLED from return STATEMENTS
    let wholeCarDetails = {
        make: 'Chevy',
        model: 'Fusion',
        year: '2011',
        color: 'Silver'
    }

    return (
        <div className="col-sm-4">
            {/* MAKE MODEL YEAR COLOR */}
            <h1>{props.makeName}</h1>
            <h3>{props.year} {props.typeCar}</h3>
        </div>
        
    )
}

function CarRowList() {

    //.MAP = LOOP THRU AN EXISTING ARRAY AND run the task you ask it to DO
    let nums = [1,2,3,4,5]; //OLD ARRAY

    //NEW ARRAY BUT WITH SQUARED NUMBERS
    let squaredNums = nums.map((currentNumber) => currentNumber * currentNumber);
    console.log(squaredNums) // [1,4,9,16,25]
    //CREATES A NEW LIST OF ARRAY 


    // SEEING REPEATED HTML CODE 
    // Could I make a component to handle this?

    //WE SET VARIABLE TO SHOW or USE in HTML PAGE 
    //THIS SHOULD RETURN 9 CarItem Components bc of teh "CarData" length
    let carInventoryMapArray = carData.map((carDetes) => {
        return <CarItem makeName={carDetes.title} year={carDetes.start_production} typeCar={carDetes.class}/>
    });
    //

            {/* ATTRIBUTES can be written IN COMPONENTS */}
            // <CarItem makeName="Ford" modelName="Fusion" year="2011" color="Brown"/>
            // <CarItem makeName="Chevy" modelName="Tahoe" year="2013" color="WHite"/>

    return (
        
        <div className="row">
            {carInventoryMapArray}
        </div>
    )
}



export default CarRowList