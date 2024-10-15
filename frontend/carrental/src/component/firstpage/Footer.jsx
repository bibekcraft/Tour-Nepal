import img from '../../assets/hm.png';

const Footer = () => {
  return (
    <footer className="relative py-16 text-white bg-black bg-opacity-90">
      {/* Blackish overlay with a sleek gradient for a cool look */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-900 to-orange-800 bg-opacity-60"
        style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'top center' }}
      ></div>

      {/* Footer content */}
      <div className="container relative z-10 grid grid-cols-1 gap-16 mx-auto md:grid-cols-3">
        {/* Footer Brand */}
        <div className="footer-brand">
          <a href="#" className="logo">
            <img src="./assets/images/logo.svg" alt="Tourly logo" className="mb-6 h-14" />
          </a>
          <p className="text-blue-200 footer-text">
            Project made with passion to enhance tourism in Nepal. Discover the untouched beauty of Nepal.
          </p>
        </div>

        {/* Footer Contact */}
        <div className="footer-contact">
          <h4 className="mb-5 text-xl font-semibold text-orange-200 contact-title">Contact Us</h4>
          <p className="mb-6 text-blue-300 contact-text">We're always here to help you. Feel free to contact us!</p>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 contact-item">
              <ion-icon name="call-outline" className="text-orange-400"></ion-icon>
              <a href="tel:+01123456790" className="text-blue-100 contact-link hover:text-orange-400">
                +01 (123) 4567 90
              </a>
            </li>
            <li className="flex items-center space-x-3 contact-item">
              <ion-icon name="mail-outline" className="text-orange-400"></ion-icon>
              <a href="mailto:info.tourly.com" className="text-blue-100 contact-link hover:text-orange-400">
                imbibek@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-3 contact-item">
              <ion-icon name="location-outline" className="text-orange-400"></ion-icon>
              <address className="text-blue-100">Dillibazar, Kathmandu, Nepal</address>
            </li>
          </ul>
        </div>

        {/* Footer Form */}
        <div className="footer-form">
          <p className="mb-5 text-blue-200 form-text">For Business Inquiries and Feedback</p>
          <form action="" className="flex space-x-4 form-wrapper">
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 text-black rounded-lg input-field focus:outline-none"
              placeholder="Enter Your Email"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 text-white bg-orange-600 rounded-lg btn btn-secondary hover:bg-orange-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 py-6 bg-blue-900 bg-opacity-80 footer-bottom">
        <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
          <p className="text-blue-200 copyright">
            &copy; 2024 <a href="#" className="text-orange-300 hover:underline">Bibekpandey</a>. All rights reserved.
          </p>
          <ul className="flex mt-4 space-x-6 footer-bottom-list md:mt-0">
            <li>
              <a href="#" className="text-orange-300 footer-bottom-link hover:text-orange-400">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="text-orange-300 footer-bottom-link hover:text-orange-400">Terms & Conditions</a>
            </li>
            <li>
              <a href="#" className="text-orange-300 footer-bottom-link hover:text-orange-400">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
