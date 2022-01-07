const{MongoClient}=require("mongodb")

module.exports={
    db:{},
    async connect() {   
    
    try{
    const client=await MongoClient.connect("mongodb+srv://kirthika:kirthi@cluster0.mxi84.mongodb.net?retryWrites=true&w=majority")
        
    this.db=client.db("integra")
     console.log(this.db)
    }
    catch(err)
    {
        console.log(err)
    }
}
}

