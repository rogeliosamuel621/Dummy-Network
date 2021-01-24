<script>
	export let label;
	export let forInput;
	export let typeInput = 'text';
	export let currentValue;

	function handleTypeInput(e) {
		e.target.type = typeInput;
	}
</script>

<style></style>

<label for="{forInput}">
	<span>{label}</span>
	<input
		id="{forInput}"
		bind:value="{currentValue}"
		on:input="{handleTypeInput}"
	/>
</label>
