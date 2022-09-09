#!/bin/bash

# Don't forget to run "chmod +x reset.sh" to give the script permissions

GLOBIGNORE="*.sh" # The script will now ignore any files that match this pattern
rm -R ./*
cp -R ../copy_for_reset_do_not_touch/* ../lingua-franca
unset GLOBIGNORE # The script will no longer ignore any files that match this pattern
