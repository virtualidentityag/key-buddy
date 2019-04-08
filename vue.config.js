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
            swDest: 'firebase-messaging-sw.js',
            swSrc: 'src/firebase-messaging-sw.js',
        }
    }
};