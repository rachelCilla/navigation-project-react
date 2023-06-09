import className from "classnames";

export default function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = className(
    rest.className,
    " flex items-center px-3 py-1.5 border",
    {
      "border-blue-500 bg-blue-500 ": primary,
      "border-gray-900 bg-gray-900 ": secondary,
      "border-green-500 bg-green-500 ": success,
      "border-red-500 bg-red-500 ": danger,
      "border-yellow-400 bg-yellow-400 ": warning,
      "text-whate": !outline,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-black ": outline && primary,
      "text-gray-900 ": outline && secondary,
      "text-green-500 ": outline && success,
      "text-red-500 ": outline && danger,
      "text-yellow-400 ": outline && warning,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      throw new Error("Only one variation can be used at a time");
    }
  },
};
