import Link from "next/link";
const Footer = () => {
    // bg-gray-900

    const marginLeft = "ml-16"

    return (
      <footer className="bg-foreground text-white sm:px-8 px-0 sm:py-16 py-12">
        <div className="max-w-7xl sm:mx-auto ml-[-20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Branding */}
          <div className={marginLeft}>
            <h2 className="text-primary-foreground text-3xl mb-3 font-serif">ShadowU</h2>
            <p className="text-gray-300 w-45 ">
              Live your future before you choose it.
            </p>
          </div>
  
          {/* Platform */}
          <div className={marginLeft}>
            <h3 className="font-semibold text-lg mb-2">Platform</h3>
        <ul className="space-y-2 text-gray-300">
              <li><Link href="/about-us" className="hover:text-white">About Us</Link></li>
              <li><Link href="/campus-hosts" className="hover:text-white">Find a Campus Host</Link></li>
              {/* <li><a href="/resources/refer-a-friend" className="hover:text-white">Refer a Friend</a></li> */}
              <li><Link href="/resources/become-a-host" className="hover:text-white">Become a Campus Host</Link></li>
            </ul>
          </div>
  
          {/* Support */}
          <div className={marginLeft}>
            <h3 className="font-semibold text-lg mb-2">Support</h3>
            <ul className="space-y-2 text-gray-300">
            <li><Link href="/resources/contact-us" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/resources/safety" className="hover:text-white">Saftey & Standards of Service</Link></li>
              
            </ul>
          </div>
  
          {/* Resources */}
          <div className={marginLeft}>
            <h3 className="font-semibold text-lg mb-2">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/resources/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/resources/faq" className="hover:text-white">Frequently Asked Questions</Link></li>
              
            </ul>
          </div>
  
          {/* Connect
          <div className={marginLeft}>
            <h3 className="font-semibold text-lg mb-2">Connect</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">TikTok</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            </ul>
          </div> */}
        </div>
  
        <hr className="border-gray-700 my-10" />
        <p className="text-center text-gray-500 text-sm">
          © 2025 ShadowU. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  