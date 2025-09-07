import React from "react";

const blogPosts = [
  {
    title: "Top 5 Signs of a Termite Infestation",
    summary: "Don’t ignore these common indicators in your home.",
    image: "/images/termite-blog.jpg",
    link: "/blog/termite-signs",
  },
  {
    title: "How to Prevent Cockroach Invasions",
    summary: "Simple tips to keep your kitchen and home cockroach-free.",
    image: "/images/cockroach-blog.jpg",
    link: "/blog/cockroach-prevention",
  },
  {
    title: "Is Mosquito Fogging Safe? Myths vs Facts",
    summary: "Understand how fogging works and if it’s safe for your family.",
    image: "/images/mosquito-blog.jpg",
    link: "/blog/mosquito-fogging-safety",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-blue-50 text-gray-800 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-400 via-blue-300 to-green-200 py-20 px-4 text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow mb-4">
          Pest Control Blog & Tips
        </h1>
        <p className="text-white text-lg max-w-2xl mx-auto">
          Explore expert insights, prevention guides, and service updates from
          HS PATELBROS Pest Services.
        </p>
      </section>

      {/* Blog Cards */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-56">
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{post.summary}</p>
                </div>
                <a
                  href={post.link}
                  className="mt-4 inline-block text-sm font-semibold text-green-600 hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
