module.exports = {
    pwa: {
        name: 'KeyBuddy',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: 'dev/sw.js',
        }
    }
};