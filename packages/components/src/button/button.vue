<template>
  <button class="mo-button" :class="buttonStyle">
    <slot>mocha-ui2221</slot>
  </button>
</template>

<script lang="ts" setup>
import './style/index.scss'
import { computed } from 'vue'
defineOptions({ name: 'mo-button' })

type ButtonProps = {
  type?: string
}
const buttonProps = defineProps<ButtonProps>()

const buttonStyle = computed(() => {
  return { [`mo-button--${buttonProps.type}`]: buttonProps.type }
})
</script>
