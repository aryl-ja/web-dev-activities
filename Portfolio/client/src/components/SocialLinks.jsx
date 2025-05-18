import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaGoogle,
} from "react-icons/fa6"; // Use Fa6 for latest icons

function SocialLinks() {
  return (
    <section className="relative max-w-3xl mx-auto mt-16 px-6 py-12 bg-gradient-to-b from-[#f5d0d0] to-[#f1a0a0] border-4 border-[#e76f6f] rounded-xl shadow-xl overflow-hidden text-center">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] bg-cover bg-center opacity-10 pointer-events-none"></div>

      {/* Decorative lines */}
      <div className="absolute top-6 left-10 right-10 h-0.5 bg-[#d14d4d] opacity-30"></div>
      <div className="absolute bottom-6 left-10 right-10 h-0.5 bg-[#d14d4d] opacity-30"></div>

      <h2 className="relative z-10 text-3xl font-semibold text-[#9b2d2d] mb-6">Connect with Me</h2>

      <div className="relative z-10 flex flex-wrap justify-center gap-5">
        {/* Social icons list */}
        {[
          {
            icon: <FaGithub />,
            link: "https://github.com/aryl-ja",
            label: "GitHub",
          },
          {
            icon: <FaLinkedin />,
            link: "https://ph.linkedin.com/in/jade-cyrille-timbreza-757917365",
            label: "LinkedIn",
          },
          {
            icon: <FaFacebook />,
            link: "https://www.facebook.com/jc.timbreza.27/",
            label: "Facebook",
          },
          {
            icon: <FaGoogle />,
            link: "azerbmitjadecyrille@gmail.com",
            label: "Email",
          },
         
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="text-[#9b2d2d] bg-[#F5DEB3] p-4 rounded-full text-2xl border-2 border-[#9b2d2d] hover:bg-[#9b2d2d] hover:text-[#F5DEB3] transition duration-300 shadow-md"
            title={item.label}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </section>
  );
}

export default SocialLinks;
