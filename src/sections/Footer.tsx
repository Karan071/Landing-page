import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

const year = new Date();

const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:contents-[''] before-top-2 before:bottom-0 before:h-full before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F081,#2FD8FE)] before:absolute">
          <Image src={logo} height={40} alt="Logo" className="relative" />
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center md:text-lg">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center items-center gap-6 mt-6 ">
          <SocialInsta />
          <SocialLinkIn />
          <SocialPin />
          <SocialX />
          <SocialYoutube />
        </div>
        <p className="mt-6">&copy; {year.getFullYear()} Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;