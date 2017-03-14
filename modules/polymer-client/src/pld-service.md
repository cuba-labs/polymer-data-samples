Expose service method to the REST API using xml configuration

`rest-services.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<services xmlns="http://schemas.haulmont.com/cuba/rest-services-v2.xsd">
    <service name="cuba_ServerInfoService">
        <method name="getReleaseNumber"/>
    </service>
</services>
```

Register configuration

`web-app.properties`:
```
...

cuba.rest.servicesConfig = demo/pld/rest-services.xml
...
```

Use `cuba-service` element to invoke service
```html
<cuba-service service-name="cuba_ServerInfoService"
              method="getReleaseNumber"
              data="{{releaseNumber}}"
              handle-as="text"></cuba-service>

Release number: [[releaseNumber]]
```