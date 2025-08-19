---
theme: seriph
background: https://cover.sli.dev
title: 转正述职报告
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
mode: light
themeConfig:
  primary: '#008B8D' # 主色保留商务蓝绿
  secondary: '#6c757d' # 新增中性辅助色
---

# 转正述职报告
### ——试用期工作成果与未来规划
<div @click="$slidev.nav.next" class="mt-12 py-1 text-3 text-blue-600" hover:bg="gray-50">
  按空格键继续 <carbon:arrow-right class="text-blue-500" />
</div>
<div class="absolute bottom-15 left-200 flex items-center text-gray-700">
  <span class="text-2.9">演讲人：杨福才｜前端开发工程师</span>
  <span class="ml-4 text-2.5 text-gray-500">2025年8月</span>
</div>

---
transition: slide-up
layout: image-right
image: https://cover.sli.dev
---

# 报告概览
<div class="grid grid-cols-2 gap-4 mt-10 text-left">
  <div class="p-4 border-l-4 border-blue-500 bg-white shadow-sm">
    <div class="flex items-center text-gray-800">
      <carbon:user-avatar class="text-blue-600 mr-2"/> 
      <span class="font-bold">个人介绍</span>
    </div>
  </div>
  <div class="p-4 border-l-4 border-green-500 bg-white shadow-sm">
    <div class="flex items-center text-gray-800">
      <carbon:task-complete class="text-green-600 mr-2"/> 
      <span class="font-bold">工作总结</span>
    </div>
  </div>
  <div class="p-4 border-l-4 border-amber-500 bg-white shadow-sm">
    <div class="flex items-center text-gray-800">
      <carbon:star-filled class="text-amber-600 mr-2"/> 
      <span class="font-bold">亮点工作</span>
    </div>
  </div>
  <div class="p-4 border-l-4 border-purple-500 bg-white shadow-sm">
    <div class="flex items-center text-gray-800">
      <carbon:growth class="text-purple-600 mr-2"/> 
      <span class="font-bold">成长体验</span>
    </div>
  </div>
  <div class="p-4 border-l-4 border-red-400 bg-white shadow-sm">
    <div class="flex items-center text-gray-800">
      <carbon:improve-relevance class="text-red-500 mr-2"/> 
      <span class="font-bold">不足改进</span>
    </div>
  </div>
  <div class="p-4 border-l-4 border-teal-500 bg-white shadow-sm">
    <div class="flex items-center text-gray-800">
      <carbon:checkmark class="text-teal-600 mr-2"/> 
      <span class="font-bold">未来规划</span>
    </div>
  </div>
</div>

---
layout: two-cols
---

# 个人介绍
<div class="text-left mt-5 text-gray-800">
  <div class="flex items-center mb-4">
    <carbon:identification class="text-blue-600 mr-2"/>
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
    <carbon:skill-level-basic class="text-purple-600 mr-2"/>
    <span class="font-bold text-lg">技术专长</span>
  </div>
  <div class="flex flex-wrap gap-2">
    <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded">React18</span>
    <span class="px-2 py-1 bg-green-100 text-green-800 rounded">Vue3</span>
    <span class="px-2 py-1 bg-amber-100 text-amber-800 rounded">微前端</span>
    <span class="px-2 py-1 bg-teal-100 text-teal-800 rounded">性能优化</span>
  </div>
</div>

::right::

<div class="ml-5">
  <div class="flex items-center mb-4 mt-10 text-gray-800">
    <carbon:portfolio class="text-green-600 mr-2"/>
    <span class="font-bold text-lg">项目经验</span>
  </div>

  <div class="space-y-4">
    <div class="p-3 bg-white rounded border border-blue-200 shadow-sm">
      <div class="font-semibold text-blue-700">选人组件重构</div>
      <div class="text-xs mt-1 text-gray-600">统一接口设计 · 主题适配 · 静态调用</div>
    </div>
    <div class="p-3 bg-white rounded border border-green-200 shadow-sm">
      <div class="font-semibold text-green-700">分级管控系统</div>
      <div class="text-xs mt-1 text-gray-600">流程授权 · 批量处理 · 权限管理</div>
    </div>
    <div class="p-3 bg-white rounded border border-amber-200 shadow-sm">
      <div class="font-semibold text-amber-700">主题系统升级</div>
      <div class="text-xs mt-1 text-gray-600">新主题开发 · 兼容性处理 · 配置管理</div>
    </div>
  </div>
