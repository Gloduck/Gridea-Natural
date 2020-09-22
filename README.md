这是一个基于Gridea的主题，大部分功能已经完成完毕，其他bug以及一些小功能以后再更新。

虽然不能说功能齐全，但是该有的功能还是都有了

使用效果请参考：[博客](https://mxecy.cn)

![设置](https://tva1.sinaimg.cn/large/006ZFECEgy1ggfhz9wuiej31bp0pk75c.jpg)

![设置](https://tva1.sinaimg.cn/large/006ZFECEgy1ggfhzo4dwrj31bn0p640r.jpg)

# 注意

1. 如果您要对主题进行修改，请fork一份。
2. 如果觉得主题还不错可以来一个star
3. 由于比较懒，所以这个可能不会怎么更新
4. 请勿用于商业用途

# 已开发功能

## 代码高亮

主题使用的代码高亮是：prismjs

默认使用的是OKAIDIA，如果你想使用其他样式，请访问[官网](<https://prismjs.com/>)自定义后，替换主题目录asset/media/js和asset/media/css 相关文件

![代码高亮](https://tvax1.sinaimg.cn/large/006ZFECEgy1ggfi0eg1mpj30qs0jmtbw.jpg)

## 搜索功能

搜索功能使用的是项目：<https://github.com/tangkaichuan/gridea-search>

但是他的模糊搜索功能好像有点Bug懒得改了，等作者修复

![搜索](https://tvax2.sinaimg.cn/large/006ZFECEgy1ggfi1dsy8kj31hb0mrqic.jpg)

## 列表多样式支持

支持三种不同的列表样式

- 默认样式

![默认样式](https://tvax4.sinaimg.cn/large/006ZFECEgy1ggfi2ww2eoj30qk0egwio.jpg)

- 普通样式

![普通样式](https://tva3.sinaimg.cn/large/006ZFECEgy1ggfi2a1mayj30qg09341m.jpg)

- 混合样式（默认+普通）

![混合样式](https://tva3.sinaimg.cn/large/006ZFECEgy1ggfi6lupqoj30rx0m9gsi.jpg)

## 列表页评论数显示

注意：要使用评论数显示必须开启Valine

## 封面图片支持

目前支持多种封面图片，如果存在多个将展示优先级高的，其优先级如下：

1. 图片文章封面
2. 随机图片API
3. 自定义随机封面图片（指定了多个封面图片，必须同时指定用于随机的图片的数量。否则不会生效）
4. 默认封面图片

![封面图片](https://tva2.sinaimg.cn/large/006ZFECEgy1ggfi7ewfe7j30qr0j3my3.jpg)

## 网站列表页公告

![公告](https://tva2.sinaimg.cn/large/006ZFECEgy1ggfi7xwk2sj30tn0bzgmm.jpg)

## 文章内部提示

![内部提示](https://tva1.sinaimg.cn/large/006ZFECEgy1ggfi8gxdcpj30oz0563yp.jpg)

## 返回顶部

- 需要自定义返回顶部的图片

## 复制版权保护

- 由于复制的时候会导致代码也被加上版权，不建议开启，以后有时间解决这个问题

# 更新日志

2020-07.05：第一版发布
2020-09-22：增加了JsDeliver加速功能，防止挂GitHub上的静态资源加载慢

# 待开发功能

- 文章内部目录
- PJAX全局刷新

# 待修复功能

- 搜索模糊搜索有点问题
- 分享有点问题

