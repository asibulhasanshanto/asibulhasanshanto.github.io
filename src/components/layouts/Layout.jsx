const Layout = ({ children }) => {
  return (
    <div className="dark:text-text_primary_dark text-text_primary w-full bg-bg dark:bg-bg_dark">
      <div className="no-scrollbar h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        {children}
      </div>
    </div>
  );
};

export default Layout;
