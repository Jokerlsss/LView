<template>
	<view>
		<l-button width="300rpx" @click="openModal">打开弹出层</l-button>
		<l-popup v-model="isShowPopup" mode="left" @click="closeModal"></l-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShowPopup:false
			};
		},
		methods:{
			openModal(){
				this.isShowPopup = !this.isShowPopup
			},
			closeModal(){
				this.isShowPopup = !this.isShowPopup
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
