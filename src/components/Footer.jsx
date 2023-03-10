import Image from "next/image";
import Link from "next/link";
import pic from "../../public/images/logo.svg";
import faceBook from "../../public/images/icon-facebook.svg";
import instagram from "../../public/images/icon-instagram.svg";
import pinterest from "../../public/images/icon-pinterest.svg";
import twitter from "../../public/images/icon-twitter.svg";

const Footer = () => {
  return (
    <section className=" bg-Very_Dark_Violet flex flex-col p-16 md:py-10 items-center space-y-10 md:flex-row md:space-x-40 md:space-y-0 md:h-[38vh] justify-center">
      <div className="md:flex md:items-start h-full ">
        <Image
          alt="img"
          src={pic}
          width={100}
          height={100}
          className=" h-[2rem] w-[7rem]"
        ></Image>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-32  h-full ">
        <div className="flex flex-col space-y-4 text-xl items-center md:items-start mt-16 md:mt-0 ">
          <h3 className="text-white font-bold text-lg mb-3 ">Features</h3>
          <Link href="/" className="text-Gray">
            Link Shortening
          </Link>
          <Link href="/" className="text-Gray">
            Branded Links
          </Link>
          <Link href="/" className="text-Gray">
            Analytics
          </Link>
        </div>
        <div className="flex flex-col space-y-4 text-xl items-center md:items-start mt-16 md:mt-0 ">
          <h3 className="text-white font-bold text-lg mb-3">Resources</h3>
          <Link href="/" className="text-Gray">
            Blog
          </Link>
          <Link href="/" className="text-Gray">
            Developers
          </Link>
          <Link href="/" className="text-Gray">
            Support
          </Link>
        </div>
        <div className="flex flex-col space-y-4 text-xl items-center md:items-start mt-16 md:mt-0">
          <h3 className="text-white font-bold text-lg mb-3">Company</h3>
          <Link href="/" className="text-Gray">
            About
          </Link>
          <Link href="/" className="text-Gray">
            Our Team
          </Link>
          <Link href="/" className="text-Gray">
            Careers
          </Link>
          <Link href="/" className="text-Gray">
            Contact
          </Link>
        </div>
      </div>
      <div className="flex flex-row space-x-6 md:h-full ">
        <Image
          alt="img"
          src={faceBook}
          width={100}
          height={100}
          className=" h-[2rem] w-[2rem]"
        ></Image>
        <Image
          alt="img"
          src={twitter}
          width={100}
          height={100}
          className=" h-[2rem] w-[2rem]"
        ></Image>
        <Image
          alt="img"
          src={pinterest}
          width={100}
          height={100}
          className=" h-[2rem] w-[2rem]"
        ></Image>
        <Image
          alt="img"
          src={instagram}
          width={100}
          height={100}
          className=" h-[2rem] w-[2rem]"
        ></Image>
      </div>
    </section>
  );
};

export default Footer;
