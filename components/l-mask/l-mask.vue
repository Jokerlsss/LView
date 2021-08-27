<template>
	<view class="l-mask-container" :class="{
		'l-mask-show':show
	}" :style="[
		maskStyle
	]" @click="clickEvent">
		<slot />
	</view>
</template>

<script>
	/**
	 * @description 遮罩层
	 * @warn 开发该组件注意点：在 show 变化时进行动画过渡，不能使用 v-if 来控制组件显示和隐藏（过渡无法监听从 display:none -> display:block 的过程）
	 * 		 只能通过 opacity + z-index 来控制遮罩层显示隐藏
	 * @param {Boolean} show 遮罩层是否显示
	 * @param {String} bgColor 背景颜色
	 * @param {Number} opacity 透明度
	 * @param {Number} duration 显示与隐藏的过渡时长
	 * @param {Boolean} maskClickClose 是否可以点击遮罩层关闭
	 * @param {Number} zIndex 层级
	 * 
	 * @event {Function()} clickEvent 点击事件
	 */
	export default {
		name: "l-mask",
		props: {
			// 是否显示遮罩层
			show: {
				type: Boolean,
				default: false
			},
			// 背景颜色 [仅支持六位颜色，不能自定义透明度]
			bgColor: {
				type: String,
				default: '#000000'
			},
			// 透明度 [0-10，仅支持整数，10为完全不透明，0为完全透明]
			opacity: {
				type: Number,
				default: 6
			},
			// 显示与隐藏的过渡时长 [单位：毫秒]
			duration: {
				type: Number,
				default: 300
			},
			// 是否可以点击遮罩层关闭
			maskClickClose: {
				type: Boolean,
				default: true
			},
			// 层级
			zIndex:{
				type: Number,
				default:-1
			}
		},
		computed: {
			maskStyle() {
				let style = {}
				style.transition = `all ${this.duration/1000}s ease-in-out`
				style.backgroundColor = this.bgColor + this.opacityMap[this.opacity];
				// 需在遮罩层隐藏后，降低 z-index，否则会以透明的形式一直保持在页面最上层级
				if (this.show) {
					style.zIndex = this.zIndex === -1 ? this.$l.$zIndex.mask_zIndex : this.zIndex
				} else {
					style.zIndex = -1
				}
				return style
			}
		},
		methods: {
			clickEvent() {
				if (!this.maskClickClose) return
				this.$emit('click')
			}
		},
		data() {
			return {
				// 透明度对应的十六进制表示
				opacityMap: {
					// 完全透明
					0: '00',
					1: '19',
					2: '33',
					3: '4c',
					4: '66',
					5: '7F',
					6: '99',
					7: 'B2',
					8: 'CC',
					9: 'E5',
					10: 'FF'
				}
			};
		}
	}
</script>

<style lang="scss" scoped>
	.l-mask-container {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		opacity: 0;
	}

	.l-mask-show {
		opacity: 1;
	}
</style>
