FROM node:8
RUN mkdir /WillyWonka
RUN mkdir /WillyWonka/wwbuild
WORKDIR /WillyWonka/wwbuild
RUN npm install -g yarn
ENTRYPOINT [ "bash" ]
CMD [ "/WillyWonka/wwbuild/buildall.sh" ]
