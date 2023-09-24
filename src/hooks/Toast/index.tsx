import Toast, { ToastProps } from 'react-native-toast-message'

interface Pessoa {
    nome: string;
    sobrenome: string;
}
export class MinhaClasse {
	metodoA(nome: string, sobrenome: string): void; // Sobrecarga para a chamada metodoA(nome, sobrenome)
	metodoA(pessoa: Pessoa): void; // Sobrecarga para a chamada metodoA({ nome, sobrenome })

	// Implementação do método
	metodoA(arg1: string | Pessoa, arg2?: string): void {
		if (typeof arg1 === 'string' && arg2 !== undefined) {
			// Chamada metodoA(nome, sobrenome)
			const nome = arg1
			const sobrenome = arg2
		} else if (typeof arg1 === 'object') {
			// Chamada metodoA({ nome, sobrenome })
			const { nome, sobrenome } = arg1
		} else {
			throw new Error('Chamada inválida para o método metodoA.')
		}
	}
}

interface IProps extends ToastProps {
    type: 'success' | 'error' | 'info' | 'any';
    text1: string;
    text2: string;
}

const useToast = () => {
    function showToast(params: IProps): void;
function showToast(type: 'success' | 'error' | 'info' | 'any', text1: string, text2: string): void;

function showToast(arg1: IProps | ('success' | 'error' | 'info' | 'any'), arg2?: string, arg3?: string): void {

	let type: 'success' | 'error' | 'info' | 'any' = 'success'
	let text1: string  = ''
	let text2: string = ''
	let params: IProps = {
		type: 'success',
		text1: '',
		text2: '',
		visibilityTime: 3000,
		autoHide: true,
		topOffset: 30,
		bottomOffset: 40,
		onShow: () => {},
		onHide: () => {}, 
		onPress: () => {}
	}

	if (typeof arg1 === 'object') {
		// Chamada showToast({ type, text1, text2 })
		params = arg1
	} else if (typeof arg1 === 'string' && arg2 !== undefined && arg3 !== undefined) {
		// Chamada showToast(type, text1, text2)
		type = arg1
		text1 = arg2
		text2 = arg3
	} else {
		throw new Error('Chamada inválida para a função showToast.')
	}
	Toast.show({
		type: type,
		text1: text1,
		text2: text2,
		visibilityTime: 3000,
		autoHide: true,
		topOffset: 30,
		bottomOffset: 40,
		onShow: () => {},
		onHide: () => {}, 
		onPress: () => {}
	})
}
    
return {
	showToast
}
}

export { useToast }