<template lang="html">
	<button type="button" @click="count += 1" name="button" >you clicked me {{count}} times</button>
</template>

<script>
export default {
	name: 'button',
	data () {
		return {
			count : 0
		}
	}
}
</script>

<style lang="css">
	button{
		color: white;
		background: red;
		padding: 10px;
	}
</style>
