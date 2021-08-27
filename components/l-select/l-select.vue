<template>
	<view>
		<picker-view v-if="visible" :indicator-style="indicatorStyle" :value="selectValue" @change="bindChange"
			class="picker-view">
			<picker-view-column>
				<view class="item" v-for="(item,index) in selectList" :key="index">{{item}}</view>
			</picker-view-column>
		</picker-view>
	</view>
</template>

<script>
	export default {
		name: "l-select",
		data() {
			return {
				visible: true,
				selectValue: [],
				selectList: [
					1, 2, 3
				],
				indicatorStyle: `height: 50px;`
			};
		},
		methods: {
			bindChange(e) {
				const index = e.detail.value
				console.log(this.selectList[index]);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.picker-view {
		width: 100%;
		height: 600rpx;
		margin-top: 20rpx;
	}

	.item {
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
