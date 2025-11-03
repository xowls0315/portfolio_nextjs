const Header = () => {
  return (
    <header
      id="site-header"
      className={`w-full sticky top-0 z-100 shadow-sm py-8 transition-colors duration-300`}
      style={{ backgroundColor: "#000000" }}
    >
      <nav
        className={
          "px-4 w-full max-w-[1200px] mx-auto flex justify-between items-center"
        }
      >
        <div
          className={
            "text-3xl font-bold text-[#6E9121] hover:text-[#ccf576] transition-all duration-300 cursor-pointer"
          }
        >
          <h2>TaeJin's Portfolio</h2>
        </div>
        <div className={"text-2xl text-[#6E9121] flex gap-[30px]"}>
          <a
            href="#aboutme"
            className={"hover:text-[#ccf576] transition-all duration-300"}
          >
            About me
          </a>
          <a
            href="#projects"
            className={"hover:text-[#ccf576] transition-all duration-300"}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={"hover:text-[#ccf576] transition-all duration-300"}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
