import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brand-green px-[60px] py-12 text-white">
      <div className="grid grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold text-lg font-bold">
              B
            </div>

            <h2 className="text-lg font-extrabold text-white">
              Brandbloom Solutions
            </h2>
          </div>

          <p className="mt-4 max-w-[280px] text-sm leading-relaxed text-white/70">
            Custom printed packaging pouches for growing food and FMCG brands.
            Designed for shelf appeal, performance, and reliable protection.
          </p>
        </div>

        {/* Pouch Formats */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
            Pouch Formats
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>Stand-up Pouches</li>
            <li>Flat Bottom Pouches</li>
            <li>Side Gusset Bags</li>
            <li>Three Side Seal</li>
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
            Industries Served
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>Spices & Masala</li>
            <li>Specialty Coffee</li>
            <li>Dry Fruits & Seeds</li>
            <li>Snacks & Namkeen</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
            Studio & Lab
          </h3>

          <div className="mt-4 space-y-3 text-sm text-white/75">
            <p>
              Brandbloom Solutions
              <br />
              New Delhi, India
            </p>

            <a
              href="tel:+91114098XXXX"
              className="transition hover:text-white"
            >
              +91 11-4098-XXXX
            </a>

            <a
              href="mailto:hello@brandbloomsolutions.com"
              className="block transition hover:text-white"
            >
              hello@brandbloomsolutions.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
        <p className="text-xs text-white/60">
          © 2026 Brandbloom Solutions. All rights reserved.
        </p>

        <p className="text-xs text-white/60">
          Made with 💙 and lots of caffeine.
        </p>
      </div>
    </footer>
  );
};

export default Footer;