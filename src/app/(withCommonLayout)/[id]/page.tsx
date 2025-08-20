/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSingleArticle } from "@/services/articleService";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./../../../Style/contentStyle.css";
import Container from "../_component/Shared/Container";

const BlogDetail = async ({ params }: any) => {
  const articleData = await getSingleArticle(params.id);

  const article = articleData?.data;

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Article Not Found
          </h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <Container>
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-800">
                Home
              </Link>
              <span>›</span>
              <Link href="/blog" className="hover:text-gray-800">
                Blog
              </Link>
              <span>›</span>
              <span className="text-gray-400 truncate max-w-xs md:max-w-md">
                {article.title}
              </span>
            </nav>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <article className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Category Badge */}
            <div className="px-6 pt-6">
              <span className="inline-block bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                {article.category}
              </span>
            </div>

            {/* Article Header */}
            <header className="px-6 pt-4 pb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {article.title}
              </h1>

              {/* Article Meta */}
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold text-gray-700">
                      A
                    </span>
                  </div>
                  <span>By Admin</span>
                </div>
                <span>•</span>
                <span>{formatDate(article.createdAt)}</span>
              </div>

              {/* Social Share Buttons */}
              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                  <span>Twitter</span>
                </button>
                <button className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </button>
                <button className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 极房极 1.033.394 2.143.889 2.747.099.120.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.162-1.499-.69-2.436-2.878-2.436-4.极 0-3.78 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.750-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 23.954 12.极 23.954c6.624 0 11.99-5.367 11.99-11.986C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                  <span>Pinterest</span>
                </button>
              </div>
            </header>

            {/* Featured Image */}
            {article.imageUrl && (
              <div className="relative w-full h-64 md:h-96 mb-8">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Article Content */}
            <div className="px-6 pb-8">
              <div className="prose prose-lg max-w-none custom-article-content">
                <div
                  className="text-gray-700 leading-relaxed text-base md:text-lg"
                  dangerouslySetInnerHTML={{ __html: String(article.content) }}
                />
              </div>

              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <p>Published on {formatDate(article.createdAt)}</p>
                    {article.updatedAt !== article.createdAt && (
                      <p>Last updated on {formatDate(article.updatedAt)}</p>
                    )}
                  </div>

                  {/* Type badge if available */}
                  {article.type && (
                    <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                      {article.type}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </article>

          {/* Navigation or Related Articles Section */}
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 极 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Back to Blog</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetail;
