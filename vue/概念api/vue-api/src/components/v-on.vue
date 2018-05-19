<template>
	<div v-on:click="showSome(msg,$event)">
		<button v-on:click="showSome(msg,$event)"></button>
	</div>
</template>
<script>
	export default{
		data: {
			msg: 'v-on指令绑定js原生事件'
		},
		methods: {
			showSome: function(msg, event){
				console.log( 'msg is ' + msg);
				console.log('event is ',event);
			}
		}
	}
</script>
