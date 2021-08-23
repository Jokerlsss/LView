<template>
	<view class="content">
		<l-cell-group title="基础组件">
		<view v-for="(item,index) of componentsList" :key="index">
			<!-- :isBorderTop="childIndex===0" 防止 borderTop 和 borderBottom 边框重叠变厚 -->
			<l-cell-item :headIconUrl="child.headIconUrl" :isBorderTop="childIndex===0" v-for="(child, childIndex) of item.children" :key="childIndex" :title="child.title" @click="toDetailComp(child.path)" ></l-cell-item>
		</view>
		</l-cell-group>
	</view>
</template>

<script>
	import list from '../../common/index-list.js'
	export default {
		data() {
			return {
				// 组件列表，可跳转
				componentsList: list
			}
		},
		onLoad() {
			
		},
		methods: {
			toDetailComp(path){
				uni.navigateTo({
					url: `../${path}`
				});
			}
		}
	}
</script>

<style lang="scss">
</style>
