import { useEffect } from "react";
import { useState } from "react";
import "./bottomBlog.css";

function BottomBlog() {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        fetch("https://dineoutclone-foc1.onrender.com/blog-BottemData")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setBlogData(data);
        })
    }, [])
    return (
        <div className="blog-bottom">
            <div className="bottom-blog-section">
                {blogData.map((blog) => {
                    return (
                        <div className="bottom-blog-container">
                            <div className="bottom-blog-image">
                                <img src={blog.img2} alt="" />
                            </div>
                            <div className="bottom-blog-info">
                                <h3>{blog.title}</h3>
                                <span>{blog.date} / by {blog.author}</span>
                                <p>{blog.discription}</p>
                            </div>
                            <div className="read-more">
                                <span>Read More</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="blog-bottom-side-section">
                <h3>FRESH OUT OF THE OVEN</h3>
                <p>FRESH OUT OF THE OVEN
                  Grand Hyatt Welcomes You To A Grand Experience Yet Again!<span>1st September 2022</span></p>
                <p>Your Retail Therapy Sesh Just Got Guilt Free With SteppinOut Nature’s Collective <span>26th August 2022</span></p>
                <p>Unravel The Power Of Local at The SteppinOut Night Market-The Coast Edit <span>5th August 2022</span></p>
                <p>Get Ready For The Biggest Birthday Party Of The Year! The Swiggy Big Birthday Bash!<span>2nd August 2022</span></p>
                <p>Royal Enfield Presents SneakinOut by SteppinOut x SoleSearch – Now In 9 Cities<span>18th July 2022</span></p>
            </div>
        </div>
    )
}

export default BottomBlog