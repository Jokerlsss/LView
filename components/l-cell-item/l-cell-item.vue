<template>
	<view @click="clickEvent" class="cell-container" :style="{
			minHeight:height,
			backgroundColor: bgColor
		}">
		<view class="content" :style="{
				borderBottom: isBorderBottom? `1px solid ${borderColor}`:'',
				borderTop: isBorderTop? `1px solid ${borderColor}`:''
			}">
			<!-- TODO 改为支持前方放置图标 -->
			<view class="cell-title" :style="{
					color: titleColor
				}">
				<image v-if="isHeadIcon && headIconUrl!==''" :src="headIconUrl" class="cell-title-img"></image>
				{{title}}
			</view>
			<!-- 右边箭头 -->
			<view class="cell-icon">
				<!-- TODO 改为支持更换图标 -->
				<l-icon class="icon_arrow_right"></l-icon>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * @description 单元格
	 * @Warn 组件开发者注意点：多个单元格会造成上下边框合在一起
	 * @property {String} title 标题
	 * @property {String} height 整体高度
	 * @property {String} bgColor 整体背景颜色
	 * @property {String} borderColor 上下边框颜色
	 * @property {Boolean} isBorderTop 是否显示上边框
	 * @property {Boolean} isBorderBottom 是否显示下边框
	 * @property {String} titleColor 标题颜色
	 * @property {Boolean} isHeadIcon 是否显示标题头部 icon
	 * @property {String} headIconUrl 标题头部 icon 路径
	 * 
	 * @event {Function()} clickEvent 单元格点击事件
	 */
	import _style from '../../common/LView-style.js'
	export default {
		name: "l-item",
		props: {
			// 标题
			title: {
				type: String,
				default: '暂无数据'
			},
			// 整体高度
			height: {
				type: String,
				default: '100rpx'
			},
			// 整体背景颜色
			bgColor: {
				type: String,
				default: '#ffffff'
			},
			// 上下边框颜色
			borderColor: {
				type: String,
				default: '#f6f6f6'
			},
			// 是否显示上边框
			isBorderTop:{
				type: Boolean,
				default:true
			},
			// 是否显示下边框
			isBorderBottom:{
				type: Boolean,
				default:true
			},
			// 标题颜色
			titleColor: {
				type: String,
				default: _style.mainFont
			},
			// 是否显示标题头部 icon
			isHeadIcon:{
				type: Boolean,
				default:true
			},
			// 标题头部 icon 路径
			headIconUrl:{
				type: String,
				default:''
			}
		},
		methods:{
			clickEvent(){
				this.$emit('click')
			}
		},
		data() {
			return {
			
			};
		}
	}
</script>

<style lang="scss" scoped>
	.cell-container {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.content {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.cell-title {
		display: flex;
		align-items: center;
		padding: 5px 20px;
	}

	.cell-icon {
		padding: 5px 10px;
	}
	
	.cell-title-img{
		height: 48rpx;
		width: 48rpx;
		margin-right: 20rpx;
	}
</style>
