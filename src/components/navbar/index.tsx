import "./styles.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="headline">get in touch:</div>
			<div className="nav-links">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/valeriashadrina/"
				>
					[ linkedin ]
				</a>
				<a href="mailto:waleria.shadrina@icloud.com">[ email ]</a>
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
