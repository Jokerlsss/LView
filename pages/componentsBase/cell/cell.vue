<!-- 基础组件：单元格 -->
<template>
	<view>
		<l-cell-group title="通用">
			<l-cell-item  title="收藏"></l-cell-item>
			<l-cell-item  title="朋友圈" :isBorderTop="false"></l-cell-item>
			<l-cell-item  title="卡包" :isBorderTop="false"></l-cell-item>
			<l-cell-item  title="表情" :isBorderTop="false"></l-cell-item>
		</l-cell-group>
		<l-cell-group title="设置">
			<l-cell-item  title="隐私"></l-cell-item>
			<l-cell-item  title="辅助" :isBorderTop="false"></l-cell-item>
			<l-cell-item  title="声音" :isBorderTop="false"></l-cell-item>
		</l-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">

</style>
