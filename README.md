# SH Catalog
*Rest API to access catagories, products, customers, suppliers information*
### 🚀 Getting started with SH-Catalog

1. Clone the repo to a local folder
   ```git clone <repo name>```
2. Create a new .env file to match the relative configuration using .env.example
3. Should be run inside the cloned repo
   1. Check if u have installed nodejs on your machine, after installation install yarn with ```npm install -g yarn```
   2. Install SQLite manually ```yarn add better-sqlite3```
   3. in ./config/database.js add the below configuration *DATABASE_FILENAME* is the filename configured in your .env
       ```
            import path from 'path';
            export default ({ env }) => ({
              connection: {
                client: 'sqlite',
                connection: {
                  filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
                },
                useNullAsDefault: true,
              },
            });```


