FROM java:8-jre
WORKDIR usr/src
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=root
ENV MYSQL_URL=jdbc:mysql://mysql-container:3306/fsd?createDatabaseIfNotExist=true
ENV EUREKA_URL=http://eurekacontainer:8761/eureka
ENV RABBIT_HOST=192.168.99.100
ADD /target/userservice-0.0.1-SNAPSHOT.jar /usr/src/userservice-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","userservice-0.0.1-SNAPSHOT.jar"]