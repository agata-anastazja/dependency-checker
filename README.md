# Dependency checker

Simple app that, given a name of an npm published package, returns the
set of  first-order dependencies for said package. It presents the dependencies in a tree view.
It accounts for asynchronous fetching of dependencies and  caches relevant data so that repeated requests resolve with minimum latency.

What makes a good web service? API, architecture, data storage, low latency,
scalability, monitoring


### Running the app

- install dependecies using
```
npm install

```
- run locally
```
npm run dev

```

### Assumptions
Displaying only the main dependencies and not the dev dependencies.
