#!/bin/bash
# shellcheck disable=SC2162,SC2086

# From Codecademy's "Learn Bash Scripting Course" at https://www.codecademy.com/courses/bash-scripting/
# If first time executing this file, run "chmod +x script.sh" in Terminal
# To execute this script, run "./script.sh"

echo "🐱 Hello $USER 🐱"
# Greets the user

firstline=$(head -n 1 source/changelog.md) 
# Uses the head command to pull info from the file source/changelog.md and saves to the variable firstline

read -a splitfirstline <<< $firstline
# The variable, firstline, is set as the input for the read command
# The actual first line of changelog.md is "## 11.2.3"
# We don't want to include the markdown formatting (##) so...
# option -a is used to split words read in the firstline variable into an array, which is then saved to the variable splitfirstline

version=${splitfirstline[1]}
# Accesses the splitfirstline array at index 1 and saves value to variable version

echo "You are building version" $version
echo "Do you want to continue? (enter '1' for yes, '0' for no)"
read versioncontinue

if [ $versioncontinue -eq 1 ] # If the user confirms with 1
then
    for filename in source/* # Loops through all files inside of source directory
    do
        if [ "$filename" == "source/secretinfo.md" ] # If the file name matches
        then
          echo "Not copying" $filename # Then print "Not copying" and the file name
        else # Else print "Copying" and the file name
          echo "Copying" $filename
          cp $filename build/. # Copy the file into the destination directory build/
        fi # End if statement
    done # Ends for loop
  cd build/ || exit # Changes into build/ directory ( || exit is a failsafe )
  echo "Build version $version contains:" # Prints message
  ls # List items in directory
  cd .. # Changes up one directory
else # Else, if the user denies with 0
  echo "Please come back when you are ready"
fi






