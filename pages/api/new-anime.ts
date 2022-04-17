//  /api/new-anime
// This is a secure place to store credentials. T∂he code defines here will never end oup on the client side.

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { MongoClient } from "mongodb";


const MONGO_URI:any = process.env.MONGO_URI
const MONGO_URI_1:any = process.env.MONGO_URI_1


// POST /api/new-anime
const handler = async (  req: NextApiRequest,
  res: NextApiResponse) =>{
    try{
        if(req.method === 'POST'){
            const data = req.body;
            
            //const { title, image, address, description } = data;
            
            const client = await MongoClient.connect('mongodb+srv://kaiyamato:kaiyamato66@cluster0.ktifb.mongodb.net/favAnimeList?retryWrites=true&w=majority');
            const db = client.db();
            
            const animeCollection = db.collection("animes");
            
            const result = await animeCollection.insertOne(data)

            client.close()

            res.status(201).json({message: "Anime added!"})
        } 
    }catch (err){
        console.log('error : ',err)
    }
}

export default handler;