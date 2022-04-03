<script>
	import { gsap } from "gsap"
	export default {
		setup() {
			onMounted(() => {
				gsap.to(".box", { rotation: 27, x: 100, duration: 1 })
			})
		}
	}
</script>
<template>
	<div>
		<h1>page</h1>
		<div class="box w-4 h-4 bg-red-400"></div>
		<div class="box w-4 h-4 bg-green-400"></div>
	</div>
</template>
