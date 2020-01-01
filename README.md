# angular-microservice
Esse projeto é o Front-end que consome os microserviços do projeto https://github.com/rogeriotakashi/springboot-microservice.

No momento, a página do Home do projeto chama o serviço api/v1/webcontent/home/album/{number}, que fica no https://github.com/rogeriotakashi/springboot-microservice/tree/dev/general-pet-service/src/main/java/io/rogeriotakashi/generalpetservice/resources e o mesmo, consome 2 serviços:

1)Serviço responsável em buscar as imagens de Gatos; (https://github.com/rogeriotakashi/springboot-microservice/tree/dev/cat-service)
2)Serviço responsável em buscar as imagens dos Cães; (https://github.com/rogeriotakashi/springboot-microservice/tree/dev/dog-service)

Ao recuperar as Urls das imagens desse serviço, o mesmo é carreagado na tela:

![] https://giphy.com/gifs/SpojeQfZMV5JkwAeWk
