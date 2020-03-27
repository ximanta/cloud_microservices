FROM java:8-jre
WORKDIR usr/src
ENV MONGO_DATABASE=recomendedplayers
ENV MONGO_PORT=27017
ENV MONGO_HOST=mongo-container
ENV EUREKA_URL=http://eurekacontainer:8761/eureka
ENV RABBIT_HOST=192.168.99.100
ADD /target/playerrecommendationservice-0.0.1-SNAPSHOT.jar /usr/src/playerrecommendationservice-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","playerrecommendationservice-0.0.1-SNAPSHOT.jar"]