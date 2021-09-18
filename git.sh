#!/bin/bash
date='Fri Nov 13 20:00:00 2020'

# git commit --amend --no-edit --date="Fri June 23 20:00:00 2019 -0600";

# echo ${date}

# gitDoAmend(){
#     git commit --amend --no-edit --date="${date} -0600";
#     git pull -f;
#     git push;
# }

# gitDoAmend

git add .
git commit -n -m 'code: daily'
git push

# git pull
# git add .
# git commit --amend --no-edit --date="Fri Nov 6 20:00:00 2019 -0600";
# git push;
