FROM ubuntu:20.04

WORKDIR /app

# install google chrome
RUN apt-get update && apt-get install -y gnupg
RUN apt-get install -y ca-certificates wget
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'
RUN apt-get -y update
ENV TZ=Europe/Madrid 
RUN echo "Preparing geographic area ..."
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-get install -y google-chrome-stable
RUN apt-get install -y curl
RUN apt-get install -y python3-pip

# install chromedriver
RUN apt-get install -yqq unzip
RUN wget -O /tmp/chromedriver.zip http://chromedriver.storage.googleapis.com/`curl -sS chromedriver.storage.googleapis.com/LATEST_RELEASE`/chromedriver_linux64.zip
RUN unzip /tmp/chromedriver.zip chromedriver -d /usr/local/bin/

# set display port to avoid crash
ENV DISPLAY=:99

# upgrade pip
RUN pip install --upgrade pip

#install nodejs
RUN apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash
RUN apt-get install -y nodejs
RUN node -v
RUN npm -v

#ADD ./scripts/wait-for-it.sh ./
#RUN chmod 755 wait-for-it.sh
ADD ./scripts/run.sh ./
RUN chmod 755 run.sh

ADD ./package.json package.json
ADD ./package-lock.json package-lock.json

RUN npm i --save-dev @wdio/cli
RUN npm i --save-dev chai

ADD ./jsconfig.json ./
ADD ./wdio.conf.js ./

ADD ./features features


CMD ["./run.sh"]

