<template>
	<!-- textIndet 距离左边的缩进，需与 letter-spacing 一致，保持按钮中文字居中-->
	<button class="l-btn" :class="['btn-type-'+type, disabled?'btn-disabled':'']" @click="clickEvent()" :style="{
		width: width,
		height: height,
		lineHeight: height,
		textIndent: letterSpacing,
		letterSpacing: letterSpacing,
		backgroundColor: bgColor,
		color: color,
		borderRadius: borderRadius,
		fontSize: fontSize
	}">
		<slot>按钮</slot>
	</button>
</template>

<script>
	/**
	 * @description 按钮
	 * @param {String} width 宽度
	 * @param {String} height 高度
	 * @param {String} letterSpacing 字间距
	 * @param {String} bgColor 背景色
	 * @param {String} color 字体颜色
	 * @param {String} borderRadius 圆角
	 * @param {String} fontSize 字体大小
	 * @param {String} type 按钮主题，优先级 > bgColor，可选值 [ primary | warn | success | error ]
	 * @param {Boolean} disabled 是否禁用
	 */
	import _style from '../../common/LView-style.js'
	export default {
		name: "l-button",
		props: {
			// 宽度
			width: {
				type: String,
				default: '150rpx'
			},
			// 高度
			height: {
				type: String,
				default: '80rpx'
			},
			// 字间距
			letterSpacing: {
				type: String,
				default: '3px'
			},
			// 背景色
			bgColor: {
				type: String,
				default: _style.mainColor
			},
			// 字体颜色
			color: {
				type: String,
				default: '#ffffff'
			},
			// 圆角
			borderRadius: {
				type: String,
				default: '5px'
			},
			// 字体大小
			fontSize: {
				type: String,
				default: '32rpx'
			},
			// 按钮主题，优先级 > bgColor，可选值 [ primary | warn | success | error ]
			type: {
				type: String,
				default: 'primary'
			},
			// 是否禁用
			disabled: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {};
		},
		methods: {
			clickEvent() {
				// 禁用
				if (this.disabled) {
					return
				}
				// 可用
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.l-btn {
		outline: 0;

		&:active {
			opacity: 0.8;
			transition: 0.3s;
		}
	}

	.btn-type-primary {
		background-color: $uni-color-primary !important;
		color: #FFFFFF !important;
		;
	}

	.btn-type-warn {
		background-color: $uni-color-warning !important;
		color: #FFFFFF !important;
		;
	}

	.btn-type-success {
		background-color: $uni-color-success !important;
		color: #FFFFFF !important;
		;
	}

	.btn-type-error {
		background-color: $uni-color-error !important;
		color: #FFFFFF !important;
	}

	.btn-disabled {
		background-color: #CCCCCC !important;
		color: #ffffff !important;

		&:active {
			opacity: 1 !important;
		}
	}
</style>
