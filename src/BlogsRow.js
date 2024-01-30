import BlogItem from "./components/BlogItem"


function BlogsRow() {
    return(
        <div className="row">



            <BlogItem title="SMART" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." buttonName="CLICK HERE" imagePath="https://placehold.jp/200x100.png"/>
            <BlogItem title="STRONG" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. " buttonName="NO HERE CLICK ME" imagePath="https://placehold.jp/200x100.png"/>
            <BlogItem title="STABLE" description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            buttonName="You're forgettign about me!" imagePath="https://placehold.jp/200x100.png" />
            {/* <BlogItem title="SUPER" description="Hi I'm superman" buttonName="INfinity and Beyond" imagePath="" /> */}
        </div>
    )
}


export default BlogsRow