<script>
	export let label;
	export let forInput;
	export let typeInput = 'text';
	export let currentValue;
	export let placeholder;

	function handleTypeInput(e) {
		e.target.type = typeInput;
	}
</script>

<style>
	label {
		display: grid;
		grid-gap: 10px;
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
</style>

<label for="{forInput}">
	<span>{label}</span>
	<input
		id="{forInput}"
		placeholder="{placeholder}"
		bind:value="{currentValue}"
		on:input="{handleTypeInput}"
	/>
</label>
