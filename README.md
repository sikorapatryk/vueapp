# vueapp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Build container image
```
docker built -t gui .
```

### Run container image
```
docker run --rm -it -p 8080:80 -v ${PATH_TO_CONFIG}:/usr/share/nginx/html/config.json --name gui gui
```

Example of config file:
```
{
  "API_URL": "http://localhost:8000/api",
  "FRONTEND_HOSTNAME": "local"
}
```
