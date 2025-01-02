import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover"
        />
        <span className="absolute top-4 right-4 bg-orange-400 text-white px-3 py-1 rounded-md text-sm">
          {post.date}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-4 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <Link
          to={post.link}
          className="inline-flex items-center text-orange-400 hover:text-orange-500 transition-colors"
        >
          Read More
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const posts = [
    {
      image: 'https://script.viserlab.com/ratelab/assets/images/frontend/blog/thumb_6354d367445a11666503527.jpg',
      date: "2022-Oct-23",
      title: "Maecenas nisi libero, gravida eget pulvinar quis, faucibus in ipsum....",
      excerpt: "It is a long established fact that a reader will be distracted by the readable content of...",
      link: "/BlogDetails"
    },
    {
      image: "https://script.viserlab.com/ratelab/assets/images/frontend/blog/thumb_6354d342a0e011666503490.jpeg",
      date: "2022-Oct-23",
      title: "Maecenas nisi libero, gravida eget pulvinar quis, faucibus in ipsum....",
      excerpt: "It is a long established fact that a reader will be distracted by the readable content of...",
      link: "/BlogDetails"
    },
    {
      image: "https://script.viserlab.com/ratelab/assets/images/frontend/blog/thumb_6354d3223fe191666503458.jpg",
      date: "2022-Oct-23",
      title: "Musk says Starlink active in Ukraine as Russian invasion disrupts internet",
      excerpt: "It is a long established fact that a reader will be distracted by the readable content of...",
      link: "/BlogDetails"
    }
  ];

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
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

