<template>
	<view class="l-popup-container" :style="[popupStyle]" :class="[
		'l-popup-' + mode
	]" v-if="show" @click="clickEvent">

	</view>
</template>

<script>
	/**
	 * @description 弹出层容器
	 * @param {String} xxx 
	 */
	export default {
		name: "l-popup",
		props: {
			// 是否显示弹出层
			show: {
				type: Boolean,
				default: false
			},
			// 弹出层位置 [可选值 top | bottom | left | right]
			mode: {
				type: String,
				default: 'bottom'
			}
		},
		model: {
			prop: ['show']
		},
		computed:{
			popupStyle(){
				let style = {}
				if(this.mode === 'left'){
					style = {
						width: '200rpx',
						height: '100%',
						transform: `translate3D(-100%, 0px, 0px)`
					}
				}
				style.transition = 'all 0.3s linear'
				return style
			}
		},
		data() {
			return {
			};
		},
		methods:{
			clickEvent(){
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.l-popup-container {
		position: fixed;
		top:0;
		bottom:0;
		left:0;
		right:0;
		background-color: #0086B3;
	}
	// 弹出层显示的样式
	.modalShow{
		// transition: all 0.3s ease-in-out;
	}

	.l-popup-bottom {
		bottom: 0;
		width: 100vw;
		height: 300rpx
	}

	.l-popup-top {
		top: 0;
		width: 100vw;
		height: 300rpx
	}

	.l-popup-left {
		left: 0;
		top: 0;
		bottom: 0;
		z-index: 999;
		width: 200rpx;
	}

	.l-popup-right {
		right: 0;
		top: 0;
		bottom: 0;
		// height: 100vh;
		width: 200rpx
	}
</style>
