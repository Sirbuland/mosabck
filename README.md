# Mosaic Backend

---
### Running in Docker:

##### Prerequisites:
    - docker
    - docker-compose

##### Run:
```
# The first way(simplest)
bash ./bin/docker_start

# The second way
# 1. Update configurations
cp config/database.yml.docker_sample config/database.yml
cp config/sunspot.yml.docker_sample config/sunspot.yml

# `docker-compose run --rm app command` - will run `command` inside app container
# 2. Create databases
docker-compose run --rm app rails db:create

# 2.1 Migrate
docker-compose run --rm app rails db:migrate

# 2.2 Initialize
docker-compose run --rm app rails app_initialize

# 3. Start server on localhost:3000
docker-compose up
# or
docker-compose run --rm -p 3000:3000 app rails server


# Other important commands for Rails
docker-compose run --rm app rails console
docker-compose run --rm app rails rspec
docker-compose run --rm app rails code_analysis

# Other important commands for docker containers
docker-compose up --build  # force rebuild of containers (use it to update local env if you've changed Gemfile)

# Guides
Docker-compose and Rails - https://docs.docker.com/compose/rails/
Rails Solr Docker - https://blog.koley.in/2018/searching-in-rails-with-solr-sunspot-and-docker
```

---
### Security:

This server is secured using JWT for each requests.
JWT is not required for accessing Graphiql or signIn mutation.

#### Generating valid JWT:

- Signature key should be specified in environment variable `SECRET_KEY_BASE`

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
#### CRON

Command to send feedback in CSV format to users with `feedback_receiver` role:
`rails send_feedback`


### ADMIN Panel:

This application has an embed admin panel, in order to access it just add '/admin' to the URL.

Command to create Admin:
`rails user:create_admin[email@mail.com,password]`

---
### Email notifications

To enable email notifications you need:
1. Go to `/admin/app_settings`
2. Create the setting where name is `EmailConfirmationEnabled`, value is `true` and active checkbox.
3. [For email confirmation] Create the setting where name is `RedirectAfterConfirmation`, value is `your url to redirect` and active checkbox.


---
### For devs:

##### Code quality:

We use a bunch of tools to ensure code quality, before uploading changes please make sure to run (and follow suggestions):

rake code_analysis
fasterer
