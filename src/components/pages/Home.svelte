<script>
	import isAuthenticated from '../../store/auth';
	let isAuth = false;

	isAuthenticated.subscribe((value) => (isAuth = value));
	console.log(isAuth);
</script>

<h1>Home</h1>
