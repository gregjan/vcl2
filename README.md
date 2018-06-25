Meteor: ( Run from repo )
* Run command: `meteor run --settings settings.json`

Docker build ( Build docker image): `docker build -t INFO/VCL .`

Docker run ( After image is built, run from anywhere, guacd sold separately ) :
```sh  
docker run -d \  
  -e ROOT_URL=http://vcl.ischool.umd.edu \  
  -e MAIL_URL=smtp://mail_url.com \  
  -p 80:3000 \  
  INFO/VCL
```

Or  

docker-compose ( Using docker compose file after image is built ): `docker-compose up -d`
