if [ $(docker container ls -q --filter name="client_container") != '' ];then
 docker container stop client_container
 docker container rm client_container
 fi;

 if [ $(docker image ls -q --filter reference="client") != '' ];then
 docker image rm client
 fi;


docker image build -t client .


docker container run -itd -p8000:80 --name client_container client