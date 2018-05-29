<template>
	<div v-on:click="showSome({msg},$event)">
		<div class="row">
			<button v-on:click.stop="showSome(msg,$event)">v-on指令</button> ： 使用事件修饰符,阻止事件冒泡
		</div>
		<div class="row">
			<input class="btn" @keyup.enter.space="keyUp"> : 使用enter/space按键修饰符
		</div>
		<div class="row">
			<button type="button" name="button" @click.stop='show = !show'>control show</button>
			<span v-if="show == false">
				v-if指令
			</span>
		</div>
		<div class="row">
			<input type="text" v-focus v-model="message" name="" value="">:
			<span v-if="show == false">
				v-model指令： message is {{message}}
			</span>
		</div>
	</div>
</template>
<script>


	export default{
		data() {
			return {
				msg: 'v-on指令绑定js原生事件',
				message: 'message',
				show: false
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
		},
		directive: {// 注册一个全局自定义指令 `v-focus`
			focus: {
			  // 当被绑定的元素插入到 DOM 中时……
			  inserted: function (el) {
			    // 聚焦元素
			    el.focus()
			  }
			}
		}
	}	
</script>
<style media="screen">
	.row{
		margin: 20px;
	}
</style>
