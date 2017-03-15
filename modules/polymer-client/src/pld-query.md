You can [define JPQL queries](https://doc.cuba-platform.com/manual-latest/rest_api_v2_queries_config.html)
in order to use it in the REST API:

`rest-queries.xml`:
```xml
<?xml version="1.0"?>
<queries xmlns="http://schemas.haulmont.com/cuba/rest-queries.xsd">
    <query name="usersByName" entity="sec$User" view="_local">
        <jpql><![CDATA[select u from sec$User u where u.login like concat('%',:login,'%')]]></jpql>
        <params>
            <param name="login" type="java.lang.String"/>
        </params>
    </query>
</queries>
```

`web-app.properties`:

```
...
cuba.rest.queriesConfig = demo/pld/rest-queries.xml
...
```
Use [cuba-query](https://cuba-elements.github.io/cuba-elements/components/cuba-data/#cuba-query) element to retrieve
query results. You can optionally pass parameters using `params` property. 

```html
<cuba-query id="query"
            auto="[[auto]]"
            entity-name="sec$User"
            query-name="usersByName"
            params="[[params]]"
            data="{{users}}">
</cuba-query>

<label>
  Login (e.g. admin):
  <input type="text" name="login" value="{{params.login::input}}">
</label>

<button hidden$="[[auto]]" on-tap="_search">Search</button>

<input type="checkbox" checked="{{auto::change}}">load data automatically</input>

<template is="dom-repeat" items="[[users]]" as="user">
  <div>[[user.login]]</div>
</template>

<script>
  Polymer({
    is: 'pld-query',
    properties: {
      auto: {
        type: Boolean,
        value: false
      },
      params: {
        type: Object,
        value: function() {
          return {
            login: null
          }
        }
      }
    },
    _search: function() {
      this.$.query.load();
    }
  });
</script>
```
