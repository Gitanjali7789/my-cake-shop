
const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-200 transform active:scale-95 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-rose-500 text-white hover:bg-rose-600 shadow-lg shadow-rose-200",
    secondary: "bg-white text-rose-500 border-2 border-rose-500 hover:bg-rose-50",
    outline: "border border-stone-300 text-stone-600 hover:border-rose-500 hover:text-rose-500"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
export default Button;