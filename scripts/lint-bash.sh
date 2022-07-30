#!/usr/bin/env bash

PROJECT_HOME=$( "$( dirname "$0" )/../.tasks/project-home" ) || exit 1

shellcheck -e SC1090,SC1091 \
    "$PROJECT_HOME"/.tasks/is-executable \
    "$PROJECT_HOME"/.tasks/project-home || exit 1

shellcheck -e SC1090,SC1091 "$PROJECT_HOME"/scripts/*.sh || exit 1

shellcheck -e SC1090,SC1091 "$PROJECT_HOME"/tasks/* || exit 1

shellcheck -e SC1090,SC1091 \
    "$PROJECT_HOME"/src/infra/*.sh \
    "$PROJECT_HOME"/src/infra/*.up \
    "$PROJECT_HOME"/src/infra/*.down
