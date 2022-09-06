module.exports = {
    devServer: {
        port: process.env.VUE_APP_PORT
    },

    pwa: {
        name: 'My App',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        // configure the workbox plugin
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            skipWaiting: true,
            // swSrc is required in InjectManifest mode.
            // swSrc: 'src/registerServiceWorker.js',
            // ...other Workbox options...
        }
    }
}