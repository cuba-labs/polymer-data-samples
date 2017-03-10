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
```