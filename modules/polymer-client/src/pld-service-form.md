The example below demonstrates how to send data to REST service using `cuba-service-form` element.

`rest-services.xml`:
```xml
<service name="cuba_EmailService">
    <method name="sendEmailAsync">
        <param name="emailInfo"/>
    </method>
</service>
```

`pld-service-form.html`
```html
...
<cuba-service-form id="serviceForm" service-name="cuba_EmailService" method="sendEmailAsync" params="[[emailParams]]">
  <input placeholder="E-mail address"
         type="text"
         name="email"
         value="{{emailParams.emailInfo.addresses::input}}">
  <input placeholder="Caption"
         type="text"
         name="caption"
         value="{{emailParams.emailInfo.caption::input}}">
  <input placeholder="Body"
         type="text"
         name="body"
         value="{{emailParams.emailInfo.body::input}}">

  <button on-tap="_send">Send Email</button>

  <button on-tap="_reset">Reset form</button>
</cuba-service-form>
...
```