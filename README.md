# key-buddy

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

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Testing service-worker
First:
```
npm install -g serve
```
After serve is installed build the project and start the server
```
npm run build && http-server dist
```
Now your Serviceworker will work properly. Have Fun!