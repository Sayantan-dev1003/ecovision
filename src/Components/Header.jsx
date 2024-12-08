const Header = () => {
    return (
        <header className="bg-gradient-to-r from-green-400 to-blue-500 px-6 py-3 montserrat shadow-lg">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="logo">
                    <h1 className="text-white text-3xl font-bold">EcoVision</h1>
                </div>
                <ul className="nav-links flex space-x-6">
                    <li>
                        <a href="#" className="text-white hover:text-yellow-300 transition duration-300">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-yellow-300 transition duration-300">About</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-yellow-300 transition duration-300">Features</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-yellow-300 transition duration-300">Contact</a>
                    </li>
                </ul>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                    Login
                </button>
            </nav>
        </header>
    );
};

export default Header;