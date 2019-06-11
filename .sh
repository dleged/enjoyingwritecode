#!/bin/bash
date='Fri June 10 20:00:00 2019'

echo ${date}

gitDoAmend(){
    git add .
    git pull
    git commit --amend --no-edit --date="${date} -0600";
    git push;
}

gitDoAmend


# git pull
# git add .
# git commit --amend --no-edit --date="Fri Nov 6 20:00:00 2019 -0600";
# git push;