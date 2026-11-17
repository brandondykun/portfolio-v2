const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="container-page py-8 font-mono text-[11px] text-subtle">
        © {new Date().getFullYear()} Brandon Dykun
      </div>
    </footer>
  );
};

export default Footer;
