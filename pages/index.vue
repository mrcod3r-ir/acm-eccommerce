<script>
	import { useLocalStorage, useMouse, usePreferredDark } from "@vueuse/core"

	export default {
		setup() {
			// tracks mouse position
			const { x, y } = useMouse()

			// is user prefers dark theme
			const isDark = usePreferredDark()

			// persist state in localStorage
			const store = useLocalStorage("my-storage", {
				name: "Apple",
				color: "red"
			})

			return { x, y, isDark, store }
		}
	}
</script>
<template>
	<div>
		<h1>page</h1>
		<h2>x : {{ x }}</h2>
		<h2>y : {{ y }}</h2>
		<h2>store: {{ store }}</h2>
	</div>
</template>
