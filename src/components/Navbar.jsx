import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[60px] py-5 bg-white">

      {/* Logo */}
      <Link to="/">
        <img
          src="/images/brandbloom-logo.png"
          alt="BrandBloom"
          className="w-[165px]"
        />
      </Link>

      {/* Navigation */}
      <ul className="flex items-center gap-8 text-sm font-semibold text-brand-nav">
        <li>
          <Link to="/" className="hover:text-brand-green">
            Pouch Formats
          </Link>
        </li>

        <li>
          <Link to="/about" className="hover:text-brand-green">
            Industries Served
          </Link>
        </li>

        <li>
          <Link to="/services" className="hover:text-brand-green">
            Custom Options
          </Link>
        </li>

        <li>
          <Link to="/case-studies" className="hover:text-brand-green">
            Our Process
          </Link>
        </li>

        <li>
          <Link to="/faq" className="hover:text-brand-green">
            FAQ
          </Link>
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex items-center gap-2">
        <button className="rounded-lg bg-brand-lightgreen px-6 py-3.5 text-sm font-bold text-white">
          WhatsApp
        </button>

        <button className="rounded-lg bg-brand-gold px-6 py-3.5 text-sm font-bold text-white">
          Get Free Quote
        </button>
      </div>

    </nav>
  );
};

export default Navbar;