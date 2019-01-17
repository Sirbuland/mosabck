FROM ruby:2.4.3

RUN mkdir /app \
    && curl -sL https://deb.nodesource.com/setup_8.x | bash - \
    && apt-get update \
    && apt-get install -y default-jre nodejs \
    && rm -rf /var/lib/apt/lists/*
RUN apt-get update && apt-get install -y imagemagick
RUN apt-get update && apt-get -y install ghostscript && apt-get clean
COPY Gemfile /app
COPY Gemfile.lock /app

WORKDIR app
RUN bundle install

CMD ["bundle", "exec", "puma", "-t", "5:5", "-p", "3000"]