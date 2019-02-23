#### webpack

webpack有四大核心概念:


entry      入口  string|array|object

只指定入口，不指定出口，默认会生成到dist目录main.js内

单入口：


多入口：



output     出口

{
    filename：文件名

    path：    输出的路径(绝对的)
}

loader     加载器    webpack本身只识别js，loader可以转换非js的文件

plugins    扩展webpack功能的，在整个构建过程中都有效





