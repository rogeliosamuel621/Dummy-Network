<script>
	import { link, navigate } from 'svelte-routing';
	import Input from '../molecules/Input.svelte';
	import InputPass from '../molecules/InputPass.svelte';
	import isAuthenticated from '../../store/auth';

	let email = '';
	let password = '';

	function login(e) {
		e.preventDefault();

		if (password.length < 6) {
			alert('Password must have at least 6 characters');
			return;
		}
		isAuthenticated.set(true);
		navigate('/home');
	}
</script>

<style>
	main {
		background: #242526;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
		border-radius: 5px;
		padding: 10px;
		margin: 10px;
	}
	main h1 {
		color: white;
		text-align: center;
		font-size: 2.4rem;
		font-weight: bold;
	}
	form {
		display: grid;
		grid-gap: 14px;
	}
	form div {
		display: flex;
		justify-content: center;
		margin-top: 6px;
	}
	form div input[type='submit'] {
		color: white;
		background: #0779e4;
		border-radius: 5px;
		border: none;
		padding: 10px;
		width: 100px;
	}
	footer {
		margin-top: 6px;
	}
	footer p {
		text-align: center;
		font-size: 1.6rem;
		color: white;
		margin: 0;
	}
	footer p a {
		text-decoration: none;
		color: #0779e4;
	}
</style>

<main>
	<h1>Login</h1>
	<form on:submit="{login}">
		<Input
			setCurrentValue="{(value) => (email = value)}"
			currentValue="{email}"
			forInput="email"
			label="Email"
			typeInput="email"
		/>
		<InputPass
			setCurrentValue="{(value) => (password = value)}"
			currentValue="{password}"
			forInput="password"
			label="Password"
		/>
		<div>
			<input type="submit" value="Login" />
		</div>
		<footer>
			<p>
				Don't you have an account? <a href="/register" use:link>Register</a>
			</p>
		</footer>
	</form>
</main>
