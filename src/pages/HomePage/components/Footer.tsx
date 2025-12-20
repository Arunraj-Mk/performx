import footerImage from "@/assets/images/Footer.png";
import performImage from "@/assets/images/perform.png";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";


const Footer = () => {
  return (
    <section className="relative bg-[#154033] min-h-screen flex flex-col px-8 lg:px-20 py-16 text-white font-sans overflow-hidden height-[864px]">
      {/* Main content flex container */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-0 max-w-7xl mx-auto w-full">
        {/* Left text and button */}
        <div>
          <h1 className="text-[74px] font-bold leading-tight mb-4">
            Your growth is <br />
            just one call <br />
            away!
          </h1>
          <button 
            className="flex justify-center items-center border-[1.5px] border-[#8AF135] bg-[#8AF135] text-black font-semibold text-base hover:opacity-90 transition"
            style={{ padding: '13.45px 21.57px 11.65px 21.5px' }}
          >
            Book a demo
          </button>
        </div>

        {/* Right isometric image */}
        <div className="lg:w-1/2 relative flex justify-end ">
          <img
            src={footerImage}
            alt="Footer illustration"
            className="max-w-[424px] w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Navigation and bottom area */}
      <div className="max-w-7xl mx-auto w-full mt-16 border-b-[2px] border-white/80  pb-6 flex flex-col lg:flex-row justify-center items-center text-white text-sm font-normal tracking-wide">
        <nav 
          className="flex gap-8  lg:gap-10 text-white text-[20px] font-normal not-italic leading-normal"
          style={{ fontFamily: 'Epilogue, sans-serif', letterSpacing: '0.4px' }}
        >
          <a href="#" className="hover:text-[#82D83A] transition">
            Home
          </a>
          <a href="#" className="hover:text-[#82D83A] transition">
            About
          </a>
          <a href="#" className="hover:text-[#82D83A] transition">
            Project
          </a>
          <a href="#" className="hover:text-[#82D83A] transition">
            why us
          </a>
          <a href="#" className="hover:text-[#82D83A] transition">
            services
          </a>
          <a href="#" className="hover:text-[#82D83A] transition">
            Contact
          </a>
        </nav>
      </div>

      {/* Social icons container white bg - below border, right aligned */}
      <div className="max-w-7xl mx-auto w-full flex justify-end mt-6">
        <div className="flex bg-white text-[#154033] drop-shadow-[0_0_1px_rgba(0,0,0,0.15)] rounded-sm px-4 py-1 gap-6 items-center cursor-pointer shrink-0">
          <a aria-label="YouTube" href="#" className="hover:text-[#82D83A]">
            <Youtube size={18} />
          </a>
          <a aria-label="Twitter" href="#" className="hover:text-[#82D83A]">
            <Twitter size={18} />
          </a>
          <a aria-label="LinkedIn" href="#" className="hover:text-[#82D83A]">
            <Linkedin size={18} />
          </a>
          <a aria-label="Facebook" href="#" className="hover:text-[#82D83A]">
            <Facebook size={18} />
          </a>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="max-w-7xl mx-auto w-full mt-6 text-[14px]  font-bold tracking-wide">
        © 2025 PERFORM100X. ALL RIGHTS RESERVED.
      </div>

      {/* Large faint image behind bottom */}
      <img
        src={performImage}
        alt="Perform100x"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-40 w-full max-w-[1460px] h-auto object-contain "
        aria-hidden="true"
      />
    </section>
  );
};

export default Footer;


