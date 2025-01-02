import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-30 backdrop-blur-sm shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image src="/assets/images/ecoside-logo.png" className="w-14 h-12" alt="Logo" width={100} height={100} />
            <div>
                <span className="text-white text-xl font-bold">EcoSide</span>
                <p className="text-xs text-white">Gerakan Peduli Lingkungan</p>
            </div>
          </Link>
          <div className="flex space-x-4">
            <Link href="/about">
              <span className="text-white hover:text-gray-300">About</span>
            </Link>
            <Link href="/features">
              <span className="text-white hover:text-gray-300">Features</span>
            </Link>
            <Link href="/contact">
              <span className="text-white hover:text-gray-300">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
