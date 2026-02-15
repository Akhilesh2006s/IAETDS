const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <img 
            src="/IAEDTS.jpg" 
            alt="IAETDS Logo" 
            className="h-12 w-auto object-contain mb-2"
          />
          <p className="font-sans text-xs text-muted-foreground mt-1 tracking-wide">
            Indian Association for Educational Technology & Digital Systems
          </p>
        </div>
        <p className="font-sans text-xs text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} IAETDS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
