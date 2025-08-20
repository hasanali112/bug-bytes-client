import Image from "next/image";
import React from "react";

const DevsOps = () => {
  const gadgets = [
    {
      id: 1,
      title:
        "Apple has Updated Their Patent to Protect the Use of Mesh Fabrics for its Canopy",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "Jan 18, 2025",
      category: "Apple",
      hasVideo: false,
    },
    {
      id: 2,
      title: "Samsung Announces Galaxy Buds Pro, its Most Premium Earbuds",
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "Jan 16, 2025",
      category: "Samsung",
      hasVideo: true,
    },
    {
      id: 3,
      title:
        "A Science Breakthrough Will Help in Extending Life of Your Gadgets",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "Jan 15, 2025",
      category: "Science",
      hasVideo: false,
    },
    {
      id: 4,
      title: "PlayStation 5's Mario Game & Watch is a Choice Gaming Stuffer",
      image:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "Jan 14, 2025",
      category: "Gaming",
      hasVideo: false,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            <span className="text-pink-500">GADGETS</span>
          </h2>
          <div className="w-20 h-1 bg-pink-500 mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl">
            Discover the latest in technology, from cutting-edge smartphones to
            innovative smart home devices.
          </p>
        </div>

        {/* Gadgets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gadgets.map((gadget) => (
            <article
              key={gadget.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48">
                <Image
                  src={gadget.image}
                  alt={gadget.title}
                  width={1000}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Video Play Button */}
                {gadget.hasVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/60 backdrop-blur-sm rounded-full p-3 hover:bg-black/70 transition-colors">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      gadget.category === "Apple"
                        ? "bg-gray-800"
                        : gadget.category === "Samsung"
                        ? "bg-blue-600"
                        : gadget.category === "Gaming"
                        ? "bg-purple-600"
                        : "bg-green-600"
                    }`}
                  >
                    {gadget.category}
                  </span>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-bold text-gray-900 mb-3 line-clamp-3 group-hover:text-pink-600 transition-colors duration-300 leading-snug">
                  {gadget.title}
                </h3>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 font-medium">
                    {gadget.date}
                  </span>
                  <div className="flex items-center text-pink-500 font-semibold group-hover:text-pink-600 transition-colors">
                    Read More
                    <svg
                      className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform"
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
            View All Gadgets
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

        {/* Featured Brands */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Featured Brands
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {/* Brand logos - you can replace these with actual brand logos */}
            <div className="text-2xl font-bold text-gray-800">Apple</div>
            <div className="text-2xl font-bold text-blue-600">Samsung</div>
            <div className="text-2xl font-bold text-green-600">Google</div>
            <div className="text-2xl font-bold text-red-600">OnePlus</div>
            <div className="text-2xl font-bold text-purple-600">Sony</div>
            <div className="text-2xl font-bold text-orange-500">Xiaomi</div>
          </div>
        </div>

        {/* Tech Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-500 mb-2">500+</div>
            <div className="text-gray-600 text-sm font-semibold">
              Gadgets Reviewed
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-500 mb-2">50K+</div>
            <div className="text-gray-600 text-sm font-semibold">
              Tech Enthusiasts
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">25</div>
            <div className="text-gray-600 text-sm font-semibold">
              Expert Reviewers
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-500 mb-2">24/7</div>
            <div className="text-gray-600 text-sm font-semibold">
              Latest Updates
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevsOps;
