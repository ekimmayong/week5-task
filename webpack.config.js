const path = require('path'); 

module.exports = { 
    output: { 
        path: path.join(__dirname, '/dist'), 
        filename: 'index.bundle.js', 
    }, 
    cache: false,
    devServer: { 
        port: process.env.PORT || 3000 ,
        historyApiFallback: true,
        open: true,
        compress: true,
    }, 

    module: { 

        rules: [ 
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: { 
                    loader: 'babel-loader' 
                } 
            }, 
        ] 
    } 
}; 