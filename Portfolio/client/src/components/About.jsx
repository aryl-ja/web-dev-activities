import { FaStar } from 'react-icons/fa';

function About() {
  return (
    <section className="relative max-w-3xl mx-auto mt-24 px-6 py-12 bg-gradient-to-b from-[#f5d0d0] to-[#f1a0a0] border-4 border-[#e76f6f] rounded-xl shadow-xl overflow-hidden text-center">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] bg-cover bg-center opacity-10 pointer-events-none"></div>

      {/* Decorative lines */}
      <div className="absolute top-6 left-10 right-10 h-0.5 bg-[#d14d4d] opacity-30"></div>
      <div className="absolute bottom-6 left-10 right-10 h-0.5 bg-[#d14d4d] opacity-30"></div>

      {/* Title */}
      <h2 className="relative z-10 text-3xl font-semibold text-[#9b2d2d] mb-6">GET TO KNOW ME!</h2>

      {/* Centered Content */}
      <div className="relative z-10 flex justify-center">
        <ul className="text-[#7f2a2a] text-base leading-relaxed border-2 border-[#f5a3a3] p-6 rounded-md bg-[#f1a0a0] bg-opacity-90 shadow-inner list-none max-w-md w-full text-left">
          <li className="flex items-start gap-2">
            <FaStar className="text-[#e76f6f] mt-1" />
            I’m Jade Cyrille Timbreza(jaydi, jadeh, jedang) from Kimmalaba Dolores Abra, a student at the University of Abra, 
            currently pursuing a degree in Information Technology with a major in Web Development. I’m passionate about creating clean, responsive, and user-friendly websites. I’m currently learning full-stack development and building projects using Vite React,
             and I’m always eager to explore more technologies and frameworks that can help me grow as a developer. I
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
