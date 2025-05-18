import { FaStar } from 'react-icons/fa';

function Home() {
  return (
    <section className="relative max-w-3xl mx-auto mt-16 px-6 py-12 bg-gradient-to-b from-[#f5d0d0] to-[#f1a0a0] border-4 border-[#e76f6f] rounded-xl shadow-xl overflow-hidden text-center">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] bg-cover bg-center opacity-10 pointer-events-none"></div>

      {/* Decorative border corners */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-[#9b2d2d] rounded-tl-lg"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-[#9b2d2d] rounded-tr-lg"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-[#9b2d2d] rounded-bl-lg"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-[#9b2d2d] rounded-br-lg"></div>

      {/* Decorative top and bottom lines */}
      <div className="absolute top-6 left-10 right-10 h-0.5 bg-[#d14d4d] opacity-30"></div>
      <div className="absolute bottom-6 left-10 right-10 h-0.5 bg-[#d14d4d] opacity-30"></div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Image with star decoration */}
        <div className="relative">
          <img
            src="Me.jpg"
            alt="Home Image"
            className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-xl shadow-lg border-4 border-[#F5DEB3]"
          />
          <div className="absolute top-0 left-0 transform -translate-x-3 -translate-y-3">
            <FaStar className="text-yellow-400 text-4xl drop-shadow-md" />
          </div>
        </div>

        {/* Text Section */}
        <p className="relative text-[#7f2a2a] leading-relaxed border-2 border-[#b83232] p-6 rounded-md bg-[#f1a0a0] bg-opacity-80 shadow-inner max-w-2xl mx-auto mt-4 text-center overflow-hidden">
  {/* Decorative Star Icon */}
  <FaStar className="absolute top-2 left-2 text-[#e76f6f] text-xl drop-shadow-sm animate-pulse" />
  <FaStar className="absolute top-2 right-2 text-[#e76f6f] text-xl drop-shadow-sm animate-pulse" />
  <FaStar className="absolute bottom-2 left-2 text-[#e76f6f] text-xl drop-shadow-sm animate-pulse" />
  <FaStar className="absolute bottom-2 right-2 text-[#e76f6f] text-xl drop-shadow-sm animate-pulse" />

  {/* Text Content */}
  <span className="block text-2xl mb-2">WELCOME TO MY PORTFOLIO!</span>
  <span className="block text-sm">Hi! Hello! It's me Jade but you can call me Prences!</span>
</p>


      </div>
    </section>
  );
}

export default Home;
