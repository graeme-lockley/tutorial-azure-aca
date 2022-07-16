#!/bin/bash

export RG_NAME=tutACA
# export RG_LOCATION=eastus
# export RG_LOCATION=southafricanorth
export RG_LOCATION=westeurope

export CA_ENVIRONMENT_NAME=tutACAEnv
export CA_API_NAME=tutacaapi
export CA_FACTORIAL_NAME=tutacafact

if ! az extension list | grep '"containerapp"' > /dev/null
then
    echo ".register containerapp extension"
    az extension add \
        --name containerapp \
        --only-show-errors|| exit 1
fi
