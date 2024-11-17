import np from '../../assets/np.png';

function Footer() {
  return (
    <div className="py-10 text-white bg-black">
      <div className="relative w-full h-64">
        <img src={np} alt="Nepal" className="object-cover w-full h-full opacity-60" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute bottom-0 pb-5 text-center transform -translate-x-1/2 left-1/2">
          <h2 className="text-3xl font-bold text-white">Explore Nepal with Us</h2>
          <p className="mt-2 text-lg">The adventure of a lifetime awaits you. Start your journey today!</p>
        </div>
      </div>
      <div className="container grid grid-cols-1 gap-10 mx-auto mt-10 text-center md:grid-cols-4">
        <div>
          <h3 className="text-xl font-semibold">About Us</h3>
          <p className="mt-2 text-sm">Learn more about our services and how we bring the best tours to you.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2">
            <li><a href="/about" className="text-sm hover:text-blue-400">About</a></li>
            <li><a href="/contact" className="text-sm hover:text-blue-400">Contact</a></li>
            <li><a href="/terms" className="text-sm hover:text-blue-400">Terms & Conditions</a></li>
            <li><a href="/privacy" className="text-sm hover:text-blue-400">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Social Media</h3>
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://facebook.com" className="text-sm hover:text-blue-400">Facebook</a>
            <a href="https://twitter.com" className="text-sm hover:text-blue-400">Twitter</a>
            <a href="https://instagram.com" className="text-sm hover:text-blue-400">Instagram</a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Newsletter</h3>
          <p className="mt-2 text-sm">Stay updated with the latest offers and news.</p>
          <input type="email" placeholder="Enter your email" className="p-2 mt-2 text-black rounded" />
          <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded">Subscribe</button>
        </div>
      </div>
      <div className="mt-10 text-center">
        <p className="text-sm">© 2024 Explore Nepal. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
