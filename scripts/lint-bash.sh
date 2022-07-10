#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

shellcheck -e SC1090,SC1091 "$SCRIPT_DIR"/../scripts/*.sh || exit 1
shellcheck -e SC1090,SC1091 "$SCRIPT_DIR"/../infra/*.sh "$SCRIPT_DIR"/../infra/*.up "$SCRIPT_DIR"/../infra/*.down
