FROM eclipse-temurin:18-jre as builder
WORKDIR application
ENV JAR_FILE=build/libs/ackermann-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} application.jar
RUN java -Djarmode=layertools -jar application.jar extract

FROM eclipse-temurin:18-jre
WORKDIR application
COPY --from=builder application/dependencies/ ./
RUN true
COPY --from=builder application/spring-boot-loader/ ./
RUN true
COPY --from=builder application/snapshot-dependencies/ ./
RUN true
COPY --from=builder application/application/ ./
RUN true

ENTRYPOINT ["java", "org.springframework.boot.loader.JarLauncher"]