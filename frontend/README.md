# Angular

## Angular Add-On Dependencies

```
npm install bootstrap
install @fortawesome/fontawesome-free
```

## Add Global Styles to Angular

- Open angular.json
- Search for style
- enter bootstrap & fontawesome paths
  - "node_module/bootstrap/dist/css/bootstrap.min.css",
  - "node_module/@fortawesome/fontawesome-free/css/all.min.css"

## Notes on Routing

| Name           | Description                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| Router         | Main routing service. Enables navigation between views based on user action |
| Route          | Maps a URL path to a component                                              |
| RouterOutlet   | Renders the desired componnet based on route.                               |
| RouterLink     | Link to specific routes in your application                                 |
| AcyivatedRoute | Useful for access route parameters.                                         |
