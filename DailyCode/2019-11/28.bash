#!/bin/bash

members=('小花' '清雨' '小红帽' '晴雯' '韶风' '笑嘻嘻' '亮亮' '戚风' '巴斯' '康一君' '不二')

for ((i = 0 ; i < 100000 ; i++)); do
  index=$((RANDOM%=11))
  echo ${members[$index]}
done


lastIndex=$((RANDOM%=11))
echo '🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈'
echo
echo -e 恭喜，天选之子: '\033[31;1;5m'${members[$lastIndex]}'\033[0m'
echo
echo '🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉'
# echo $((RANDOM%=200))  # Random number 0..200
