import { Link } from "react-router-dom";
const Layout = ({ children }) => {

  return (
    <div className=" w-full bg-bg dark:bg-bg_dark ">
      <div className="navbar flex h-20 bg-bg_secondary dark:bg-bg_dark_secondary">
        <div className="text-secondary container flex items-center justify-end">
         hi 
        </div>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