</div>

---
layout: default
---

# 试用期工作总结
<div class="grid grid-cols-3 gap-6 mt-10">
  <div class="p-4 bg-white rounded-xl border border-blue-200 shadow-sm">
    <div class="text-lg text-blue-600 mb-3 font-bold">核心任务</div>
    <ul class="text-sm ml-4 list-disc space-y-2 text-gray-700">
      <li>选人组件静态调用</li>
      <li>批量选择功能实现</li>
      <li>分级管控流程授权</li>
      <li>新主题系统开发</li>
    </ul>
  </div>

  <div class="p-4 bg-white rounded-xl border border-green-200 shadow-sm">
    <div class="text-lg text-green-600 mb-3 font-bold">BUG修复</div>
    <ul class="text-sm ml-4 list-disc space-y-2 text-gray-700">
      <li>解决20+历史遗留问题</li>
      <li>客户紧急问题响应</li>
      <li>性能瓶颈优化</li>
    </ul>
  </div>

  <div class="p-4 bg-white rounded-xl border border-purple-200 shadow-sm">
    <div class="text-lg text-purple-600 mb-3 font-bold">协作支持</div>
    <ul class="text-sm ml-4 list-disc space-y-2 text-gray-700">
      <li>跨团队技术方案支持</li>
      <li>新人指导与文档编写</li>
      <li>Code Review规范建立</li>
    </ul>
  </div>
</div>

<div class="mt-10 p-5 bg-gray-50 rounded-lg border border-gray-200">
  <div class="flex justify-between items-center">
    <div class="text-gray-800 font-bold">量化成果</div>
    <div class="text-xs text-gray-500">试用期关键指标</div>
  </div>
  <div class="grid grid-cols-4 gap-4 mt-3 text-center">
    <div>
      <div class="text-2xl font-bold text-green-600">97%</div>
      <div class="text-xs mt-1 text-gray-600">BUG解决率</div>
    </div>
    <div>
      <div class="text-2xl font-bold text-blue-600">18</div>
      <div class="text-xs mt-1 text-gray-600">文档产出</div>
    </div>
    <div>
      <div class="text-2xl font-bold text-amber-600">4+</div>
      <div class="text-xs mt-1 text-gray-600">核心功能交付</div>
    </div>
    <div>
      <div class="text-2xl font-bold text-teal-600">100%</div>
      <div class="text-xs mt-1 text-gray-600">关键任务完成率</div>
    </div>
  </div>
</div>

---
layout: two-cols
---

# 技术亮点与突破
<div class="text-left mt-8 text-gray-800">
  <div class="flex items-center mb-4">
    <carbon:idea class="text-blue-600 mr-2 text-xl"/>
    <span class="font-bold text-xl">选人组件重构</span>
  </div>
  <div class="text-sm space-y-3 text-gray-700">
    <div class="flex items-start">
      <carbon:checkmark-filled class="text-green-500 mt-1 mr-2 flex-shrink-0"/>
      <span>解决公文业务组微流程阻塞问题</span>
    </div>
    <div class="flex items-start">
      <carbon:settings-adjust class="text-blue-500 mt-1 mr-2 flex-shrink-0"/>
      <span>静态调用模式实现，降低耦合度</span>
    </div>
    <div class="flex items-start">
      <carbon:rocket class="text-amber-500 mt-1 mr-2 flex-shrink-0"/>
      <span>复用性提升，代码冗余减少40%</span>
    </div>
  </div>

  <div class="mt-8">
    <div class="flex items-center mb-4">
      <carbon:group-security class="text-green-600 mr-2 text-xl"/>
      <span class="font-bold text-xl">分级管控优化</span>
    </div>
    <div class="text-sm space-y-3 text-gray-700">
      <div class="flex items-start">
        <carbon:improve-relevance class="text-purple-500 mt-1 mr-2 flex-shrink-0"/>
        <span>流程授权机制重构</span>
      </div>
      <div class="flex items-start">
        <carbon:list-boxes class="text-teal-500 mt-1 mr-2 flex-shrink-0"/>
        <span>批量处理功能实现</span>
      </div>
    </div>
  </div>
