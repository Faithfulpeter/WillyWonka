
echo ""
echo "Building source code using docker container"
rem docker run -it --rm --name willywonka -v "%cd%\..:/WillyWonka" docker.usaust-edge.com/willywonka

docker build -t willywonka . >nul
docker run -it --rm --name willywonka -v "%cd%\..:/WillyWonka" willywonka
