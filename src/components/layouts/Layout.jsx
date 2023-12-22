const Layout = ({ children }) => {
  return (
    <div className=" dark:text-text_primary_dark text-text_primary min-h-screen w-full bg-bg  dark:bg-bg_dark ">
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
