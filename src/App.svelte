<script>
	let count = 0;

	function handleClick() {
		count++;
	}
</script>

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	button {
		border-radius: 5px;
		border: none;
		background-color: tomato;
		color: white;
	}
</style>

<div>
	<button on:click={handleClick}>times clicked {count}</button>
</div>
