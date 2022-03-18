const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const path = require('path');
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false,// 关闭语法检查
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  pluginOptions: {
    "style-resources-loader": {
        preProcessor: "less",
        patterns: [
           // 存放less变量文件的路径
            path.resolve(__dirname, "./src/assets/less/parameter.less")
        ]
    }
},
css: {
    loaderOptions: {
        less: {
            lessOptions: {
                modifyVars: {
                    'primary-color': '#ec6800'
                },
                javascriptEnabled: true,
            },
        },
    },
}
};

