# NEWS 2
This project is an implementation of the National Early
Warning Score 2 (NEWS 2). NEWS 2 was developed by the Royal College of Physicians
and has been endorsed by NHS England and NHS Improvement.

The core of the project is a series of classes that store the
observations and convert these to a score. Therefore, this project
could easily be adapted to support other scores or observations/values.
These classes are separated into continuous and ordinal scales.
Sets of observations can be combined in an ObservationSet.

By default this is presented as a Single Page Application using Vue.
I intend to convert this to a library so it can be incorporated into other projects.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
