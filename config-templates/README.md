# Project Config Files

## Firebase Project Service Key
Download your project service key and copy it to ```keys``` directory. Rename the file
```projectServiceKey.json```. Below you will see the shell of the projectServiceKey.json file. Next your going to copy the values to the ".env.local.template"

```json
{
    "type": "service_account",
    "project_id": "your project_id",
    "private_key_id": "",
    "private_key": "",
    "client_id": " ",
    "auth_uri": " ",
    "token_uri": " ",
    "auth_provider_x509_cert_url": " ",
    "client_x509_cert_url": "",
    "universe_domain": ""
}
  
```


## Environmental Variables (.env.local)
You have been provided with a `.env.local.template`. Copy the projectServiceKey values into this file one by one. make sure to leave the quotaion marks on the values. Once you have copied all of the service key values into the file rename the file ```.env.local```. Move this file to project root. Make sure that this file is added to the ```.gitignore file```


```env
TYPE="service_account"
PROJECT_ID="your project_id 
PRIVATE_KEY_ID= 
PRIVATE_KEY= 
CLIENT_EMAIL= 
CLIENT_ID= 
AUTH_URI= 
TOKEN_URI= 
AUTH_PROVIDER= 
CLIENT_IDx509_CERT_URL= 
UNIVERSE_DOMAIN= 
```

## ServiceKey.js File
Inside the config folder you have a copy of the service key file with the environmental variables you set in the last task. Make sure that your file looks like the following. The regular expression on the private is required. If you do not check that it is there your project will not run on vercel.

```javascript
export const serviceKey = {
  type: process.env.TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID?.replace(/\\n/g, '\n'),
  private_key: process.env.PRIVATE_KEY,
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER,
  client_x509_cert_url: process.env.CLIENT_IDx509_CERT_URL,
  universe_domain: process.env.UNIVERSE_DOMAIN,
};
```

## Firebase Admin Configuration File
Inside the ```config-templates folder``` locate the file called ```firebase-config-template.js.```. The file is shown below.  
You have to replace the ```databaseURL``` property with your Realtime Database URL.  
Next add your create a uid for the project firebase admin. The uid will be used with the Realtime Database access rules.

```javascript
import admin from "firebase-admin"
import  {initializeApp, getApps} from "firebase-admin/app"
import serviceKey from "@/config/serviceKey" 
 
 
 
 if(!getApps().length){
  initializeApp({
    credential: admin.credential.cert(serviceKey),
    databaseURL: "YOUR REAL TIME DATA BASE URL HERE",
    databaseAuthVariableOverride: {
      uid: "create a service name"
    }
  });
 }

// app/api/test/route.js
const db = admin.database()
 
export {db}
```

## Real Time Database Rules
In the last task you created a uid that lets you access the project services that you setup in the Firebase project. Go to your Realtime Database a click the Rules tab.  
Your rules should look like the following example.

```json
{
  "rules": {
   
    "employees":{
        ".read": "auth.uid === 'create a service name'",
      ".write": "auth.uid === 'create a service name'",
    }
  
  }
}
```