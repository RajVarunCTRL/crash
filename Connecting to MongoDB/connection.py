from dotenv import load_dotenv

from config import MONGODB_URI

from pymongo import MongoClient

client = MongoClient(MONGODB_URI)

for db_name in client.list_database_names():
    print(db_name)
    
client.close() # Always close on completion.