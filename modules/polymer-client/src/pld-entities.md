The code below loads `User` entities with `_local` view and displays them using Polymer's 
[data binding](https://www.polymer-project.org/1.0/docs/devguide/data-binding).  
```html
<cuba-entities entity-name="sec$User" view="_local" data="{{users}}"></cuba-entities>

<template is="dom-repeat" items="[[users]]" as="user">
  <div>[[user.login]]</div>
</template>
```