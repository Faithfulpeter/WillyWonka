
echo ""
echo "Building source code using docker container"
docker run -it --rm --name willywonka -v "%cd%./../:/root/WillyWonka" http://usaust-edge.com:5000/willywonka
