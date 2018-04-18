#### Adding docker to current existing RoR application

##### First Step:

For dockerizing any stack-based application we need to use `docker` and `docker-compose`(at least).
 
We have application working with postgreSQL database, so we will be taking its image.

So let's try:

```yaml
version: "3"
services:
  postgres:
    image: postgres:9.6.1
    ports:
      - "5432:5432"
    volumes:
      - ./data/postgres:/var/lib/postgresql/data
```

It's quite nice and tricky setup because it allows us not to recreate database on each docker start, we will be storing all necessary data inside it.
We will use `postgres:9.6.1` image, make port forwarding to 5432 and share data folder.


Now we need to set up dockerfile for RoR.

```bash
FROM ruby:2.3.4
RUN mkdir -p /usr/src/app
COPY Gemfile /usr/src/app
COPY Gemfile.lock /usr/src/app
WORKDIR /usr/src/app
RUN bundle install
COPY . /usr/src/app
CMD bundle exec rails s -o 0.0.0.0 -p 3000
```
It's quite basic setup(it copies files, runs bundle and starts app at 3000 port), so let's extend it.

```bash
FROM ruby:2.3.4
RUN mkdir -p /usr/src/app
COPY Gemfile /usr/src/app
COPY Gemfile.lock /usr/src/app
WORKDIR /usr/src/app
RUN bundle install
COPY . /usr/src/app
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - && apt-get install -y nodejs
CMD bundle exec rails s -o 0.0.0.0 -p 3000
```

We added node.js for our image, it will let us to serve more complicated RoR projects.

Now it's time to update `docker-compose.yml`:

```bash
version: "3"
services:
  postgres:
    image: postgres:9.6.1
    ports:
      - "5432:5432"
    volumes:
      - ./data/postgres:/var/lib/postgresql/data
  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - postgres
``` 

We will make our app dependable on our pg container and will make port forwarding of our 3000 port to host machine.

Now it's time to run everything:

Some people are using `wait-for-it.sh` script but we'd prefer more hard way:
```bash
#!/usr/bin/env bash
docker-compose up -d postgres
sleep 5
docker-compose run --rm app rails db:migrate
docker-compose up app
```
This script is named `start.sh`, we put in inside ./bin and then we can run our project with `./bin/start.sh`.

That's all!