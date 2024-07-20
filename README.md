# 体韵健身导师
**体韵健身导师**是一款全面、智能的健身小程序，专为健身爱好者设计，帮助用户轻松制定和管理个性化的健身计划，实现健身目标。以下是主要功能介绍：

##### 1.用户注册及信息录入：
用户首次进入小程序时，需要注册并输入性别、年龄、身高、体重等基本信息，以便生成更精确的健身计划。

##### 2.智能健身计划生成：

用户可以选择每周的运动强度和方式，小程序内置的 AI 会生成每天的运动安排，包括运动类型、持续时间、消耗卡路里数及相关描述等。
用户可以根据自身需求手动调整计划，最终确认并设置为个人的运动计划。
##### 3.运动打卡与荣誉勋章：

每天完成健身计划后进行打卡，记录自己的健身进度。
根据打卡天数获得相应的荣誉勋章，激励自己坚持健身。
##### 4.用户排行榜单：
设置用户排行榜单，展示不同用户的健身成果，激发用户的竞争意识，促进健身效果。

##### 5.小AI动作指导：
小程序内置智能 AI，用户可以随时向 AI 询问健身动作的指导和建议，确保每个动作的正确性和安全性。

##### 6.健身社区：

与其他健身爱好者分享自己的健身经验和成果。
从社区中的其他用户获取灵感和建议。
参加健身挑战活动，与其他用户一起努力实现目标。

> 体韵健身导师，您的智能健身助手，帮助您科学健身、健康生活！无论是新手还是健身达人，都能在这里找到适合自己的健身计划，结识志同道合的健身伙伴，共同追求更好的自己。
## 项目启动
1.安装pnpm包管理工具  ``` npm run pnpm -g ```
2.安装相关依赖 ``` pnpm i ```
3.编译成小程序项目并启动热更新 ```pnpm run dev:mp-weixin ```
4.打开微信开发者工具，选择项目目录即可

## 技术栈
- Vue3 
- Typescript
- Pinia https://pinia.vuejs.org/zh/
- Scss

## 开发环境
- Node.js 22.3.0

## 开发工具
- Vite 脚手架
- ESLint 代码检查工具
- Apifox 接口管理工具
- Chrome 浏览器
- dayjs 日期处理库 https://dayjs.fenxianglu.cn/
- lodash 工具库 https://www.lodashjs.com/
- Git 版本控制
- Uni-ui 组件库 https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html
- Pinia-plugin-persistedstate 状态持久化插件 https://prazdevs.github.io/pinia-plugin-persistedstate/zh/

## 项目结构
- .vscode vscode配置
- dist 打包后的文件
- node_modules 依赖包
- src
  - api 接口
  - components 公共组件
  - pages 页面
  - static 静态资源
  - store 公共仓库（统一管理）
  - types 类型定义
  - utils 工具函数
  - App.vue 根组件
  - main.ts 入口文件
  - manifest.json 各端配置
  - pages.json 各端配置
- .gitignore git 忽略文件
- .editorconfig 编辑器配置
- .eslint.config.mjs eslint配置
- index.html 入口文件
- package-lock.json 依赖关系
- package.json 依赖项
- README.md 项目说明
- tsconfig.json typescript配置
- vite.config.ts vite配置
