FROM java:8-jre
ENV EUREKA_URL=http://eurekacontainer:8761/eureka
ENV RABBIT_HOST=192.168.99.100
WORKDIR usr/src
ADD /target/netflix-zuul-api-gateway-server-0.0.1-SNAPSHOT.jar /usr/src/netflix-zuul-api-gateway-server-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","netflix-zuul-api-gateway-server-0.0.1-SNAPSHOT.jar"]