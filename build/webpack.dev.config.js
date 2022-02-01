const base = require("./webpack.base.config")
const {merge} = require("webpack-merge")
const webpack = require("webpack")
const config = require('.././config/dev.config')

module.exports = merge(base, {
    // This contains additional production settings
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                API_KEY: JSON.stringify(process.env.API_KEY)
            }
        })
    ],
    devServer: {
        port: 8083,
        host: "0.0.0.0",
        overlay: true,
        disableHostCheck: true,
        proxy: {
             '/auth/*': {
                 "secure": false,
                 "changeOrigin": true,
                //  "target": "https://testing-onboarding.moove.africa"
                //   "target": "http://localhost:8181"
                "target": "https://dev.cemcscoop.com/"
             },
             '/loans/*': {
                 "secure": false,
                 "changeOrigin": true,
                //  "target": "https://testing-onboarding.moove.africa"
                //   "target": "http://localhost:8181"
                "target": "https://dev.cemcscoop.com/"
             },
             '/membership/*': {
                 "secure": false,
                 "changeOrigin": true,
                //  "target": "https://testing-onboarding.moove.africa"
                //   "target": "http://localhost:8181"
                "target": "https://dev.cemcscoop.com/"
             },
            // '/ws': {
            //     target: 'ws://localhost:8181',
            //     changeOrigin: true,
            //     ws: true
            // },
        }
    }

})
