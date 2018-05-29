<template>
	<div class="">
		<h1>{{ title }}</h1>
		<ul>
			<!-- 当它们处于同一节点，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。当你想为仅有的一些项渲染节点时，这种优先级的机制会十分有用 -->
				<template v-for = "(item,i) in maps" v-if="item.officeRecords > 50000">
					<li :key="item.name">{{ item.name }}</li>
					 <li :key="item.officeRecords" @click="item.officeRecords += 1"> 票房：{{ item.officeRecords }}</li>
				</template>
		</ul>
	</div>

</template>

<script>
export default {
	name: 'list',
	data () {
		return {
			title: '电影排行',
			map: [
						{name: '阿凡达',officeRecords: 10000000},
						{name: '侏罗纪公园',officeRecords: 9000000},
						{name: '星球大战',officeRecords: 8000000}
					]
		}
	},
	beforecreated() {
		// push会更新视图
		this.map.push({name: '盗墓笔记',officeRecords: 5000000});
	},
	computed: {
		mpas: function() {
			return this.map.map((item,index) => {
				return {
					name: item.name,
					officeRecords: item.officeRecords + '票'
				}
			})
		}
	}
}
</script>

<style lang="css">
	ul{
		list-style: none;
		li{
			float: left;
			text-align: left;
		}
	}
</style>
