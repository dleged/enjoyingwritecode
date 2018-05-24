<template>
	<div class="">
		<h1>{{ title }}</h1>
		<ul>
			<li v-for = "(item,i) in map">
				{{ item }} {{ i }}
			</li>
		</ul>
	</div>

</template>

<script>
export default {
	name: 'list',
	data () {
		return {
			title: '电影排行',
			map: ['阿凡达','侏罗纪公园','星球大战']
		}
	}
}
</script>

<style lang="css">
</style>
