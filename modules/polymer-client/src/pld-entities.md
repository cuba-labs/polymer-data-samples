```html
<cuba-entities entity-name="sec$User"
               view="_local"
               data="{{users}}">
</cuba-entities>

<template is="dom-repeat" 
          items="[[users]]" 
          as="user">
  <div>[[user.name]]</div>
</template>
```