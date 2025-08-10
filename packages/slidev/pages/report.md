---
theme: seriph
background: https://cover.sli.dev
title: 转正述职报告
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
mode: dark
---

<!-- 封面页 -->
# 转正述职报告
### ——试用期工作成果与未来规划
<div @click="$slidev.nav.next" class="mt-12 py-1 text-3" hover:bg="white op-10">
  按空格键继续 <carbon:arrow-right />
</div>
<div class="absolute bottom-15 left-200 flex items-center">
  <span class="text-2.9">演讲人：杨福才｜前端开发工程师</span>
  <span class="ml-4 text-2.5 text-gray-400">2025年8月</span>
</div>

---
transition: slide-up
layout: image-right
image: https://cover.sli.dev
---

<!-- 目录页 -->
# 报告概览
<div class="grid grid-cols-2 gap-4 mt-10 text-left">
  <div class="p-4 border-l-4 border-blue-500 bg-blue-900/20">
    <div class="flex items-center">
      <carbon:user-avatar class="text-blue-400 mr-2"/> 
      <span class="font-bold">个人介绍</span>
    </div>
  </div>
  <div class="p-4 border-l-4 border-green-500 bg-green-900/20">
    <div class="flex items-center">
      <carbon:task-complete class="text-green-400 mr-2"/> 
      <span class="font-bold">工作总结</span>
    </div>
  </div>
  <div class="p-4 border-l-4 border-yellow-500 bg-yellow-900/20">
    <div class="flex items-center">
      <carbon:star-filled class="text-yellow-400 mr-2"/> 
      <span class="font-bold">亮点工作</span>
    </div>
  </div>
  <div class="p-4 border-l-4 border-purple-500 bg-purple-900/20">
    <div class="flex items-center">
      <carbon:growth class="text-purple-400 mr-2"/> 
      <span class="font-bold">成长体验</span>
    </div>
  </div>
  <div class="p-4 border-l-4 border-red-500 bg-red-900/20">
    <div class="flex items-center">
      <carbon:improve-relevance class="text-red-400 mr-2"/> 
      <span class="font-bold">不足改进</span>
    </div>
  </div>
  <div class="p-4 border-l-4 border-teal-500 bg-teal-900/20">
    <div class="flex items-center">
      <carbon:checkmark class="text-teal-400 mr-2"/> 
      <span class="font-bold">未来规划</span>
    </div>
  </div>
</div>

---
layout: two-cols
---

<!-- 个人介绍 -->
# 个人介绍
<div class="text-left mt-5">
  <div class="flex items-center mb-4">
    <carbon:identification class="text-blue-400 mr-2"/>
    <span class="font-bold text-lg">基本信息</span>
  </div>
  <div class="grid grid-cols-2 gap-3 text-sm">
    <div>姓名：杨福才</div>
    <div>职位：前端开发工程师</div>
    <div>部门：V8业务中台</div>
    <div>入职：2025年6月</div>
  </div>
</div>

<div class="mt-8">
  <div class="flex items-center mb-4">
    <carbon:skill-level-basic class="text-green-400 mr-2"/>
    <span class="font-bold text-lg">技术专长</span>
  </div>
  <div class="flex flex-wrap gap-2">
    <span class="px-2 py-1 bg-gray-800 rounded">React18</span>
    <span class="px-2 py-1 bg-gray-800 rounded">Vue3</span>
    <span class="px-2 py-1 bg-gray-800 rounded">微前端</span>
    <span class="px-2 py-1 bg-gray-800 rounded">性能优化</span>
    <span class="px-2 py-1 bg-gray-800 rounded">工程化</span>
    <span class="px-2 py-1 bg-gray-800 rounded">TypeScript</span>
  </div>
</div>

::right::

<div class="ml-5">
  <div class="flex items-center mb-4 mt-10">
    <carbon:portfolio class="text-yellow-400 mr-2"/>
    <span class="font-bold text-lg">项目经验</span>
  </div>

  <div class="space-y-4">
    <div class="p-3 bg-gray-800 rounded">
      <div class="font-semibold text-blue-300">选人组件重构</div>
      <div class="text-xs mt-1">统一接口设计 · 主题适配 · 静态调用</div>
    </div>
    <div class="p-3 bg-gray-800 rounded">
      <div class="font-semibold text-purple-300">分级管控系统</div>
      <div class="text-xs mt-1">流程授权 · 批量处理 · 权限管理</div>
    </div>
    <div class="p-3 bg-gray-800 rounded">
      <div class="font-semibold text-green-300">主题系统升级</div>
      <div class="text-xs mt-1">新主题开发 · 兼容性处理 · 配置管理</div>
    </div>
  </div>
