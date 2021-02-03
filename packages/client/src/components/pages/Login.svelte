<script>
	import Logo from '../atoms/Logo.svelte';
	import LoginForm from '../containers/LoginForm.svelte';
</script>

<style>
	header {
		display: flex;
		justify-content: center;
		margin-top: 10px;
		margin-bottom: 30px;
	}
</style>

<header>
	<Logo />
</header>
<LoginForm />
