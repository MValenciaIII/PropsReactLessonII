

function BlogItem(props) {
    console.log(props)
    // {
    //     "title": "SMART",
    //     "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     "buttonName": "CLICK HERE",
    //     "imagePath": "200x100.png"
    // }



    return(
        <div className="col-sm-4 blogBorder">
            <div className="container">
                <div className="row blogTitle">
                    <div className="col-sm-12">
                        <h1>{props.title}</h1>
                    </div>
                </div>
                <div className="row blogImg">
                    <div className="col-sm-12">
                        <img src={props.imagePath} alt="" />
                    </div>
                </div>
                <div className="row blogDescription">
                    <div className="col-sm-12">
                        <p>{props.description}</p>
                    </div>
                </div>
                <div className="row blogButton">
                    <div className="col-sm-12">
                        <input type="button" className="rounded" value={props.buttonName} />
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default BlogItem