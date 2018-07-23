**Meteor:** ( Run from repo ): `meteor run --settings settings.json`

**Docker build:** ( Build docker image): `docker build -t INFO/VCL .`

**Docker run:** ( After image is built, run from anywhere, guacd sold separately ):
```sh  
docker run -d \  
  -e ROOT_URL=http://vcl.ischool.umd.edu \  
  -e MAIL_URL=smtp://mail_url.com \  
  -e METEOR_SETTINGS="$(cat .settings.json)"  
  -p 80:3000 \  
  INFO/VCL
```

Or  

**Docker-compose:** ( Using docker compose file after image is built ):  
`export METEOR_SETTINGS="$(cat .settings.json)" && docker-compose up -d`  
