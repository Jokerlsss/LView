<!-- 基础组件：布局 -->
<template>
	<view>
		<l-row :gutter="10">
			<l-col v-for="(item,index) in colList" :key="index" :span="item.span">
				<view class="col"></view>
			</l-col>
		</l-row>
		
		<l-row :gutter="10">
			<l-col :span="4">
				<l-button @click="changeColNumber(2)">2列</l-button>
			</l-col>
			<l-col :span="4">
				<l-button @click="changeColNumber(3)">3列</l-button>
			</l-col>
			<l-col :span="4">
				<l-button @click="changeColNumber(4)">4列</l-button>
			</l-col>
		</l-row>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				colList: [
					{
						span:12
					},{
						span:12
					},{
						span:12
					}
				]
			};
		},
		methods:{
			// 改变列数量
			changeColNumber(value){
				this.colList = []
				for(let i=0;i<value;i++){
					let temp = {
						span:12
					}
					this.colList.push(temp)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.col{
	background-color: #cccccc;
	border-radius: 10px;
	width: 100%;
	height: 100rpx;
}
</style>
