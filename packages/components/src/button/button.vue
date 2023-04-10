<template>
  <button class="mo-button" :class="buttonStyle">测试按钮</button>
</template>

<script lang="ts" setup>
import './styles/index.scss'
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
