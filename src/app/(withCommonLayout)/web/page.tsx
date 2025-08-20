import Image from "next/image";
import React from "react";

const WebDev = () => {
  const editorsPicks = [
    {
      id: 1,
      title: "Oculus Quest X Headset: Discover a Shining New Star",
      date: "Jan 5, 2021",
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      title: "iPhone Pro 13 Rumored to Feature 1TB of Storage",
      date: "Jan 5, 2021",
      image:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      title: "Fujifilm's 102-Megapixel Camera is the Size of a Typical DSLR",
      date: "Jan 5, 2021",
      image:
        "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=200&fit=crop",
    },
  ];

  const mainArticles = [
    {
      id: 1,
      title: "Buy the Best Gaming Accessories at Amazon Grand Gaming Days",
      category: "GAMING",
      image:
        "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=500&h=300&fit=crop",
    },
    {
      id: 2,
      title:
        "PlayStation 5 vs Xbox Series X Review: The 'Consumer Choice' Debate",
      category: "GAMING",
      image:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded opacity-50"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">NEW SMARTMAG</h1>
              <p className="text-gray-600">TRY IT, YOU&apos;LL LOVE IT</p>
            </div>
          </div>
          <button className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors">
            GET SMARTMAG
          </button>
          <div className="hidden lg:flex space-x-4">
            <div className="w-32 h-20 bg-gray-200 rounded-lg"></div>
            <div className="w-32 h-20 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Home</span>
            <span>»</span>
            <span>Category: Gaming</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <div className="border-l-4 border-pink-500 pl-4 mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                BROWSING: GAMING
              </h2>
            </div>

            {/* Main Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mainArticles.map((article) => (
                <article key={article.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-pink-500 text-white px-3 py-1 text-sm font-bold rounded">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-500 transition-colors">
                    {article.title}
                  </h3>
                </article>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Editors Picks */}
            <section>
              <h3 className="text-xl font-bold text-pink-500 mb-6">
                Editors Picks
              </h3>
              <div className="space-y-6">
                {editorsPicks.map((pick) => (
                  <article
                    key={pick.id}
                    className="flex space-x-4 group cursor-pointer"
                  >
                    <div className="flex-shrink-0">
                      <Image
                        src={pick.image}
                        alt={pick.title}
                        width={300}
                        height={200}
                        className="w-20 h-16 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 group-hover:text-pink-500 transition-colors text-sm leading-tight">
                        {pick.title}
                      </h4>
                      <p className="text-gray-500 text-xs mt-1">{pick.date}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Top Reviews */}
            <section>
              <h3 className="text-xl font-bold text-pink-500 mb-6">
                Top Reviews
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">
                  More reviews coming soon...
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WebDev;
