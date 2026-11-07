# eyotech 公司官网

深圳市易游互娱科技有限公司的静态公司介绍网站。

页面包含公司介绍、业务方向、联系方式及网站隐私说明，支持中英文切换和手机、电脑访问。

## 文件

- `index.html`：官网首页
- `privacy.html`：网站隐私说明
- `styles.css`：响应式样式
- `site.js`：语言切换与邮箱复制交互
- `favicon.svg`：网站图标
- `.nojekyll`：直接发布静态文件

## GitHub Pages

在仓库 Settings → Pages 中，选择 Deploy from a branch，使用 `main` 分支的 `/ (root)` 目录发布。

所有页面资源均使用相对路径，可用于 GitHub Pages 项目站点。公开网页中不包含第三方广告或访问分析代码。

## 本地查看

在本目录运行 `python -m http.server 8000 --bind 127.0.0.1`，然后访问 `http://127.0.0.1:8000/`。

## 维护

修改并提交对应 HTML、CSS 或 JavaScript 文件后，GitHub Pages 会按仓库配置重新发布。

© 2026 深圳市易游互娱科技有限公司。保留所有权利。
