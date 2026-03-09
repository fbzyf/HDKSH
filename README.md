# 北陆电子 · 上海精陆 官网

## 项目简介

本项目为 **hdksh.com** 域名下的电子元器件代理公司官方网站。

- **北陆电子香港有限公司**（Hokuriku Hong Kong Ltd）
- **上海精陆电子科技有限公司**（Shanghai Jinglu Electronics Technology Co., Ltd.）

网站采用现代化设计，具有科技感与行业特色，区别于传统企业站的千篇一律风格。

## 技术栈

- **HTML5** - 语义化结构
- **CSS3** - 现代样式、动画、响应式布局
- **JavaScript** - 交互逻辑（无框架依赖）

## 项目结构

```
HDKSH/
├── index.html          # 首页
├── brands.html         # 代理品牌页
├── about.html          # 关于我们
├── contact.html        # 联系我们
├── css/
│   └── style.css       # 全局样式
├── js/
│   └── main.js         # 交互脚本
├── assets/             # 静态资源（图片等）
└── README.md           # 项目说明
```

## 功能说明

### 首页 (index.html)
- 英雄区 Banner
- 公司简介摘要
- 代理品牌快速入口
- 核心优势展示
- 联系引导

### 代理品牌 (brands.html)
- **特色设计**：卡片式布局、区域筛选（美国/日本/韩国/台湾）、悬停动效
- 品牌信息：BOURNS、HDK、KEC、NGI、Shin-Etsu、UTC、WINBOND
- 每个品牌展示：名称、国家、简介、产品线标签

### 关于我们 (about.html)
- 公司发展历程
- 团队与理念
- 资质与优势

### 联系我们 (contact.html)
- 联系表单
- 地址、电话、邮箱
- 地图占位（可后续接入）

## 部署说明

### 方式一：Namecheap 静态托管
1. 将项目文件上传至 Namecheap 提供的托管空间
2. 确保 `index.html` 位于根目录
3. 在域名管理中将 hdksh.com 指向托管地址

### 方式二：GitHub Pages
1. 创建 GitHub 仓库并推送代码
2. Settings → Pages → 选择分支部署
3. 在 Namecheap 域名设置中添加 CNAME 记录指向 `用户名.github.io`

### 方式三：Netlify / Vercel
1. 连接 GitHub 仓库或直接上传
2. 自动构建部署
3. 在 Namecheap 添加 A 记录或 CNAME

## 本地预览

直接用浏览器打开 `index.html`，或使用本地服务器：

```bash
# Python 3
python -m http.server 8080

# Node.js (需安装 npx)
npx serve .
```

然后访问 http://localhost:8080

## 设计特色（相比参考站 lpfbao.com）

- **深色科技风**：深色背景 + 青色高亮，突出电子/工业气质
- **电路板网格背景**： subtle 网格装饰，增强行业辨识度
- **品牌区域筛选**：可按美国/日本/韩国/台湾快速筛选品牌
- **卡片悬停动效**：左侧高亮条、上浮阴影，提升交互感
- **Orbitron 字体**：科技感标题字体，增强品牌记忆点
- **滚动渐显**：品牌卡片进入视口时淡入，提升浏览体验

## 部署到 Namecheap（hdksh.com）

1. 登录 Namecheap → 域名列表 → 找到 hdksh.com → Manage
2. 若使用 **Namecheap 托管**：在 Hosting 中上传本项目所有文件到 `public_html`
3. 若使用 **第三方托管**（如 Netlify/GitHub Pages）：
   - 在 Netlify 等平台部署项目
   - 在 Namecheap → Domain List → Manage → Advanced DNS 中添加：
     - A Record: `@` → 托管平台提供的 IP
     - CNAME: `www` → 托管平台提供的域名（如 `xxx.netlify.app`）

## 后续可改进

- [ ] 添加产品目录/选型工具
- [ ] 接入在线询价表单（如 Formspree、EmailJS）
- [ ] 多语言支持（中/英）
- [ ] SEO 优化（meta 标签、sitemap）
- [ ] 接入真实地图 API
- [x] 联系页已填写：上海虹漕路25-1号2楼、香港九龙湾福康工业大厦9楼905室、电话 13701760763
