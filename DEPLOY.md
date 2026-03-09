# 部署指南：GitHub Pages + hdksh.com

## 第一步：在 GitHub 创建仓库

1. 打开 https://github.com/new
2. 填写：
   - **Repository name**：`HDKSH`（或任意名称，如 `hdksh-website`）
   - **Description**：北陆电子 / 上海精陆 官网
   - 选择 **Public**
   - **不要**勾选 "Add a README"（本地已有）
3. 点击 **Create repository**

## 第二步：推送代码到 GitHub

创建仓库后，GitHub 会显示命令。在项目目录 `d:\Code\HDKSH` 下执行（将 `YOUR_USERNAME` 替换为你的 GitHub 用户名）：

```powershell
cd "d:\Code\HDKSH"
git remote add origin https://github.com/YOUR_USERNAME/HDKSH.git
git branch -M main
git push -u origin main
```

> 若 GitHub 默认分支是 `master`，则用 `git push -u origin master`

## 第三步：开启 GitHub Pages

1. 进入仓库 → **Settings** → 左侧 **Pages**
2. **Source**：选择 **Deploy from a branch**
3. **Branch**：选择 `main`（或 `master`），路径选 **/ (root)**
4. 点击 **Save**

几分钟后，网站会出现在：`https://YOUR_USERNAME.github.io/HDKSH/`

## 第四步：绑定自定义域名 hdksh.com

1. 在 **Pages** 设置页，找到 **Custom domain**
2. 输入：`hdksh.com`
3. 点击 **Save**
4. 若提示 **Enforce HTTPS**，建议勾选（需 DNS 生效后）

## 第五步：在 Namecheap 配置 DNS

登录 Namecheap → 域名列表 → hdksh.com → **Manage** → **Advanced DNS**

添加以下记录：

| Type | Host | Value | TTL |
|------|------|-------|-----|
| **A** | @ | 185.199.108.153 | Automatic |
| **A** | @ | 185.199.109.153 | Automatic |
| **A** | @ | 185.199.110.153 | Automatic |
| **A** | @ | 185.199.111.153 | Automatic |
| **CNAME** | www | YOUR_USERNAME.github.io | Automatic |

> 将 `YOUR_USERNAME` 替换为你的 GitHub 用户名

删除或修改原有的冲突记录（如有）。

## 等待生效

- DNS 生效通常需要 **10 分钟 ~ 48 小时**
- 生效后访问 https://hdksh.com 即可看到网站

## 常见问题

**Q：www.hdksh.com 打不开？**  
A：确保 CNAME 记录中 www 指向 `YOUR_USERNAME.github.io`，且 GitHub Pages 的 Custom domain 可填 `www.hdksh.com` 或保持 `hdksh.com`（根域名）。

**Q：HTTPS 证书无效？**  
A：等 DNS 完全生效后，在 GitHub Pages 设置中勾选 "Enforce HTTPS"。

**Q：推送后网站没更新？**  
A：GitHub Pages 部署约需 1–2 分钟，刷新或清除缓存后再试。
