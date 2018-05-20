<template>
	<div v-on:click="showSome({msg},$event)">
		<button v-on:click.stop="showSome(msg,$event)">v-on指令</button> ： 使用事件修饰符
		<input class="btn" @keyup.enter.space="keyUp"> : 使用按键修饰符
	</div>
</template>
<script>
	export default{
		data() {
			return {
				msg: 'v-on指令绑定js原生事件'
			}
		},
		methods: {
			showSome: function(msg, event){
				console.log( 'msg is ' + msg);
				console.log('event is ',event);
			},
			keyUp: function(event){
				alert(`输入了${event.currentTarget.value}`);
			}
		}
	}
</script>
