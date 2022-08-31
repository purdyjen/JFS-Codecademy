#!/bin/bash
# Don't forget to run "chmod +x script.sh" to give the script permissions

# Group 1: Navigating the File System

#1 - Navigate to project directory
#2
echo "Step 2: Print Working Directory"
pwd
#3
echo "Step 3: List Content"
ls
#4
echo "Step 4: Make New Directory"
mkdir world
#5
echo "Step 5: Create New File & List Content in World Directory"
touch world/esperanto.txt
ls world

# Group 2: Viewing and Changing the File System

#6
echo "Step 6: List Content incl. hidden files in long format, sorted by last modified"
ls -alt
#7
echo "Step 7: List content in Europe Directory and move file"
ls europe
mv europe/chinese.txt asia
#8
echo "Step 8: PWD, copy file, then remove"
ls
cp spanish.txt europe 
cp spanish.txt northamerica 
cp spanish.txt southamerica
rm spanish.txt
#9
echo "Step 9: List content in todo/"
ls todo/*

#10
echo "Step 10: Copy files to appropriate locations"
cp todo/africa/* africa
cp todo/europe/* europe
cp todo/asia/* asia

#11
echo "Step 11: Remove all files in todo"
rm -r todo/* # confirm with y

# Group 3: Redirecting Input and Output

#12
echo "Step 12: List all files in asia/ and redirect to file"
ls asia/* > todo/asian_language_files.txt
#13
echo "Step 13: Echo a statement into a file"
echo "Welkom by die Lingua Franca vertaaldienste." > africa/afrikaans.txt
#14
echo "Step 14: Find and list all files that have no content into a file"
wc -l */*.txt | grep 0 > todo/empty_files.txt
# wc -l option for number of lines...piped to grep command to search for all files that have a wc -l result of 0...redirected into a new .txt file
#15
echo "Step 15: Display content of the new file"
cat todo/empty_files.txt

#############################PAY SPECIAL ATTENTION###############################
#16
echo "Step 16: Find and replace all misspelled names in all files"

# If not on Mac, uncomment this line of code:
    # sed -i 's/Lingua-Franca/Lingua Franca/g' */*.txt 

# If on a Mac, uncomment this line of code:
    # sed -i '' 's/Lingua-Franca/Lingua Franca/g' */*.txt 

# sed - find and substitute command
    # -i option means to change in place (rather than in a temp file)
    # Mac is weird sometimes and requires an empty string following the -i option
    # g to replace all instances, not just the first one
    # (*/*.txt) to search all subdirectories and files 

grep -Rl 'Lingua-Franca' */*.txt | wc -l 
# grep command
    # -Rl, -R and -l options combined) 
        # (-R) Recursive search for files
        # (-l) No lines 
    # searching for 'Lingua-Franca' in all subdirectories and files 
    # piped to wc command ...should print 0

 # Something to note:
 # wc first and piped to grep shows all matches to wc result, so output is names of all matching files
 # grep first and piped to wc shows the number of matches, so output is a number

#################################################################################


# Group 4: Configuring the Environment

# Yeah, I've already configured my environment how I like it, so I'm not messing with my source file...good luck!