const Container = ({ children, className = "" }) => {
  return (
    <section className={`w-full h-full max-w-[1200px] mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default Container;
