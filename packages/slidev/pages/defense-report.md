---
theme: seriph
# theme: apple-basic
background: https://cover.sli.dev
title: Defense Report
# title: V8业务中台转正述职报告
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
mode: dark
---

<!-- # Template For Work

Probation confirmation defense template.

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white  op-10">
  Press Space for next page <carbon:arrow-right />
</div> -->

# 转正述职报告

———— 关于我自己，与在试用期阶段的产出，思考与感悟。

<div @click="$slidev.nav.next" class="mt-12 py-1 text-3" hover:bg="white  op-10">
  按空格键进入 <carbon:arrow-right />
</div>

<div class="absolute bottom-15 left-200 flex items-center">
  <span class="text-2.9">演讲人：杨福才</span>
</div>

<SeeyonIcon />

---
transition: slide-up
layout: image-right
image: https://cover.sli.dev
---

<SeeyonIcon />

# <SeeyonText>述职报告概览</SeeyonText>

- 🧑‍💻 个人介绍
- 📅 试用期工作总结
- ✨ 试用期亮点工作
- 🎁 个人成长/工作体验/建议
- 🎈 工作不足之处/改进计划
- 🎉 展望规划

---
transition: fade-out
layout: two-cols
---

<SeeyonIcon />

# <SeeyonText>个人介绍</SeeyonText>

<div class="text-left mt-8">

  **专业背景**
  <div class="mt-6">
   <div class="ml-4 mt-3 space-y-2">
      <div class="flex items-center">
        <carbon:home class="text-red-400 mr-2"/>
        <span class="text-red-500">西南民族大学</span>  <pre> | </pre> 2016.09 - 2020.06
      </div>
      <div class="flex items-center">
        <carbon:api-key class="text-purple-400 mr-2"/> 
        四年以上前端开发经验
      </div>
    </div>
  </div>

  **技术专长**
  <div class="mt-6">
    <div class="ml-4 mt-3 space-y-2">
      <div class="flex items-center">
        <carbon:code class="text-blue-400 mr-2"/>
        项目重构与可维护设计
      </div>
      <div class="flex items-center">
        <carbon:data-vis-2 class="text-purple-400 mr-2"/>
        前端性能优化 & 结构调优
      </div>
      <div class="flex items-center">
        <carbon:deploy-rules class="text-green-400 mr-2"/>
        微前端集成与工程化
      </div>
    </div>
  </div>

</div>

::right::

<div class="mt-8 text-left">
  <div class="flex items-center mb-3 text-blue-300">
    <carbon:code class="mr-2"/>
    技术栈全景
  </div>
  <div class="flex flex-wrap gap-1">
    <div class="px-2 py-1 bg-gray-800 rounded text-xs">React18</div>
    <div class="px-2 py-1 bg-gray-800 rounded text-xs">Vue3</div>
    <div class="px-2 py-1 bg-gray-800 rounded text-xs">TypeScript</div>
    <div class="px-2 py-1 bg-gray-800 rounded text-xs">Vite</div>
    <div class="px-2 py-1 bg-gray-800 rounded text-xs">TailwindCSS</div>
    <div class="px-2 py-1 bg-gray-800 rounded text-xs">Monorepo</div>
    <div class="px-2 py-1 bg-gray-800 rounded text-xs">Micro-frontend</div>
    <div class="px-2 py-1 bg-gray-800 rounded text-xs">Node.js</div>
  </div>
</div>

<div class="mt-10 text-left">
  <div class="text-lg font-bold mb-2 flex items-center">
    <carbon:portfolio class="text-yellow-400 mr-2"/>
    工作履历
  </div>

  <div class="space-y-4">
    <!-- <div class="p-4 bg-gray-800 rounded-lg">
      <div class="flex items-center mb-1">
        <span class="font-semibold text-base text-blue-300">致远互联 · V8业务中台</span>
        <span class="ml-3 text-xs text-gray-400">2025.06 - 至今</span>
      </div>
      <div class="text-sm text-gray-200 mb-1">前端工程师</div>
      <ul class="list-disc ml-5 text-xs text-gray-300 space-y-1">
        <li>负责V8-Cube组件库重构与维护，推动组件复用率提升至85%</li>
        <li>主导中台微前端架构整合，提升系统可扩展性</li>
        <li>参与X-Console控制台性能优化，首屏加载时间缩短46%</li>
        <li>推动前端工程化建设，完善CI/CD流程与代码规范</li>
      </ul>
    </div> -->
    <div class="p-4 bg-gray-800 rounded-lg">
      <div class="flex items-center mb-1">
        <span class="font-semibold text-base text-purple-300">某互联网公司 · 前端部门</span>
        <span class="ml-3 text-xs text-gray-400">2020.06 - 2024.10</span>
      </div>
      <div class="text-sm text-gray-200 mb-1">前端开发工程师</div>
      <ul class="list-disc ml-5 text-xs text-gray-300 space-y-1">
        <li>参与内部SaaS平台开发，服务军工企业</li>
        <li>负责前端性能优化与组件库开发</li>
        <li>推动团队技术分享与基础设施建设</li>
      </ul>
    </div>
  </div>
