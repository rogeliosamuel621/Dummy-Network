<script>
	import isAuthenticated from '../../store/auth';
	let isAuth = false;

	isAuthenticated.subscribe((value) => (isAuth = value));

	$: {
		if (!isAuth) {
			window.location.href = '/login';
		}
	}
</script>

<h1>Home</h1>
