const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div>
          <span className="text-xl font-bold">Revuest</span>
          <p className="text-sm mt-2 opacity-70 max-w-xs">
            Review automation for UK service businesses. Get the reviews you've earned.
          </p>
        </div>

        <div className="flex gap-12">
          <div>
            <h4 className="font-semibold text-sm mb-3">Product</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#how-it-works" className="hover:opacity-100 transition-opacity">How It Works</a></li>
              <li><a href="#features" className="hover:opacity-100 transition-opacity">Features</a></li>
              <li><a href="#pricing" className="hover:opacity-100 transition-opacity">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Support</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#faq" className="hover:opacity-100 transition-opacity">FAQ</a></li>
              <li><a href="mailto:hello@revuest.co.uk" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/20 mt-8 pt-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} Revuest. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
