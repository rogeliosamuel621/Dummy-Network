<script>
	import { Router, Route } from 'svelte-routing';
	import Landing from './components/pages/Landing.svelte';
	import Register from './components/pages/Register.svelte';
	import Login from './components/pages/Login.svelte';
</script>

<Router>
	<Route path="/" component="{Landing}" />
	<Route path="/register" component="{Register}" />
	<Route path="/login" component="{Login}" />
</Router>
