const Button = ({ children, className, onClick }) => {
  // For combining base styling, with prop stylings:

  //  const baseClass = "btn btn-primary mt-2 w-full text-white";
  // const combinedClass = `${baseClass} ${className || ""}`.trim();

  //  return (
  //   <button onClick={onClick} className={combinedClass}>
  //     {children}
  //   </button>
  // );
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
