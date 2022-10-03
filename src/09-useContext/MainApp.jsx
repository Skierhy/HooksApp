import { Navigate, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import { Navbar1 } from './Navbar1';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';

export const MainApp = () => {
	return (
		<UserProvider>
			<Navbar1 />
			<Routes>
				{/* ruta principal */}
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/login" element={<LoginPage />} />
				{/*
                    Si no se encuentra la ruta, se muestra el componente
                */}
				{/* <Route path="/*" element={<h1>404 Not Found</h1>} /> */}
				{/*
                    Si no se encuentra la ruta, se redirecciona a la ruta principal
                    navigate es una función que se importa de react-router-dom
                    sirve para redireccionar a una ruta
                */}
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
		</UserProvider>
	);
};
