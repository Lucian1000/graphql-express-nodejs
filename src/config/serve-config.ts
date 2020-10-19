export const serveConfig = process.env.NODE_ENV === 'development' ? {
    port: 4000,
    host: "localhost"
} : 
require("./serve-config.prod").serveConfig;