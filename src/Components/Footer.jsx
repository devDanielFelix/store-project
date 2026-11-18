import Logo from './Logo';

const Footer = () => {
  return (
    <div className="bg-gray-700 text-white py-4 text-center fixed bottom-0 left-0 w-full">
      <p>&copy; 2026 My App. All rights reserved.</p>
      <Logo color="black" />
    </div>
  );
};

export default Footer;
