#!/bin/bash

# Don't forget to run "chmod +x reset.sh" to give the script permissions
# Reference:
# https://www.gnu.org/software/bash/manual/html_node/Filename-Expansion.html

GLOBIGNORE="*.sh" # The script will now ignore any files that match this pattern
rm -R ./*
cp -R ../copy_for_reset_do_not_touch/* ../lingua-franca
unset GLOBIGNORE # The script will no longer ignore any files that match this pattern
