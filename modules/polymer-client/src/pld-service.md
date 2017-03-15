Expose service method to the REST API using [xml configuration](https://doc.cuba-platform.com/manual-latest/rest_api_v2_services_config.html)

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

Use [cuba-service](https://cuba-elements.github.io/cuba-elements/components/cuba-data/#cuba-service) element 
to invoke a service method
```html
<cuba-service service-name="cuba_ServerInfoService"
              method="getReleaseNumber"
              data="{{releaseNumber}}"
              handle-as="text"></cuba-service>

Release number: [[releaseNumber]]
```