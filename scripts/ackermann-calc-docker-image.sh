#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd "$SCRIPT_DIR"/../containers/ackermann-calc || exit 1

docker build . -t graemel/tutorial-azure-aca-ackermann-calc
