import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 h-[500px]">
          {/* Main Featured Article - Left Side */}
          <div className="relative col-span-7 overflow-hidden group cursor-pointer h-[500px]">
            <Image
              src={
                "https://images.unsplash.com/photo-1672009190560-12e7bade8d09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Featured Article"
              width={1170}
              height={500}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/70 to-transparent z-10"></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 h-full flex flex-col justify-end p-24">
              <div className="translate-y-6">
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-teal-500 to-teal-700 text-white px-3 py-1 rounded-md text-sm font-semibold uppercase tracking-wide">
                    GAMING
                  </span>
                </div>

                <h1 className="text-white text-3xl lg:text-4xl font-bold leading-tight mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  Oculus Quest X Headset: Discover a Shining New Star
                </h1>

                <div className="flex items-center text-gray-300 text-sm">
                  <span className="font-medium">Shane Doe</span>
                  <span className="mx-2">-</span>
                  <span>Jan 5, 2021</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Two Articles */}
          <div className="col-span-5  h-[500px]">
            <div className="flex flex-col gap-2">
              <div className="h-[245px] relative">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1508896080210-93c377eb4135?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt="Featured Article"
                  width={1170}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/70 to-transparent z-10"></div>
                <div className="absolute inset-0 z-20 h-full flex flex-col justify-end p-8">
                  <div className="mb-4">
                    <span className="bg-gradient-to-r from-teal-500 to-teal-700 text-white px-3 py-1 rounded-md text-sm font-semibold uppercase tracking-wide">
                      GAMING
                    </span>
                  </div>

                  <h1 className="text-white text-3xl lg:text-2xl font-bold leading-tight mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    Oculus Quest X Headset: Discover a Shining New Star
                  </h1>

                  <div className="flex items-center text-gray-300 text-sm">
                    <span className="font-medium">Shane Doe</span>
                    <span className="mx-2">-</span>
                    <span>Jan 5, 2021</span>
                  </div>
                </div>
              </div>
              <div className="h-[245px] relative">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt="Featured Article"
                  width={1170}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/70 to-transparent z-10"></div>
                <div className="absolute inset-0 z-20 h-full flex flex-col justify-end p-8">
                  <div className="mb-4">
                    <span className="bg-gradient-to-r from-teal-500 to-teal-700 text-white px-3 py-1 rounded-md text-sm font-semibold uppercase tracking-wide">
                      GAMING
                    </span>
                  </div>

                  <h1 className="text-white text-3xl lg:text-2xl font-bold leading-tight mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    Oculus Quest X Headset: Discover a Shining New Star
                  </h1>

                  <div className="flex items-center text-gray-300 text-sm">
                    <span className="font-medium">Shane Doe</span>
                    <span className="mx-2">-</span>
                    <span>Jan 5, 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
