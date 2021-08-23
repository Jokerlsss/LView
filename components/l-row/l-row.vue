<template>
	<view class="l-row-container" :style="{
		height: height
	}">
		<slot :gutter="gutter"></slot>
	</view>
</template>

<script>
	/**
	 * @description 布局行，与 l-col 配合使用。
	 * @param {String} height 高度
	 * @param {Number} gutter 每列间隔，单位 rpx
	 */
	export default {
		name:"l-row",
		props:{
			// 高度
			height:{
				type: String,
				default:'100rpx'
			},
			// 每列的间隔，单位 rpx
			gutter:{
				type: Number,
				default:10
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.l-row-container{
	width: 100%;
	margin: 10px 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
</style>
