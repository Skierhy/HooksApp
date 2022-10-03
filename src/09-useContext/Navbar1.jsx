import { Link, NavLink } from 'react-router-dom';

export const Navbar1 = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-light rounded-4">
			<div className="container-fluid">
				<Link className="navbar-brand" href="#">
					useContext
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<NavLink
							className={({ isActive }) =>
								`nav-link ${isActive ? 'active' : ''}`
							}
							to="/"
							end>
							Home
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								`nav-link ${isActive ? 'active' : ''}`
							}
							to="/about">
							About
						</NavLink>

						<NavLink
							className={({ isActive }) =>
								`nav-link ${isActive ? 'active' : ''}`
							}
							to="/login">
							Login
						</NavLink>
					</ul>
				</div>
			</div>
		</nav>
	);
};
