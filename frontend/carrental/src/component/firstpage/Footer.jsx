
const Footer = () => {
    return (
      <footer className="py-10 text-white bg-green-900">
        <div className="container grid grid-cols-1 gap-10 mx-auto md:grid-cols-3">
          {/* Footer Brand */}
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="./assets/images/logo.svg" alt="Tourly logo" className="h-12 mb-4" />
            </a>
            <p className="text-green-200 footer-text">
            Project made with love to increase the tourism in Nepal.Who are exploring the beauty of Nepal.
            </p>
          </div>
          {/* Footer Contact */}
          <div className="footer-contact">
            <h4 className="mb-3 text-lg font-semibold contact-title">Contact Us</h4>
            <p className="mb-4 text-green-200 contact-text">Feel free to contact and reach us!!</p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 contact-item">
                <ion-icon name="call-outline" className="text-green-300"></ion-icon>
                <a href="tel:+01123456790" className="text-green-100 contact-link hover:text-green-400">
                  +01 (123) 4567 90
                </a>
              </li>
              <li className="flex items-center space-x-2 text-center contact-item">
                <ion-icon name="mail-outline" className="text-green-300"></ion-icon>
                <a href="mailto:info.tourly.com" className="text-green-100 contact-link hover:text-green-400">
                    imbibek@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2 contact-item">
                <ion-icon name="location-outline" className="text-green-300"></ion-icon>
                <address className="text-green-100">Dillibazar,kathmandu,Nepal</address>
              </li>
            </ul>
          </div>
          {/* Footer Form */}
          <div className="footer-form">
            <p className="mb-3 text-green-200 form-text">
                For Business Inquiries and Feedback
            </p>
            <form action="" className="flex space-x-2 form-wrapper">
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 text-black rounded-lg input-field focus:outline-none"
                placeholder="Enter Your Email"
                required
              />
              <button type="submit" className="px-6 py-2 text-white bg-green-700 rounded-lg btn btn-secondary hover:bg-green-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="py-4 bg-green-800 footer-bottom">
          <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
            <p className="text-green-100 copyright">
              &copy; 2024 <a href="#" className="text-green-300 hover:underline">Bibekpandey</a>. All rights reserved.
            </p>
            <ul className="flex mt-4 space-x-4 footer-bottom-list md:mt-0">
              <li>
                <a href="#" className="text-green-300 footer-bottom-link hover:text-green-400">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-green-300 footer-bottom-link hover:text-green-400">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-green-300 footer-bottom-link hover:text-green-400">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
    export default Footer;