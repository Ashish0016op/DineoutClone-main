import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Blog.css";
import BottomBlog from "./bottomBlog";
import SocialIcons from "./socialIcons";


function Blog(){
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        fetch("https://dineoutclone-foc1.onrender.com/blog-TopData")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setBlogData(data);
        })
    }, [])
    return (
        <div>
            <Navbar/>
            <div className="blog-section">
                {blogData.map((blog) => {
                    return (
                        <div className="blog-container">
                            <div className="blog-image">
                                <img src={blog.img} alt="" />
                            </div>
                            <div className="blog-info">
                                <h3>{blog.title}</h3>
                                <p className="blog-description">{blog.description}</p>
                                <span>{blog.data}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <BottomBlog />
            <SocialIcons />
        </div>
    )
}
export default Blog;