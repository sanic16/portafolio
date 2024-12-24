import { useThemeContext } from "@/context/theme/ThemeContextProvider";

const PrimaryButton = ({ className }: { className: string }) => {
  return <button className={className} />;
};

export default PrimaryButton;
