<script>
	import { Router, Route } from 'svelte-routing';
	import Main from './components/pages/Main.svelte';
</script>

<Router>
	<Route path="/" component={Main} />
</Router>
