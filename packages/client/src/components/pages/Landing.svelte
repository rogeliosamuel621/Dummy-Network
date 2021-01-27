<script>
	import Logo from '../atoms/Logo.svelte';
	import { link } from 'svelte-routing';
</script>

<style>
	header {
		margin: 10px;
	}
	main {
		margin: 0 10px;
	}
	.Landing-main-text h1 {
		font-size: 2.4rem;
		font-weight: bold;
		color: #ffffff;
	}
	.Landing-main-options h2 {
		font-size: 1.8rem;
		color: white;
	}
	.Landing-main-options div {
		display: grid;
		grid-gap: 15px;
	}
	.Landing-main-options div a {
		border-radius: 5px;
		font-size: 1.4rem;
		text-decoration: none;
		color: white;
		text-align: center;
		padding: 10px 0;
	}
	.register {
		background-color: #0779e4;
	}
	.login {
		border: 1px solid #0779e4;
	}
</style>

<header>
	<Logo />
</header>
<main>
	<div class="Landing-main-text">
		<h1>A dummy social network made by rogeliosamuel621 for practice</h1>
	</div>
	<div class="Landing-main-options">
		<h2>Join now</h2>
		<div>
			<a class="register" href="/register" use:link>Register</a>
			<a class="login" href="/login" use:link>Login</a>
		</div>
	</div>
</main>
