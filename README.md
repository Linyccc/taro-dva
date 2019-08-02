# 基于 taro+dva

> 参考 antd 的编译风格

1. 全局安装 taro-cli

```bash
npm install -g @tarojs/cli
```

2. 安装依赖

```bash
npm install
```

3. 启动相对应的编译

```bash
npm run dev:weapp    --小程序
```

## 目录

🔒 表示 fish-cli 约定的文件夹

```javascript
|--- config                                 🔒
|--- dist                                   🔒
|--- node_modules                           🔒
|--- src                                    🔒
     |--- asset                             图片/icon
     |--- components                        自定义公用组件
     |--- model                             🔒整合各模块的model
     |--- page                              🔒各模块内容
          |--- index                        首页
               |--- index.js
               |--- index.scss
               |--- service                 模块service
               |--- model                   模块model
....
...
..
.
```

注：标注 **项目级** 的可以根据当前所在的项目 自行删改
