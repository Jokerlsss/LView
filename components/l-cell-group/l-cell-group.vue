<template>
	<view class="cell-group-container">
		<view class="cell-group-title" :style="{
			textAlign: textAlign,
			color: titleColor,
			fontSize: fontSize,
			height: titleHeight
		}">{{title}}</view>
		<!-- 插入l-cell-item -->
		<slot></slot>
	</view>
</template>

<script>
	/**
	 * @description 单元格组，与 l-cell-item 一起使用
	 * @property {String} title 模块名
	 * @property {String} textAlign 模块名位置
	 * @property {String} titleColor 模块名颜色
	 * @property {String} fontSize 模块名字体大小
	 * @property {String} titleHeight 模块名所处容器高度
	 */
	export default {
		name:"l-cell-group",
		props:{
			// 模块名
			title:{
				type: String,
				default:'标题'
			},
			// 模块名位置
			textAlign:{
				type: String,
				default:'left'
			},
			// 模块名颜色
			titleColor:{
				type: String,
				default:'#999999'
			},
			// 模块名字体大小
			fontSize:{
				type: String,
				default:'30rpx'
			},
			// 模块名所处容器高度
			titleHeight:{
				type: String,
				default:'80rpx'
			}
		},
		data() {
			return {
			};
		}
	}
</script>

<style lang="scss" scoped>
.cell-group-container{
	width: 100%;
}

.cell-group-title{
	line-height: 80rpx;
	padding: 0 10px;
}
</style>
