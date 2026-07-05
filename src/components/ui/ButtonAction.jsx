const ButtonAction = ({ children, clickListener, href, target, rel }) => {
  const classes =
    "block rounded-md border border-primary bg-bg px-3 py-2 font-bold text-primary transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 dark:bg-bg_dark";
  return (
    <div className="rounded-md bg-primary">
      {href ? (
        <a href={href} target={target} rel={rel} className={classes}>
          {children}
        </a>
      ) : (
        <button onClick={clickListener} className={classes}>
          {children}
        </button>
      )}
    </div>
  );
};

export default ButtonAction;
