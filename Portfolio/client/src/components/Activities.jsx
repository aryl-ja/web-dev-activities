import React from 'react';

const activityData = [
  {
    title: "Loop",
    image: "loop.png", // Replace with your actual image path
    link: "/Loop/index.html", // Replace with your actual live link
  },
  {
    title: "Calculator",
    image: "calc.png", // Replace with your actual image path
    link: "/calculator/index.html",
  },
  {
    title: "Array",
    image: "array.png", // Replace with your actual image path
    link: "/array objects/index.html",
  },
  {
    title: "To-Do List",
    image: "canvas.png", // Replace with your actual image path
    link: "https://to-do-client-zb1e.vercel.app/",
  },
  // Add more items here easily!
];

function Activities() {
  return (
    <section className="relative max-w-3xl mx-auto mt-16 px-6 py-12 bg-gradient-to-b from-[#f5d0d0] to-[#f1a0a0] border-4 border-[#e76f6f] rounded-xl shadow-xl overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] bg-cover bg-center opacity-10 pointer-events-none"></div>

      {/* Decorative horizontal lines */}
      <div className="absolute top-6 left-10 right-10 h-0.5 bg-[#d14d4d] opacity-30"></div>
      <div className="absolute bottom-6 left-10 right-10 h-0.5 bg-[#d14d4d] opacity-30"></div>

      <h2 className="relative z-10 text-3xl font-semibold text-[#9b2d2d] mb-6 text-center">Activities</h2>

      {/* Grid of Activities */}
      <div className="relative z-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {activityData.map((activity, index) => (
          <a
            key={index}
            href={activity.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white bg-opacity-40 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border-2 border-[#D32F2F] relative" // Changed the border color to a shade of red (#D32F2F)
          >
            <div className="relative">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            </div>
            <h3 className="text-[#7f2a2a] font-semibold text-xl">{activity.title}</h3>

            {/* Decorative flower outside the card (top-left) */}
            <div className="absolute top-0 left-0 transform -translate-x-3 -translate-y-3 text-yellow-400 text-2xl">
              <span role="img" aria-label="flower">🌸</span>
            </div>

            {/* Decorative flower outside the card (top-right) */}
            <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 text-yellow-400 text-2xl">
              <span role="img" aria-label="flower">🌸</span>
            </div>

            {/* Decorative flower outside the card (bottom-left) */}
            <div className="absolute bottom-0 left-0 transform translate-x-3 translate-y-3 text-yellow-400 text-2xl">
              <span role="img" aria-label="flower">🌸</span>
            </div>

            {/* Decorative flower outside the card (bottom-right) */}
            <div className="absolute bottom-0 right-0 transform -translate-x-3 translate-y-3 text-yellow-400 text-2xl">
              <span role="img" aria-label="flower">🌸</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Activities;