</div>

---
layout: default
---

<!-- 试用期工作总结 -->
# 试用期工作总结
<div class="grid grid-cols-3 gap-6 mt-10">
  <div class="p-4 bg-gradient-to-br from-blue-900 to-gray-900 rounded-xl">
    <div class="text-lg text-blue-300 mb-3">核心任务</div>
    <ul class="text-sm ml-4 list-disc space-y-2">
      <li>选人组件静态调用</li>
      <li>批量选择功能实现</li>
      <li>分级管控流程授权</li>
      <li>新主题系统开发</li>
    </ul>
  </div>

  <div class="p-4 bg-gradient-to-br from-purple-900 to-gray-900 rounded-xl">
    <div class="text-lg text-purple-300 mb-3">BUG修复</div>
    <ul class="text-sm ml-4 list-disc space-y-2">
      <li>解决20+历史遗留问题</li>
      <li>客户紧急问题响应</li>
      <li>性能瓶颈优化</li>
    </ul>
  </div>

  <div class="p-4 bg-gradient-to-br from-teal-900 to-gray-900 rounded-xl">
    <div class="text-lg text-teal-300 mb-3">协作支持</div>
    <ul class="text-sm ml-4 list-disc space-y-2">
      <li>跨团队技术方案支持</li>
      <li>新人指导与文档编写</li>
      <li>Code Review规范建立</li>
    </ul>
  </div>
</div>

<div class="mt-10 p-5 bg-gray-800 rounded-lg">
  <div class="flex justify-between items-center">
    <div class="text-blue-300 font-bold">量化成果</div>
    <div class="text-xs text-gray-400">试用期关键指标</div>
  </div>
  <div class="grid grid-cols-4 gap-4 mt-3 text-center">
    <div>
      <div class="text-2xl font-bold text-green-400">97%</div>
      <div class="text-xs mt-1">BUG解决率</div>
    </div>
    <div>
      <div class="text-2xl font-bold text-yellow-400">18</div>
      <div class="text-xs mt-1">文档产出</div>
    </div>
    <div>
      <div class="text-2xl font-bold text-purple-400">4+</div>
      <div class="text-xs mt-1">核心功能交付</div>
    </div>
    <div>
      <div class="text-2xl font-bold text-blue-400">100%</div>
      <div class="text-xs mt-1">关键任务完成率</div>
    </div>
  </div>
</div>

---
layout: two-cols
---

<!-- 试用期亮点工作 -->
# 技术亮点与突破
<div class="text-left mt-8">
  <div class="flex items-center mb-4">
    <carbon:idea class="text-yellow-400 mr-2 text-xl"/>
    <span class="font-bold text-xl">选人组件重构</span>
  </div>
  <div class="text-sm space-y-3">
    <div class="flex items-start">
      <carbon:checkmark-filled class="text-green-400 mt-1 mr-2 flex-shrink-0"/>
      <span>解决公文业务组微流程阻塞问题</span>
    </div>
    <div class="flex items-start">
      <carbon:settings-adjust class="text-blue-400 mt-1 mr-2 flex-shrink-0"/>
      <span>静态调用模式实现，降低耦合度</span>
    </div>
    <div class="flex items-start">
      <carbon:data-vis-4 class="text-purple-400 mt-1 mr-2 flex-shrink-0"/>
      <span>顶层ThemeView统一配置管理</span>
    </div>
    <div class="flex items-start">
      <carbon:rocket class="text-red-400 mt-1 mr-2 flex-shrink-0"/>
      <span>复用性提升，代码冗余减少40%</span>
    </div>
  </div>

  <div class="mt-8">
    <div class="flex items-center mb-4">
      <carbon:group-security class="text-green-400 mr-2 text-xl"/>
      <span class="font-bold text-xl">分级管控优化</span>
    </div>
    <div class="text-sm space-y-3">
      <div class="flex items-start">
        <carbon:improve-relevance class="text-blue-400 mt-1 mr-2 flex-shrink-0"/>
        <span>流程授权机制重构</span>
      </div>
      <div class="flex items-start">
        <carbon:list-boxes class="text-purple-400 mt-1 mr-2 flex-shrink-0"/>
        <span>批量处理功能实现</span>
      </div>
    </div>
  </div>
</div>

::right::

