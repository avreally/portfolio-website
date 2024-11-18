import "./styles.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="headline">get in touch:</div>
			<div className="nav-links">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/valeriashadrina/?locale=en_US"
				>
					[ linkedin ]
				</a>
				<a href="mailto:valeriia.shadrina@hyperisland.se">[ email ]</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/avreally"
				>
					[ github ]
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
