In order to use any cuba-* elements which work with data you should 
initialize connection to the REST API first:
```html
<cuba-app api-url="/app/rest/"></cuba-app>
```
Do it once for your app. 

Note: the examples below work without user authentication because REST API 
[anonymous mode](https://doc.cuba-platform.com/manual-latest/rest_api_v2_anonymous.html) is enabled: 
`cuba.rest.anonymousEnabled=true`