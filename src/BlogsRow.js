import BlogItem from "./components/BlogItem"
import blogItemData from './Blogdata'



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