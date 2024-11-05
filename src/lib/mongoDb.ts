import { MongoClient } from "mongodb";
import { ServerApiVersion } from "mongodb";

const uri = process.env.MONGO_URI as string;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client: MongoClient;

client = new MongoClient(uri, options);

export default client;
