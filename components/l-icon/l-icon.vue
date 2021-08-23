<template>
	<text class="iconfont" :class="name" :style="{color: color}"></text>
</template>

<script>
	/**
	 * @description svg图标
	 * @param {String} name 图标类名
	 * @param {String} color 图标颜色
	 */
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
