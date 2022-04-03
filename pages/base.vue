<template>
	<div class="flex flex-col space-y-3 justify-center items-center">
		<h1>my base components</h1>
		<app-button variant="secondary" :loading="true">button</app-button>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue"
	export default {
		setup() {
			return {}
		}
	}
</script>

<style lang="scss" scoped></style>
