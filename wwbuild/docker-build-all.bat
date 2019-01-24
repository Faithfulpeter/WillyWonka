
echo ""
echo "Building source code using docker container"
docker run -it --rm --name willywonka -v "%cd%\..:/WillyWonka" docker.usaust-edge.com/willywonka