</div>

---
layout: default
---

<SeeyonIcon />
<!-- <FlowLightEffect /> -->

# <SeeyonText>试用期工作内容</SeeyonText>

入职以来工作内容涉及到三个模块：任务项开发、BUG修复以及客户BUG解决。

**核心项目**
- 🧩 V8-Cube组件库重构(v1.2 → v2.0)
- 🚀 X-Console控制台性能优化
- 🧱 V8-SDK工具链开发与维护
- 🖥️ 中台微前端架构整合

**日常工作**
- 业务需求开发与Code Review
- CI/CD流水线维护
- 前端工程化建设
- 新人技术指导


---

<SeeyonIcon />

# <SeeyonText>试用期工作内容</SeeyonText>

<div class="mt-4 p-5 rounded-xl">

**量化产出统计**

<v-clicks>

| 维度          | 数量 | 成果 |
|---------------|------|------|
| 组件开发      | 24个 | 复用率达85% |
| 性能优化      | 8项 | 加载时间↓46% |
| 提交次数      | 132  | 代码质量↑30% |
| Bug解决率     | 97%  | 关键问题解决率100% |
| 文档编写      | 18篇 | 团队知识沉淀 |

</v-clicks>
</div>

---
class: "pt-16"
---

<SeeyonIcon />

# 技术亮点与突出价值

<div class="grid grid-cols-2 gap-6 mt-12">
  <div v-click class="p-5 bg-gradient-to-br from-blue-900 to-gray-900 rounded-xl">
    <div class="text-xl text-blue-300 mb-3 flex items-center">
      <carbon:chart-3d class="mr-2" /> 性能突破
    </div>
    <ul class="text-sm ml-4 list-disc space-y-2">
      <li>X-Console首屏加载时间从3.2s → 1.7s</li>
      <li>JS体积优化: 2.4MB → 1.1MB (BundlePhobia分析)</li>
      <li>LCP指标改善: 2.8s → 1.4s</li>
    </ul>
  </div>
  
  <div v-click class="p-5 bg-gradient-to-br from-purple-900 to-gray-900 rounded-xl">
    <div class="text-xl text-purple-300 mb-3 flex items-center">
      <carbon:web-services-container class="mr-2" /> 组件库重构
    </div>
    <ul class="text-sm ml-4 list-disc space-y-2">
      <li>TypeScript类型全覆盖</li>
      <li>Monorepo架构迁移</li>
      <li>文档自动化生成系统</li>
    </ul>
  </div>
  
  <div v-click class="p-5 bg-gradient-to-br from-teal-900 to-gray-900 rounded-xl">
    <div class="text-xl text-teal-300 mb-3 flex items-center">
      <carbon:integration class="mr-2" /> 工程化建设
    </div>
    <ul class="text-sm ml-4 list-disc space-y-2">
      <li>代码提交规范工具链搭建</li>
      <li>CI耗时优化: 32min → 18min</li>
      <li>多环境配置管理系统</li>
    </ul>
  </div>
  
  <div v-click class="p-5 bg-gradient-to-br from-amber-900 to-gray-900 rounded-xl">
    <div class="text-xl text-amber-300 mb-3 flex items-center">
      <carbon:group-resource class="mr-2" /> 团队赋能
    </div>
    <ul class="text-sm ml-4 list-disc space-y-2">
      <li>搭建前端Code Review规范</li>
      <li>组织6次技术分享</li>
      <li>新人Onboarding文档编写</li>
    </ul>
  </div>
</div>

---

<!-- <SeeyonIcon /> -->

