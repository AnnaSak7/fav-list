//  /api/new-anime
// This is a secure place to store credentials. T∂he code defines here will never end oup on the client side.

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { MongoClient } from "mongodb";
import { runInNewContext } from "vm";

const MONGO_URI:any = process.env.MONGO_URI

type Data = {
  name: string
}

// POST /api/new-anime
const handler = async (  req: NextApiRequest,
  res: NextApiResponse<Data>) =>{
    try{
        if(req.method === 'POST'){
            const data = req.body;
            
            //const { title, image, address, description } = data;
            
            const client = await MongoClient.connect(MONGO_URI);
            const db = client.db();
            
            const animeCollection = db.collection("animes");
            
            const result = animeCollection.insertOne(data)

            client.close()

            res.status(201).json({message: "Anime added!"})
        } 
    }catch (err){
        console.log('error : ',err)
    }
}

export default handler;