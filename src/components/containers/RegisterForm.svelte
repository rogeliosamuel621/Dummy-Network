<script>
	import { link } from 'svelte-routing';
	import Input from '../molecules/Input.svelte';
	import InputPass from '../molecules/InputPass.svelte';
	let username = '';
	let email = '';
	let password = '';
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
	<h1>Register</h1>
	<form action="">
		<Input
			currentValue="{username}"
			forInput="username"
			label="Username"
			typeInput="text"
		/>
		<Input
			currentValue="{email}"
			forInput="email"
			label="Email"
			typeInput="email"
		/>
		<InputPass currentValue="{password}" forInput="password" label="Password" />
		<div>
			<input type="submit" value="Register" />
		</div>
		<footer>
			<p>Already have an account? <a href="/login" use:link>Login</a></p>
		</footer>
	</form>
</main>
