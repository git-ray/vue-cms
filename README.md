# 购物APP
## 牛不牛你自己看

## 制作首页APP组件
1. 完成Header区域用的是Mint-ui中的header组件
2. 制作底部的Tabbar区域，使用的是MUI的Tabbar.html
 + 在制作购物车 小图标的时候，操作会多一些：
 + 先把扩展图标的CSS拷贝到项目中
 + 把扩展字体库ttf文件 拷贝到项目中
 + 为购物车小图标添加 mio-icon mui-icon-extra mio-icon-extra-cart实现购物车图标
3. 在中间区域放置一个 router-view来展示路由匹配的内容组件


## 改造tabbar为router-link

## 设置路由高亮

## 点击tabbar 中的路由连接，占时对应的路由组件

## 制作首页轮播图

## 加载首页轮播图数据
1. 获取数据，使用vue-resource
2. 使用vue-resource的this.$http.get获取数据
3. 获取到的数据 要 保存到data身上
4. 使用v-for 循环渲染到每个 item上

## 改造九宫格区域的样式