import Link from "next/link";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import LinkedinIcon from "../../assets/icons/LinkedinIcon";
import LocationIcon from "../../assets/icons/LocationIcon";
import MessageIcon from "../../assets/icons/MessageIcon";
import Illustration from "../../assets/images/footer/Illustration";
import Logo from "../../assets/images/footer/Logo";

export default function Footer() {
  return (
    <div className="container mx-auto px-4">
      <footer className="bg-beige rounded-3xl flex flex-col font-secondary lg:text-2xl text-base font-normal text-black lg:py-16 p-12 lg:px-14 gap-20 justify-between ">
        <div className="flex flex-row gap-8 mx-auto">
          <Logo />
          <Illustration />
        </div>
        <div className="flex lg:flex-row flex-col gap-10 lg:gap-0 lg:justify-between">
          <ul className="font-medium list-none flex flex-col gap-4">
            <li className="flex flex-row gap-2">
              <span>
                <LocationIcon />
              </span>
              <p>Kaldhara, Kathmandu</p>
            </li>
            <li className="flex flex-row gap-2">
              <span>
                <MessageIcon />
              </span>
              <a href="mailto:hello@luminr.co">hello@luminr.co</a>
            </li>
          </ul>
          <div className="font-normal flex lg:flex-row flex-col lg:gap-16 gap-4">
            <ul className="list-none flex flex-col gap-4">
              <li><Link href="/website-development">Web Development</Link></li>
              <li><Link href="/seo">SEO for Shopify Stores</Link></li>
              <li><a href="/#benefits">Benefits</a></li>
              <li><a href="/#work">Work</a></li>
            </ul>
            <ul className="list-none flex flex-col gap-4">
              <li><a href="/#testimonials">Testimonials</a></li>
              <li><a href="/#pricing">Packages</a></li>
              <li><a href="/#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 justify-end lg:items-end items-start">
            <div className="flex flex-row gap-2">
              <a href="https://www.instagram.com/luminr.co/?hl=en">
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/luminr.co">
                <FacebookIcon />
              </a>
              <a href="https://www.linkedin.com/company/luminr-co/">
                <LinkedinIcon />
              </a>
            </div>
            <p>© 2024 - luminr</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
