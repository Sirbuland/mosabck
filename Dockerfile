FROM ruby:2.4.3
RUN mkdir -p /usr/src/app
COPY Gemfile /usr/src/app
COPY Gemfile.lock /usr/src/app
WORKDIR /usr/src/app
RUN bundle install
COPY . /usr/src/app
RUN apt-get update && apt-get install -y xvfb qt5-default libqt5webkit5-dev gstreamer1.0-plugins-base gstreamer1.0-tools
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - && apt-get install -y nodejs
CMD bundle exec rails s -o 0.0.0.0 -p 3000