</div>

::right::

<div class="ml-10">
  <div class="mt-10">
    <div class="flex items-center mb-4">
      <carbon:paint-brush class="text-amber-600 mr-2 text-xl"/>
      <span class="font-bold text-xl">主题系统升级</span>
    </div>
    <div class="bg-amber-50 p-4 rounded-lg border border-amber-200">
      <div class="text-sm flex items-center mb-2 text-amber-700">
        <carbon:warning class="text-amber-600 mr-2"/>
        挑战：使用范围广，功能牵一发动全身
      </div>
      <div class="text-sm space-y-2 text-gray-700">
        <div class="flex items-start">
          <carbon:connect-target class="text-blue-500 mt-1 mr-2 flex-shrink-0"/>
          <span>统一接口规范设计</span>
        </div>
        <div class="flex items-start">
          <carbon:data-check class="text-green-500 mt-1 mr-2 flex-shrink-0"/>
          <span>兼容性处理方案</span>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-10 p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-teal-200">
    <div class="flex items-center text-teal-800">
      <carbon:collaborate class="text-teal-700 mr-2 text-xl"/>
      <span class="font-bold">协作突破</span>
    </div>
    <div class="text-sm text-gray-700 mt-3 space-y-2">
      <li>推动跨团队技术方案落地</li>
      <li>建立Code Review规范流程</li>
    </div>
  </div>
</div>

---
class: text-center
---

# 成长与体验
<div class="grid grid-cols-2 gap-8 mx-auto mt-12 max-w-4xl">
  <div class="text-left">
    <div class="flex items-center mb-4 text-gray-800">
      <carbon:growth class="text-blue-600 mr-2 text-xl"/>
      <span class="font-bold text-xl">专业成长</span>
    </div>
    <ul class="text-sm space-y-3 text-gray-700 ml-6 list-disc">
      <li>微前端架构深度实践</li>
      <li>复杂组件设计能力提升</li>
      <li>工程化思维建立</li>
    </ul>
  </div>
  
  <div class="text-left">
    <div class="flex items-center mb-4 text-gray-800">
      <carbon:recommend class="text-green-600 mr-2 text-xl"/>
      <span class="font-bold text-xl">优化建议</span>
    </div>
    <ul class="text-sm space-y-3 text-gray-700 ml-6 list-disc">
      <li>建立组件位置索引文档</li>
      <li>引入AI辅助开发流程</li>
      <li>优化任务优先级评估</li>
    </ul>
  </div>
</div>

<div class="mt-16 p-5 bg-gray-100 rounded-xl border border-gray-300 max-w-3xl mx-auto">
  <div class="flex justify-center items-center">
    <carbon:quotes class="text-gray-500 text-3xl mr-4"/>
    <div class="text-lg italic text-gray-700">
      "在V8中台的技术深度与协作氛围中，实现了专业能力的快速成长"
    </div>
  </div>
</div>

---
layout: two-cols
---

