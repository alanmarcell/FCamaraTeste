class Constants {
    static DB_CONNECTION_STRING: string = process.env.NODE_ENV === 'production'
        ? process.env.dbURI : "mongodb://admin:admin@jello.modulusmongo.net:27017/d7Ojirex";
    static secret: string = "fcamarateste";
}
Object.seal(Constants);
export = Constants;