<!-- # 试用期工作亮点/突出价值产出 ** -->

<!-- --- -->

<SeeyonIcon />

# 试用期对公司企业文化的学习和收获

<div class="mt-5 text-left">
  **价值观贯彻**
  <ul class="ml-5 mt-3 space-y-2">
    <li>客户第一: 推动建立前端体验量化体系</li>
    <li>技术前瞻: Vue3组合式API全团队推广</li>
    <li>技术担当: 主导前端基础设施升级</li>
  </ul>
</div>

<div class="mt-5">
  **协作突破**
  <ul class="ml-5 mt-3 space-y-2">
    <li>建立前后端联调Mock平台</li>
    <li>设计团队组件开发规范RFC文档</li>
    <li>主导3个项目技术方案评审</li>
  </ul>
</div>

<div class="mt-5 p-3 bg-gray-800 rounded-lg">
  <div class="text-blue-300">🎯 核心体会:</div>
  <div class="italic mt-2">"V8中台的技术深度与团队协作氛围使我快速成长"</div>
</div>

---
layout: two-cols
---

<SeeyonIcon />

# 试用期的成长和入职体验

## 专业成长与技术沉淀

<div class="text-left">
**技术提升**
- 深入掌握Vue3响应式原理
- Webpack → Vite迁移实践
- 微前端qiankun架构精通
- Web Vitals优化专项

**工程思维**
- 构建系统优化能力
- 模块化设计思维
- 前端安全知识体系
- DevOps实践能力

</div>

## 个人成长

## 工作体验

## 建议

---

<SeeyonIcon />

# 不足及改进计划

<div class="text-left">

**待提升领域与改进方案**

<div class="mt-4">

| 领域          | 具体表现                | 优先级 |
|---------------|-------------------------|--------|
| 技术深度      | 底层原理掌握不足       | ⭐⭐⭐    |
| 跨端技术      | React技术栈熟悉度不足  | ⭐⭐     |
| 架构设计      | 复杂系统设计经验欠缺   | ⭐⭐     |
| 业务理解      | 产品思维需强化         | ⭐      |
</div>
</div>

---

<SeeyonIcon />

# 不足及改进计划

<div class="text-left">

**提升路径**

<div class="mt-4 pl-2 space-y-4">

1. **专题攻坚计划**  
   - 浏览器原理/编译原理专研
   - React专项学习（认证目标）
   
2. **复杂系统实践**  
   - 主导中台大型项目架构设计
   - 参与跨团队技术方案设计
   
3. **业务产品融合**  
   - 定期参加产品需求评审
   - 学习业务领域知识
</div>

<div class="mt-6 p-3 bg-blue-900 rounded">
  <carbon:sys-provision class="inline-block mr-2"/> Q4目标: 前端架构能力提升Level
</div>
</div>

---

<SeeyonIcon />

# 未来技术规划

<div class="grid grid-cols-3 gap-6 mt-16">
  <div v-click class="p-5 bg-gray-900 rounded-xl shadow-lg">
    <div class="i-logos:vue text-4xl mb-3"></div>
    <div class="text-xl">Vue生态深化</div>
    <div class="text-sm mt-2">Vue3高级特性实践<br>组件库生态建设</div>
  </div>
  
  <div v-click class="p-5 bg-gray-900 rounded-xl shadow-lg">
    <div class="i-logos:typescript-icon text-4xl mb-3"></div>
    <div class="text-xl">基建升级</div>
    <div class="text-sm mt-2">研发效能工具链<br>可视化部署平台</div>
  </div>
  
  <div v-click class="p-5 bg-gray-900 rounded-xl shadow-lg">
    <div class="i-carbon:ai text-4xl text-purple-400 mb-3"></div>
    <div class="text-xl">AI工程化</div>
    <div class="text-sm mt-2">AIGC辅助开发<br>自动化测试体系</div>
  </div>
</div>

<div v-click class="mt-16 text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent inline-block p-2">
  技术愿景: 构建业界领先的V8中台前端技术体系
</div>

---
class: text-center
---

<SeeyonIcon />

<div class="h-full flex flex-col items-center justify-center">
  <div class="text-5xl font-bold mb-10">
    <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
      <span>因协同 · 而致远</span>
    </span>
  </div>
  <div class="text-1xl op-80 mt-8">
    感谢V8中台团队的支持与指导
  </div>
</div>
