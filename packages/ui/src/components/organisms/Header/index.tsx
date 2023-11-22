import Logo from "../../atoms/Logo";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <header className="container mx-auto p-4 flex items-center justify-between">
      <div className="w-6">
        <Logo hasText={true} />
      </div>
    </header>
  );
};

export default Header;
