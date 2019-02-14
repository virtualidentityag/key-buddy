module.exports = {
    pwa: {
        name: 'KeyBuddy',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            globDirectory: 'dist/',
            globPatterns: [
                '**/*.{css,ico,html,js,json,txt}'
            ],
            swDest: 'service-worker.js',
            swSrc: 'src/service-worker.js',
        }
    }
};