# 不足与改进
<div class="text-left mt-8 text-gray-800">
  <div class="flex items-center mb-4">
    <carbon:warning-alt class="text-red-500 mr-2 text-xl"/>
    <span class="font-bold text-xl">待提升领域</span>
  </div>
  <div class="text-sm space-y-3 text-gray-700">
    <div>
      <div class="flex items-start">
        <carbon:stethoscope class="text-red-400 mt-1 mr-2 flex-shrink-0"/>
        <span>影响范围预判能力</span>
      </div>
      <div class="ml-8 mt-3 flex">
        <carbon:quotes class="text-gray-500 mr-1 text-2"/>
        <span>业务组件库使用范围广，调整时需要确认是否有溢出的情况</span>
        <carbon:quotes class="text-gray-500 ml-1 rotate-180 text-2"/>
      </div>
    </div>
    <div>
      <div class="flex items-start">
        <carbon:task-view class="text-amber-500 mt-1 mr-2 flex-shrink-0"/>
        <span>多任务优先级管理</span>
      </div>
      <div class="ml-8 mt-3 flex">
        <carbon:quotes class="text-gray-500 mr-1  text-2"/>
        <span>整体把握当天任务，梳理优先级依次解决</span>
        <carbon:quotes class="text-gray-500 ml-1 rotate-180 text-2"/>
      </div>
    </div>
    <div>
      <div class="flex items-start">
        <carbon:location-filled class="text-blue-500 mt-1 mr-2 flex-shrink-0"/>
        <span>组件定位效率</span>
      </div>
      <div class="ml-8 mt-3 flex">
        <carbon:quotes class="text-gray-500 mr-1 text-2"/>
        <span>深入了解项目整体结构，运用工具快速定位</span>
        <carbon:quotes class="text-gray-500 ml-1 rotate-180 text-2"/>
      </div>
    </div>
  </div>
</div>

::right::

<div class="ml-10 mt-20">
  <div class="mt-8">
    <div class="flex items-center mb-4">
      <carbon:progress-bar-round class="text-green-600 mr-2 text-xl"/>
      <span class="font-bold text-xl">改进计划</span>
    </div>
    <div class="text-sm space-y-4">
      <div class="p-3 bg-green-50 rounded border border-green-200">
        <div class="font-semibold text-green-700">技术深度专项</div>
        <div class="text-xs mt-1 text-gray-600">每周2小时研究架构设计</div>
      </div>
      <div class="p-3 bg-blue-50 rounded border border-blue-200">
        <div class="font-semibold text-blue-700">任务管理优化</div>
        <div class="text-xs mt-1 text-gray-600">采用看板工具管理优先级</div>
      </div>
      <div class="p-3 bg-teal-50 rounded border border-teal-200">
        <div class="font-semibold text-teal-700">知识体系建设</div>
        <div class="text-xs mt-1 text-gray-600">组件定位索引文档</div>
      </div>
    </div>
  </div>
</div>

---
class: text-center
---

# 未来发展规划
<div class="flex justify-center mt-12">
  <div class="w-4/5">
    <div class="flex justify-between">
      <div class="w-1/3 p-4 border-b-4 border-blue-500">
        <div class="font-bold text-blue-600 text-lg">短期目标</div>
        <ul class="text-sm mt-3 text-gray-700 space-y-2">
          <li>React生态深度实践</li>
          <li>组件库深入完善</li>
          <li>代码可维护性探索</li>
        </ul>
      </div>
      <div class="w-1/3 p-4 border-b-4 border-green-500">
        <div class="font-bold text-green-600 text-lg">中期规划</div>
        <ul class="text-sm mt-3 text-gray-700 space-y-2">
          <li>性能优化体系建立</li>
          <li>工程化工具链完善</li>
          <li>AI辅助流程落地</li>
        </ul>
      </div>
      <div class="w-1/3 p-4 border-b-4 border-purple-500">
        <div class="font-bold text-purple-600 text-lg">长期愿景</div>
        <ul class="text-sm mt-3 text-gray-700 space-y-2">
          <li>前端架构师成长路径</li>
          <li>开源项目贡献</li>
          <li>技术影响力建设</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- <div class="mt-16 p-6 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl w-3/4 mx-auto">
  <div class="text-center text-xl font-bold text-white">
    技术愿景：构建业界领先的V8中台前端技术体系
  </div>
  <div class="text-center mt-3 text-teal-100">
    "因协同·而致远"
  </div>
</div> -->

---
class: text-center
---

<div class="h-full flex flex-col items-center justify-center">
  <div class="text-5xl font-bold mb-10 text-gray-800">
    感谢聆听
  </div>
  <div class="text-2xl text-gray-600 mt-8">
    期待与团队共同成长
  </div>

  <div class="absolute bottom-20 flex flex-col items-center">
    <div class="mt-16 text-sm text-gray-500">
      杨福才 | 前端开发工程师 | 致远互联V8业务中台
    </div>
    <div class="mt-4 text-sm text-gray-400">
      2025年8月
    </div>
  </div>
</div>
