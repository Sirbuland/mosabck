# Mosaic Backend
---

### Running in Docker:

###### Prerequisites:
    - docker
    - docker-compose
###### Run:
```bash
./bin/start.sh
```
---

### Security:
This server is secured using JWT for each requests.
JWT is not required for accessing Graphiql or signIn mutation.

#### Generating valid JWT:
 ##### Signature key production:
```
b3f205e3bc519b21efc8e9e76c8aa612cde2141046fdd2b8af09313de7fd4774e8d272dafaa40ee9238f07a2b5a44bc977fca556b8a4761be47a98afb769a0e1
```

 ##### Signature key staging:
```
83aec869dc40e0afbafbb4fb039576182558fb98d317bfc578886e743367cfd8596cc9a9c3a04ad1f68c97d480ed8bb40a44fc06e692d15056246cac255fde67
```
 ##### Expected payload:
 ```
{ user_id: user id, device_id: device id, aud: 'client' }
```

- You should be able to generate a valid JWT using any library by encrypting the payload detailed above with the correspondant key signature.

- For now we are using the standard algorithm HS256 - HMAC using SHA-256 hash algorithm.

- Once you generated a valid token you should include it in every request inside the Authorization header as follows:

```
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoidGVzdCJ9.ZxW8go9hz3ETCSfxFxpwSkYg_602gOPKearsf6DsxgY
```
---


### ADMIN Panel:

This application has an embed admin panel, in order to access it just add '/admin' to the URL. For now the credentials are:
email: `superadmin@mail.ru` and password: `123456`

---
### Search Engines

This project is able to work with ElasticSearch or Solr.
Check code to see which one is enabled.

#### Solr:

Since we are using a gem called sunspot_solr the only requirement for being abel to run the server
is to excute a bundle install, and then run the following command:

```
bundle exec sunspot-solr start -p 8982
```

that will start a solr server in the background for you.
In case you want to stop it just execute:

```
bundle exec sunspot-solr stop
```

more info here: https://github.com/sunspot


### For devs:

##### Code quality:

We use a bunch of tools to ensure code quality, before uploading changes please make sure to run (and follow suggestions):

rake code_analysis
fasterer