<div class="ml-10">
  <div class="mt-10">
    <div class="flex items-center mb-4">
      <carbon:paint-brush class="text-purple-400 mr-2 text-xl"/>
      <span class="font-bold text-xl">主题系统升级</span>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg">
      <div class="text-sm flex items-center mb-2">
        <carbon:warning class="text-yellow-400 mr-2"/>
        挑战：使用范围广，功能牵一发动全身
      </div>
      <div class="text-sm space-y-2">
        <div class="flex items-start">
          <carbon:connect-target class="text-green-400 mt-1 mr-2 flex-shrink-0"/>
          <span>统一接口规范设计</span>
        </div>
        <div class="flex items-start">
          <carbon:data-check class="text-blue-400 mt-1 mr-2 flex-shrink-0"/>
          <span>兼容性处理方案</span>
        </div>
        <div class="flex items-start">
          <carbon:test-tool class="text-red-400 mt-1 mr-2 flex-shrink-0"/>
          <span>影响范围评估机制</span>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-10 p-4 bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg">
    <div class="flex items-center">
      <carbon:collaborate class="text-white mr-2 text-xl"/>
      <span class="font-bold text-white">协作突破</span>
    </div>
    <div class="text-sm text-white mt-3 space-y-2">
      <li>推动跨团队技术方案落地</li>
      <li>建立Code Review规范流程</li>
      <li>编写新人Onboarding指南</li>
    </div>
  </div>
</div>

---
layout: two-cols
---

<!-- 个人成长/工作体验/建议 -->
# 成长与体验
<div class="text-left mt-8">
  <div class="flex items-center mb-4">
    <carbon:growth class="text-green-400 mr-2 text-xl"/>
    <span class="font-bold text-xl">专业成长</span>
  </div>
  <div class="text-sm space-y-3">
    <div class="flex items-start">
      <carbon:chart-venn-diagram class="text-blue-400 mt-1 mr-2 flex-shrink-0"/>
      <span>微前端架构深度实践</span>
    </div>
    <div class="flex items-start">
      <carbon:chart-3d class="text-purple-400 mt-1 mr-2 flex-shrink-0"/>
      <span>复杂组件设计能力提升</span>
    </div>
    <div class="flex items-start">
      <carbon:data-vis-1 class="text-yellow-400 mt-1 mr-2 flex-shrink-0"/>
      <span>工程化思维建立</span>
    </div>
  </div>

  <div class="mt-8">
    <div class="flex items-center mb-4">
      <carbon:interactions class="text-blue-400 mr-2 text-xl"/>
      <span class="font-bold text-xl">工作体验</span>
    </div>
    <div class="text-sm space-y-3">
      <div class="flex items-start">
        <carbon:thumbs-up class="text-green-400 mt-1 mr-2 flex-shrink-0"/>
        <span>技术深度与专业氛围</span>
      </div>
      <div class="flex items-start">
        <carbon:thumbs-down class="text-red-400 mt-1 mr-2 flex-shrink-0"/>
        <span>组件影响范围评估挑战</span>
      </div>
    </div>
  </div>
</div>

::right::

<div class="ml-10">
  <div class="mt-8">
    <div class="flex items-center mb-4">
      <carbon:recommend class="text-yellow-400 mr-2 text-xl"/>
      <span class="font-bold text-xl">优化建议</span>
    </div>
    <div class="text-sm space-y-4">
      <div class="bg-gray-800 p-3 rounded-lg">
        <div class="flex items-center mb-2">
          <carbon:document class="text-blue-400 mr-2"/>
          <span class="font-semibold">组件定位文档</span>
        </div>
        <div class="text-xs">建立项目内组件位置索引文档，降低新人上手成本</div>
      </div>
      <div class="bg-gray-800 p-3 rounded-lg">
        <div class="flex items-center mb-2">
          <carbon:ai-status-complete class="text-purple-400 mr-2"/>
          <span class="font-semibold">AI辅助流程</span>
        </div>
        <div class="text-xs">引入Claude Code实现自动Cherry-pick等自动化操作</div>
      </div>
      <div class="bg-gray-800 p-3 rounded-lg">
        <div class="flex items-center mb-2">
          <carbon:task-tools class="text-green-400 mr-2"/>
          <span class="font-semibold">任务评估机制</span>
        </div>
        <div class="text-xs">建立更清晰的任务优先级评估标准</div>
      </div>
    </div>
  </div>

  <div class="mt-8 p-4 bg-gradient-to-r from-green-900 to-teal-900 rounded-lg">
    <div class="italic text-center">
      "在V8中台的技术深度与协作氛围中，实现了专业能力的快速成长"
    </div>
  </div>
</div>

---
layout: default
---

