import mongoose from 'mongoose';

const connection = {};
let blogdb = process.env.blogdb;
mongoose.set("strictQuery", false);

const connectToDb = async () => {
    if (connection.isConnected) {
        if (connection.dbName === blogdb) {
            console.log("Using existing connection");
            return connection.isConnected;
        } else {
            await mongoose.disconnect();
            console.log("Disconnected from the existing connection");
        }
    }

    const db = await mongoose.connect(blogdb);
    connection.isConnected = db.connections[0].readyState;
    connection.dbName = blogdb;
    console.log("Connected to the new connection");
};

export default connectToDb;