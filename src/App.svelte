<script>
	import { Router, Route } from 'svelte-routing';
	import Landing from './components/pages/Landing.svelte';
</script>

<Router>
	<Route path="/" component="{Landing}" />
</Router>