<!-- 工作不足之处/改进计划 -->
# 不足与改进
<div class="grid grid-cols-2 gap-8 mt-12">
  <div>
    <div class="flex items-center mb-4">
      <carbon:warning-alt class="text-yellow-400 mr-2 text-xl"/>
      <span class="font-bold text-xl">待提升领域</span>
    </div>
    <div class="space-y-5">
      <div class="p-3 bg-gray-800 rounded">
        <div class="flex items-center">
          <carbon:stethoscope class="text-red-400 mr-2"/>
          <span class="font-semibold">影响范围预判</span>
        </div>
        <div class="text-xs mt-2">新主题调整时对影响范围认识不足</div>
      </div>
      <div class="p-3 bg-gray-800 rounded">
        <div class="flex items-center">
          <carbon:task-view class="text-blue-400 mr-2"/>
          <span class="font-semibold">任务优先级管理</span>
        </div>
        <div class="text-xs mt-2">多任务并行时执行顺序规划需优化</div>
      </div>
      <div class="p-3 bg-gray-800 rounded">
        <div class="flex items-center">
          <carbon:location-filled class="text-purple-400 mr-2"/>
          <span class="font-semibold">组件定位能力</span>
        </div>
        <div class="text-xs mt-2">项目内组件位置熟悉度待提升</div>
      </div>
    </div>
  </div>
  <div>
    <div class="flex items-center mb-4">
      <carbon:progress-bar-round class="text-green-400 mr-2 text-xl"/>
      <span class="font-bold text-xl">改进计划</span>
    </div>
    <div class="space-y-5">
      <div class="p-3 bg-gray-800 rounded">
        <div class="flex items-center">
          <carbon:study-view class="text-yellow-400 mr-2"/>
          <span class="font-semibold">技术深度专项</span>
        </div>
        <div class="text-xs mt-2">每周2小时研究架构设计</div>
      </div>
      <div class="p-3 bg-gray-800 rounded">
        <div class="flex items-center">
          <carbon:task class="text-blue-400 mr-2"/>
          <span class="font-semibold">任务管理优化</span>
        </div>
        <div class="text-xs mt-2">采用看板工具管理优先级</div>
      </div>
      <div class="p-3 bg-gray-800 rounded">
        <div class="flex items-center">
          <carbon:document-add class="text-green-400 mr-2"/>
          <span class="font-semibold">知识体系建设</span>
        </div>
        <div class="text-xs mt-2">建立组件定位索引文档</div>
      </div>
    </div>
  </div>
</div>
<div class="mt-10 p-4 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-lg">
  <div class="flex items-center justify-center">
    <carbon:gem class="text-white mr-2 text-xl"/>
    <span class="font-bold text-white">目标：前端架构能力提升</span>
  </div>
</div>

---
layout: default
---

<!-- 展望规划 -->
# 未来发展规划
<div class="grid grid-cols-3 gap-6 mt-16">
  <div class="p-5 bg-gradient-to-b from-blue-900 to-gray-900 rounded-xl">
    <div class="text-xl font-bold text-blue-300">短期目标</div>
    <div class="text-sm mt-4 space-y-3">
      <li>React生态深度实践</li>
      <li>组件库架构升级</li>
      <li>AI辅助流程落地</li>
      <li>性能优化体系建立</li>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-b from-purple-900 to-gray-900 rounded-xl">
    <div class="text-xl font-bold text-purple-300">中期规划</div>
    <div class="text-sm mt-4 space-y-3">
      <li>微前端架构优化</li>
      <li>工程化工具链完善</li>
      <li>跨端技术融合</li>
      <li>技术分享体系建立</li>
    </div>
  </div>

  <div class="p-5 bg-gradient-to-b from-teal-900 to-gray-900 rounded-xl">
    <div class="text-xl font-bold text-teal-300">长期愿景</div>
    <div class="text-sm mt-4 space-y-3">
      <li>前端架构师成长路径</li>
      <li>专利/开源项目贡献</li>
      <li>AIGC工程化实践</li>
      <li>技术影响力建设</li>
    </div>
  </div>
</div>

<div class="mt-16 p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
  <div class="text-center text-xl font-bold">
    <span class="text-white">技术愿景：构建业界领先的V8中台前端技术体系</span>
  </div>
  <div class="text-center mt-3 text-blue-100">
    "因协同·而致远"
  </div>
</div>

---
class: text-center
---

<!-- 结束页 -->
<div class="h-full flex flex-col items-center justify-center">
  <div class="text-5xl font-bold mb-10">
    <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
      感谢聆听
    </span>
  </div>
  <div class="text-2xl op-80 mt-8">
    期待与团队共同成长
  </div>
  <div class="mt-16 text-sm text-gray-500">
    杨福才 | 前端开发工程师 | V8业务中台
  </div>
  <div class="flex space-x-4 mt-6">
    <carbon:email class="text-gray-400"/>
    <carbon:link class="text-gray-400"/>
    <carbon:logo-github class="text-gray-400"/>
  </div>
</div>
