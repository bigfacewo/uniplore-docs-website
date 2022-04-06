# Uniplore文档站点

本站点使用 [Docusaurus 2](https://docusaurus.io/) 构建, 一个前卫的静态网页生成器。

### 安装

```
$ yarn install
```

### 本地开发

```
$ yarn start
```

此命令可以启动一个本地开发服务和打开一个浏览器窗口。绝大部分变更会实时渲染而无需再次启动服务。

### 指定语言环境运行方式

```
$ yarn start -- --locale zh-cn 
```

### 编译

```
$ yarn build
```

此命令生成静态内容到`build`文件夹且可以使用任何静态内容托管服务。

### 部署

使用SSH:

```
$ USE_SSH=true yarn deploy
```

不使用SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

如果您使用Github页面进行托管，此命令是一种构建网站并推送到“gh-pages”分支的方便方法。

### 初始化i18n(多语言)文件夹

[i18n(多语言)文件夹文档](https://docusaurus.io/docs/i18n/git)

例如:
```bash
 $ yarn write-translations -- --locale zh-cn
 ```
 或
 ```bash
 yarn write-translations -- --locale en
 ```

 ### react代码i18n(多语言环境)

简单使用

使用翻译之前
```react
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to my website</h1>
      <main>
        You can also visit my
        <Link to="https://docusaurus.io/blog">blog</Link>
        <img
          src="/img/home.png"
          >
      </main>
    </Layout>
  );
}
```

使用翻译之后
```react
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import Translate, {translate} from '@docusaurus/Translate';

export default function Home() {
  return (
    <Layout>
      <h1>
        <Translate>Welcome to my website</Translate>
      </h1>
      <main>
        <Translate
          id="homepage.visitMyBlog"
          description="The homepage message to ask the user to visit my blog"
          values={{
            blogLink: (
 <Link to="https://docusaurus.io/blog">
                <Translate
                  id="homepage.visitMyBlog.linkLabel"
                  description="The label for the link to my blog">
                  blog
                </Translate>
              </Link>
            ),
          }}>
          {'You can also visit my {blogLink}'}
        </Translate>

        <img
          src="/img/home.png"
          alt={
            >
      </main>
    </Layout>
  );
}
```

more complex use [React-intl](https://www.jianshu.com/p/3b404d131634) for more advanced use-cases.

### 多版本文档

> 使用此命令创建1.1.0版本

```bash
$ yarn docusaurus docs:version 1.1.0
```

### 更多文档

More docs about docusaurus, [Click Me](https://docusaurus.io/docs)

