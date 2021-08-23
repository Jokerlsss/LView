<template>
	<!-- UView 宽度实现方式 :class="['col-span-'+span]" -->
	<view class="l-col-container" :class="['col-span-'+span]" :style="{
		margin: `0rpx ${gutter}rpx`
	}">
		<slot></slot>
	</view>
</template>

<script>
	/**
	 * @description 布局列，与 l-row 配合使用。
	 * @param {Number} span 每列所占宽度，可选值 1-12
	 */
	export default {
		name: "l-col",
		props: {
			// 每列所占宽度大小，共 12 等分，可选值 1-12
			span: {
				type: Number,
				default: 4,
				// 可选范围 [1, 12], 超出范围报错
				validator(value) {
					let result = value >= 1 && value <= 12
					if (!result) {
						console.error('span 取值范围应在 1~12')
					}
					return result
				}
			}
		},
		created() {
			this.parent = false;
		},
		mounted() {
			// 获取父组件实例，并赋值给对应的参数
			this.parent = this.$l.$parent.call(this, 'l-row');
			if (this.parent) {
				this.gutter = this.parent.gutter;
			}
		},
		data() {
			return {
				// col 间距
				gutter: 20
			};
		}
	}
</script>

<style lang="scss" scoped>
	.l-col-container {
		width: 100%;
	}

	.col-span-0 {
		width: 0;
	}

	.col-span-1 {
		// 除以12等分，再乘份数
		width: calc(100%/12*1);
	}

	.col-span-2 {
		// 除以12等分，再乘份数
		width: calc(100%/12*2);
	}

	.col-span-3 {
		width: calc(100%/12*3);
	}

	.col-span-4 {
		width: calc(100%/12*4);
	}

	.col-span-5 {
		width: calc(100%/12*5);
	}

	.col-span-6 {
		width: calc(100%/12*6);
	}

	.col-span-7 {
		width: calc(100%/12*7);
	}

	.col-span-8 {
		width: calc(100%/12*8);
	}

	.col-span-9 {
		width: calc(100%/12*9);
	}

	.col-span-10 {
		width: calc(100%/12*10);
	}

	.col-span-11 {
		width: calc(100%/12*11);
	}

	.col-span-12 {
		width: calc(100%/12*12);
	}
</style>
