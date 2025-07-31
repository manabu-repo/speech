<template>
  <div class="flow-light-container absolute inset-0 overflow-hidden pointer-events-none">
    <!-- 主流动光带 -->
    <div v-for="i in 6" :key="`light-${i}`" class="flow-light" :style="getLightStyle(i)"></div>

    <!-- 背景辉光效果 -->
    <div class="bg-glow absolute inset-0 opacity-20"></div>

    <!-- 高亮点 -->
    <div v-for="i in 6" :key="`dot-${i}`" class="highlight-dot" :style="getDotStyle(i)"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// PDF效果参考：使用柔和的不饱和绿
const colorGradient = 'linear-gradient(90deg, rgba(0,255,155,0) 0%, rgba(64,224,176,0.7) 50%, rgba(0,255,155,0) 100%)'

// 响应式尺寸
const containerSize = ref({ width: 1920, height: 1080 })

// 获取流光线样式
const getLightStyle = (index: number) => {
  const delay = (index - 1) * 1.2;
  const height = 10 + Math.random() * 16;
  const rotation = 10 + Math.random() * 5;

  return {
    '--delay': `${delay}s`,
    '--height': `${height}vh`,
    '--rotation': `${rotation}deg`,
    background: colorGradient
  }
}

// 获取高亮点样式
const getDotStyle = (index: number) => {
  const size = 20 + Math.random() * 50;
  const x = 10 + Math.random() * 80;
  const y = 10 + Math.random() * 80;
  const opacity = 0.1 + Math.random() * 0.1;
  const animationDelay = Math.random() * 5;

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${x}%`,
    top: `${y}%`,
    opacity,
    'animation-delay': `${animationDelay}s`
  }
}

// 响应窗口尺寸变化
const updateSize = () => {
  if (typeof window !== 'undefined') {
    containerSize.value = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    updateSize()
    window.addEventListener('resize', updateSize)
  }
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateSize)
  }
})
</script>

<style scoped>
.flow-light-container {
  z-index: -1;
  /* 置于内容下层 */
  filter: blur(0.5px);
}

.flow-light {
  position: absolute;
  top: -20vh;
  /* 起始位置 */
  width: 30vw;
  /* 优化宽度 */
  height: var(--height);
  opacity: 0.6;
  filter: blur(20px);
  animation: flow 12s ease-in-out infinite;
  animation-delay: var(--delay);
  transform:
    translateX(-100vw) rotate(var(--rotation));
  will-change: transform;
}

.bg-glow {
  background: radial-gradient(ellipse at center,
      rgba(32, 216, 156, 0.1) 0%,
      rgba(32, 216, 156, 0) 70%);
}

.highlight-dot {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle,
      rgba(140, 255, 230, 0.8) 0%,
      rgba(0, 224, 176, 0) 70%);
  animation: pulse 8s infinite ease-in-out;
}

@keyframes flow {
  0% {
    transform:
      translateX(-30vw) rotate(var(--rotation));
  }

  100% {
    transform:
      translateX(100vw) rotate(var(--rotation));
  }
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.1;
  }

  50% {
    transform: scale(1.2);
    opacity: 0.2;
  }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .flow-light {
    width: 40vw;
    filter: blur(10px);
  }

  .highlight-dot {
    display: none;
  }
}
</style>
