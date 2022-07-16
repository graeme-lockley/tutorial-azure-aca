# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.241.1/containers/ubuntu/.devcontainer/base.Dockerfile

ARG VARIANT="jammy"
FROM mcr.microsoft.com/vscode/devcontainers/base:0-${VARIANT}

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends nodejs npm

RUN ( curl -fsSL https://deno.land/x/install/install.sh | sh )
ENV DENO_INSTALL="/home/vscode/.deno"
ENV PATH="${DENO_INSTALL}/bin:${PATH}"
