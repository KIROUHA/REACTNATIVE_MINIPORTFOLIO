// const path = require('path');

module.exports = {
    // projectRoot: __dirname,
//     watchFolders: [path.resolve(__dirname, 'assets')],
    resolver: {
        // sourceExts: ['jsx', 'js', 'ts', 'tsx'],
        // assetExts: ['txt', 'xml', 'png', 'jpg', 'jpeg', 'gif', 'pdf'],
        allowUNCPaths: true,
    }
//         resolverMainFields: ['browser', 'main'],
//         resolver: {
//             blacklistRE: /^((?!\/(android|ios|node_modules\/react)\/).)*$/,
//             allowUncached: true, // Autoriser les fichiers non mis en cache
//             allowUNCPaths: true,

//             extraNodeModules: { // Configuration spécifique à votre projet
//                 'assets': require.resolve('./assets'), // Chemin de votre dossier assets
//             },
//         },
//         transformer: {
//             assetPlugins: ["expo-asset/tools/hashAssetFiles"], // Plugin d'actifs pour Expo
//           },
//     },
};