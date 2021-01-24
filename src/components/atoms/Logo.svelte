<script>
	import { Link } from 'svelte-routing';
	import LogoIcon from '../../assets/img/logo.svg';
	import isAuthenticated from '../../store/auth';

	const isAuth = false;

	isAuthenticated.subscribe((value) => (isAuth = value));
</script>

<style></style>

<div>
	<Link to={isAuth ? '/home' : '/'}>
		<img src={LogoIcon} alt="dummy social network icon" />
	</Link>
</div>
