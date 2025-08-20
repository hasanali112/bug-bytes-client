import Image from "next/image";
import React from "react";

const LatestBlog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Web Applications with MERN Stack",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "Jan 18, 2025",
      category: "Development",
    },
    {
      id: 2,
      title:
        "The Future of AI in Web Development: What Developers Need to Know",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "Jan 16, 2025",
      category: "AI/ML",
    },
    {
      id: 3,
      title: "10 Essential React Hooks Every Developer Should Master in 2025",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "Jan 15, 2025",
      category: "React",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            LATEST <span className="text-pink-500">BLOGS</span>
          </h2>
          <div className="w-20 h-1 bg-pink-500 mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl">
            Stay updated with the latest trends, tutorials, and insights in web
            development, technology, and digital innovation.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-pink-600 transition-colors duration-300">
                  {post.title}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm font-medium">
                    {post.date}
                  </span>
                  <div className="flex items-center text-pink-500 text-sm font-semibold group-hover:text-pink-600 transition-colors">
                    Read More
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-full hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Blogs
            <svg
              className="w-5 h-5 ml-2 inline-block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Never Miss an Update!</h3>
          <p className="mb-6 text-teal-100">
            Subscribe to our newsletter and get the latest tech insights
            delivered to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-teal-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
