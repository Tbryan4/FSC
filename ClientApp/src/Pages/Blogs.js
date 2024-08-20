// src/pages/AboutPage.js
import React from 'react';
import {Blogs} from "../Components/Blogs/Blogs";
import {Banner} from "../Components/StaticBanner/StaticBanner";

const BlogsPage = () => {
    return (
        <div>
            <Banner/>
           <Blogs/>
        </div>
    );
};

export default BlogsPage;