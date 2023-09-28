import { DefaultTheme } from 'styled-components/native'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            background: string;
            text: string;
        };
        fonts: {
            regular: string;
            bold: string;
            light?: string;
        };

    }
}



export const theme: DefaultTheme = {
	colors: {
		primary: '#007bff',
		secondary: '#6c757d',
		background: '#f8f9fa',
		text: '#333',
	},
	fonts: {
		regular: 'Roboto-Regular',
		bold: 'Roboto-Bold',
		light: 'Roboto-Light',
	},
}