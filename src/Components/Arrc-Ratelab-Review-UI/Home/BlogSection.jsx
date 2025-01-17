// import React from 'react';
// import { ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const BlogCard = ({ post }) => {
//   return (
//     <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
//       <div className="relative">
//         <img
//           src={post.image}
//           alt={post.title}
//           className="w-full h-64 object-cover"
//         />
//         <span className="absolute top-4 right-4 bg-orange-400 text-white px-3 py-1 rounded-md text-sm">
//           {post.date}
//         </span>
//       </div>
//       <div className="p-6">
//         <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-4 line-clamp-2">
//           {post.title}
//         </h3>
//         <p className="text-gray-600 mb-4 line-clamp-3">
//           {post.excerpt}
//         </p>
//         <Link
//           to={post.link}
//           className="inline-flex items-center text-orange-400 hover:text-orange-500 transition-colors"
//         >
//           Read More
//           <ArrowRight className="ml-2 w-4 h-4" />
//         </Link>
//       </div>
//     </div>
//   );
// };

// const BlogSection = () => {
//   const posts = [
//     {
//       image: 'https://script.viserlab.com/ratelab/assets/images/frontend/blog/thumb_6354d367445a11666503527.jpg',
//       date: "2024-Dec-31",
//       title: "Top 10 Gadgets of 2024: Detailed Reviews and Ratings",
//       excerpt: "Explore the most popular gadgets of 2024, with in-depth reviews and expert opinions.",
//       link: "/BlogDetails"
//     },
//     {
//       image: "https://script.viserlab.com/ratelab/assets/images/frontend/blog/thumb_6354d342a0e011666503490.jpeg",
//       date: "2024-Dec-25",
//       title: "The Best Laptops for Developers in 2024: Performance Reviewed",
//       excerpt: "Find out which laptops are the best for coding, development, and productivity this year.",
//       link: "/BlogDetails"
//     },
//     {
//       image: "https://script.viserlab.com/ratelab/assets/images/frontend/blog/thumb_6354d3223fe191666503458.jpg",
//       date: "2024-Dec-20",
//       title: "Customer Reviews Matter: How Feedback Shapes Product Success",
//       excerpt: "Learn how customer reviews influence product development and market strategies.",
//       link: "/BlogDetails"
//     }
//   ]
//   return (
//     <section className="py-16 px-4 mt-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <span className="text-orange-400 text-4xl font-medium mb-2 block">
//             Blog Post
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-navy-900">
//             Our Latest News
//           </h2>
//         </div>

//         {/* Blog Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {posts.map((post, index) => (
//             <BlogCard key={index} post={post} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogCard = ({ post }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
      <div className="relative">
        <img
          loading="lazy"
          src={post.featureImage}
          alt={post.title}
          className="w-full h-64 object-cover transition-transform transform group-hover:scale-110 duration-300 ease-in-out"
        />
        <span className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-md text-sm shadow-md">
          {new Date(post.createdAt).toLocaleDateString()}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors duration-300">
          {post.title}
        </h3>
        <div
          className="text-gray-600 mb-4 line-clamp-3 mt-2 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.description }}
        />
        <Link
          to={`/blogdetails/${post._id}`}
          className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors duration-300 font-semibold"
        >
          Read More
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://arrc-tech-ratelab-backend-project.onrender.com/api/posts");
        if (response.data) {
          setPosts(response.data);
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchPosts();
  }, []);

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-16 px-4 mt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-orange-400 text-4xl font-medium mb-2 block">
            Blog Post
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900">
            Our Latest News
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
