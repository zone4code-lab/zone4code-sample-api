max=51178
for i in `seq 2 $max`
do
     curl "http://localhost:9000/ping?id=${i}"
done