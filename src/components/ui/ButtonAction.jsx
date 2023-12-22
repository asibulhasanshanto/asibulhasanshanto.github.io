const ButtonAction = ({ children, clickListener }) => {
  return (
    <div className="rounded-md bg-primary">
      <button className="rounded-md border  border-primary bg-bg px-3 py-2 font-bold text-primary transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 dark:bg-bg_dark ">
        {children}
      </button>
    </div>
  );
};

export default ButtonAction;
