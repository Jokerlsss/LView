<template>
	<text class="iconfont" :class="name" :style="{color: color}"></text>
</template>

<script>
	export default {
		name:"l-icon",
		props:{
			// 图标在 iconfont 库中, font-class 的名称
			name:{
				type: String,
				default:''
			},
			color:{
				type: String,
				default:'#333333'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	@import url("./iconfont.css");

</style>
