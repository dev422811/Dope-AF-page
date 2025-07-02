const Footer = () => (
  <footer className="bg-white py-6 shadow-inner text-sm text-gray-500 mt-10 flex flex-col md:flex-row justify-between items-center px-6">
    {/* Left: Disclaimer */}
    <div className="text-black/90 mb-2 md:mb-0">
      *Orders are only received through Instagram DMs
    </div>

    {/* Right: Copyright */}
    <div className="text-right">
      © {new Date().getFullYear()} Dope AF — Handcrafted with ❤️
    </div>
  </footer>
);

export default Footer;
