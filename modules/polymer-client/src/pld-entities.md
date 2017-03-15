The simple example on how to load entities with specific view using
[cuba-entities](https://cuba-elements.github.io/cuba-elements/components/cuba-data/#cuba-entities) 
element. Once `entity-name` and `view` are specified the element loads list of entities and exposes it to the Polymer
[data binding](https://www.polymer-project.org/1.0/docs/devguide/data-binding) via `data` property.  
```html
<cuba-entities entity-name="sec$User" view="_local" data="{{users}}"></cuba-entities>

<template is="dom-repeat" items="[[users]]" as="user">
  <div>[[user.login]]</div>
</template>
```