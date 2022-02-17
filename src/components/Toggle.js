import { useContext } from 'react';
import { ThemeContext } from '../themeContext';

export const Toggle = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	function isDark() {
		return theme === 'dark';
	}

	function toggleTheme(e) {
		setTheme(e ? 'dark' : 'light');
	}

	return (
		<label>
			<button onClick={toggleTheme}>{isDark() ? 'Light' : 'Dark'}</button>
		</label>
	);
};
