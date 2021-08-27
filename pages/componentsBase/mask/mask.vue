<!-- 遮罩层 -->
<template>
	<view>
		<l-button width="300rpx" @click="openMask" class="btn">打开遮罩层</l-button>
		<l-mask :show="isShowMask" @click="openMask"></l-mask>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShowMask:false
			};
		},
		methods:{
			openMask(){
				this.isShowMask = !this.isShowMask
			}
		}
	}
</script>

<style lang="scss" scoped>
.btn{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
