#!/bin/bash
# From Codecademy's "Learn the Command Line" course, in the "Configuring the Environment" section, offline project
# Don't forget to run "chmod +x script.sh" to give the script permissions

# Group 1: Navigating the File System
echo -e '\033[1mGroup 1: Navigating the File System\033[0m' 
echo ""

#1 - Navigate to project directory
echo "  Step 1: Navigate to project directory"
echo ""
#2
echo "  Step 2: Print Working Directory"
echo "pwd"
pwd
echo ""
#3
echo "  Step 3: List content"
echo "  ls"
ls
echo ""
#4
echo "  Step 4: Make new directory"
echo "mkdir world"
mkdir world
echo ""
#5
echo "  Step 5: Create new file & list content in World directory"
echo "touch world/esperanto.txt"
echo "ls world"
touch world/esperanto.txt
ls world
echo ""
echo ""
# Group 2: Viewing and Changing the File System
echo -e '\033[1mGroup 2: Viewing and Changing the File System\033[0m'
echo ""

#6
echo "  Step 6: List Content incl. hidden files in long format, sorted by last modified"
echo "ls -alt"
ls -alt
echo ""
#7
echo "  Step 7: List content in Europe directory and move file"
echo "ls europe"
echo "mv europe/chinese.txt asia"
ls europe
mv europe/chinese.txt asia
echo ""
#8
echo "  Step 8: PWD, copy file, then remove"
echo "ls"
echo "cp spanish.txt europe"
echo "cp spanish.txt northamerica"
echo "cp spanish.txt southamerica"
echo "rm spanish.txt"
ls
cp spanish.txt europe 
cp spanish.txt northamerica 
cp spanish.txt southamerica
rm spanish.txt
echo ""
#9
echo "  Step 9: List content in todo/"
echo "ls todo/*"
ls todo/*
echo ""
#10
echo "  Step 10: Copy files to appropriate locations"
echo "cp todo/africa/* africa"
echo "cp todo/europe/* europe"
echo "cp todo/asia/* asia"
cp todo/africa/* africa
cp todo/europe/* europe
cp todo/asia/* asia
echo ""
#11
echo "  Step 11: Remove all files in todo"
echo "rm -r todo/* (confirm with y)"
rm -r todo/* # confirm with y
echo ""
echo ""

# Group 3: Redirecting Input and Output
echo -e '\033[1mGroup 3: Redirecting Input and Output\033[0m'
echo ""
#12
echo "  Step 12: List all files in asia/ and redirect to new file"
echo "ls asia/* > todo/asian_language_files.txt"
ls asia/* > todo/asian_language_files.txt
echo ""
#13
echo "  Step 13: Echo a statement into a file"
echo 'echo "Welkom by die Lingua Franca vertaaldienste." > africa/afrikaans.txt'
echo "Welkom by die Lingua Franca vertaaldienste." > africa/afrikaans.txt
echo ""
#14
echo "  Step 14: Find and list all files that have no content into a file"
echo "wc -l */*.txt | grep 0 > todo/empty_files.txt"
wc -l */*.txt | grep 0 > todo/empty_files.txt
    # wc -l option for number of lines...piped to grep command to search for all files that have a wc -l result of 0...redirected into a new .txt file
echo ""
#15
echo "  Step 15: Display content of the new file"
echo "cat todo/empty_files.txt"
cat todo/empty_files.txt
echo ""
#16
echo "  Step 16: Find and replace all misspelled names in all files"
echo "sed -i '' 's/Lingua-Franca/Lingua Franca/g' */*.txt"
sed -i '' 's/Lingua-Franca/Lingua Franca/g' */*.txt 
    # sed - find and substitute command
        # -i option means to change in place (rather than in a temp file)
        # Mac is weird sometimes and requires an empty string following the -i option
        # g to replace all instances, not just the first one
        # (*/*.txt) to search all subdirectories and files 
echo "grep -Rl 'Lingua-Franca' */*.txt | wc -l"
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
echo ""
echo ""

# Group 4: Configuring the Environment
echo -e '\033[1mGroup 4: Configuring the Environment\033[0m'

# Yeah, I've already configured my environment how I like it, so I'm not messing with my source file...good luck!
echo "  You're on your own here, Padawan."

echo "Would you like to reset the file structure? (enter '1' for yes, '0' for no)"
read -r fileReset

if [ "$fileReset" -eq 1 ]
then
    rm -r /world
    cp -R ../copy_lingua-franca-do-not-run-script-here/* ../lingua-franca
else
    echo "Cool. See you later."
fi