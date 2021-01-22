import App from './App.svelte'; // importamos el componente App

// Creamos una app que extiende del App compoenente que creamos con la lógica de nuestra aplicación.
const app = new App({
	target: document.querySelector('div'), // punto de entrada
	props: {
		name: 'Svelte',
	}, // props de la aplicación
});

// Exportamos por defecto app.
export default app;
