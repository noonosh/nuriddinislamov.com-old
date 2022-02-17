import { ThemeProvider } from './themeContext';

const Layout = ({ children }) => {
	return (
		<ThemeProvider>
			<main>{children}</main>
		</ThemeProvider>
	);
};

export default Layout;
