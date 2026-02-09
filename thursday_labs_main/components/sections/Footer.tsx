const Footer = () => {
  return (
    <footer className=" py-6 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-black/50 m3-body-small">
          © 2026 Thursday Labs. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-black/50 m3-body-small hover:text-black transition-colors"
          >
            Politique de Confidentialité
          </a>
          <span className="text-black/30">/</span>
          <a
            href="#"
            className="text-black/50 m3-body-small hover:text-black transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
