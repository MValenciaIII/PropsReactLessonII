import BlogItem from "./components/BlogItem"
//import blogItemData from './Blogdata'


 const blogItemData = [
    {
        title:"SMART",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        buttonName:"CLICK ME",
        imagePath:"https://placehold.jp/200x100.png"
    },
    {
        title:"STRONG",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        buttonName:"MORE",
        imagePath:"https://placehold.jp/200x100.png"
    },
    {
        title:"STABLE",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        buttonName:"MORE",
        imagePath:"https://placehold.jp/200x100.png"
    }
]


function BlogsRow() {

    const blogData = blogItemData.map(
        (currentItem) => {
            return <BlogItem

            title={currentItem.title} 
            description={currentItem.description} buttonName={currentItem.buttonName} imagePath={currentItem.imagePath} 
            
            />
        }
    )

    return(
        <div className="row">
            {blogData}    
        </div>
    )
}


export default BlogsRow