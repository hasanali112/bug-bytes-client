import { getAllArticles } from "@/services/articleService";
import { IArticle } from "@/types/article.interface";
import Image from "next/image";
import React from "react";

const WebDev = async () => {
  const articleData = await getAllArticles();

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Article List */}
          <div className="flex-1">
            <div className="space-y-6">
              {articleData?.data?.map((post: IArticle) => (
                <article
                  key={post._id}
                  className="flex flex-col sm:flex-row gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300 group cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative flex-shrink-0 w-full sm:w-48 h-48 sm:h-32 overflow-hidden rounded-lg">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    {/* Category */}
                    <div className="mb-2">
                      <span className="text-pink-500 text-sm font-bold uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-pink-600 transition-colors duration-300 leading-tight">
                      {post.title}
                    </h3>

                    {/* Meta Information */}
                    <div className="flex items-center text-gray-500 text-sm space-x-4">
                      <span>{post.createdAt}</span>
                      <div className="flex items-center space-x-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-8">
              <button className="bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 space-y-6">
            {/* Advertisement */}
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-xl border border-yellow-300">
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  THE NEW
                </p>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  TECHGHOR
                </h3>
                <p className="text-gray-700 mb-6">
                  Trusted by over 50,000 developers worldwide
                </p>
                <button className="bg-black text-white font-bold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 mb-6">
                  EXPLORE NOW
                </button>

                {/* Device Mockup */}
                <div className="relative mx-auto w-32 h-64 bg-gray-900 rounded-3xl p-2">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-4 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg">
                      <div className="w-full h-full bg-gradient-to-tr from-yellow-200 to-yellow-100 rounded-lg opacity-80"></div>
                    </div>
                  </div>
                  {/* Notch */}
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Popular This Week
              </h3>
              <div className="space-y-4">
                {articleData?.data
                  ?.slice(0, 3)
                  .map((post: IArticle, index: number) => (
                    <div
                      key={post._id}
                      className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 hover:text-pink-600 cursor-pointer transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {post.createdAt}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-6 rounded-xl text-white">
              <h3 className="text-lg font-bold mb-2">Stay Updated!</h3>
              <p className="text-pink-100 text-sm mb-4">
                Get the latest tech insights delivered to your inbox weekly.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="w-full bg-white text-pink-600 font-semibold py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDev;
