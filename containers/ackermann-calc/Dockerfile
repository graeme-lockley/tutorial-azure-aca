FROM eclipse-temurin:18-jre as builder
WORKDIR /usr/app
ENV JAR_FILE=build/libs/ackermann-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} application.jar
RUN java -Djarmode=layertools -jar application.jar extract

FROM eclipse-temurin:18-jre
WORKDIR /usr/app
COPY --from=builder /usr/app/dependencies/ ./
RUN true
COPY --from=builder /usr/app/spring-boot-loader/ ./
RUN true
COPY --from=builder /usr/app/snapshot-dependencies/ ./
RUN true
COPY --from=builder /usr/app/application/ ./
RUN true

ENTRYPOINT ["java", "org.springframework.boot.loader.JarLauncher"]