import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		color: inherit;
		outline-color: inherit;
		text-decoration-color: inherit;
		text-decoration: none;
		list-style: none;
		font-family: 'Ubuntu', sans-serif;
		line-height: 1.2;
		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;
	}

	body {
		width: 100%;
		height: 120vh;
		background-image: linear-gradient(#b8e1ee 30%, #00110c 30% 100%);
		background-color: #083734;
	}

	#root {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
`;
