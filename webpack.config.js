module.exports = {
    module: {
        loaders: [
            { test: /\.json$/, loader: "json" },
            { loader:'babel', query:{ presets:['es2015']}, exclude:/node_modules/ }
        ]
    }
}
