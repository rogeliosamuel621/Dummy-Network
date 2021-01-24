<script>
	import EyeOnIcon from '../../assets/img/eyeOn.svg';
	import EyeOffIcon from '../../assets/img/eyeOff.svg';

	export let label;
	export let forInput;
	export let currentValue;
	export let placeholder;

	let isHide = true;

	function handleChangeType() {
		isHide = !isHide;
		if (isHide) {
			document.getElementById(forInput).type = 'password';
		} else {
			document.getElementById(forInput).type = 'text';
		}
	}
</script>

<style>
	label {
		display: grid;
		grid-gap: 10px;
	}
	label div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	span {
		color: #eeeeee;
		font-size: 1.6rem;
	}
	input {
		transition: 0.25s;
		outline: none;
		border: 1px solid #3a3b3c;
		border-radius: 5px;
		background-color: #3a3b3c;
		color: white;
		height: 30px;
		padding-left: 10px;
		font-size: 1.6rem;
	}
	input:focus {
		transition: 0.25s;
		border: 1px solid #0779e4;
	}
	label div div p {
		font-size: 1.4rem;
		color: white;
		margin: 0;
		margin-right: 5px;
	}
</style>

<label for="{forInput}">
	<div>
		<span>{label}</span>
		<div on:click="{handleChangeType}">
			<p>{isHide ? 'Show' : 'Hide'}</p>
			<img src="{isHide ? EyeOnIcon : EyeOffIcon}" alt="Eye icon" />
		</div>
	</div>
	<input
		type="password"
		id="{forInput}"
		placeholder="{placeholder}"
		bind:value="{currentValue}"
	/>
</label>
