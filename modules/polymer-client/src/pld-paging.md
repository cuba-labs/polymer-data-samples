`cuba-entities` and `cuba-query` elements provide the following capabilities for typical paging:
 * `provide-count` — if set then total amount of entities will be queried and provided via `count` property
 * `limit` and `offset` properties — elements will react on changes and reload entities accordingly

```html
<cuba-entities id="data"
               entity-name="sec$User"
               view="_local"
               sort="createTs"
               limit="1"
               offset="[[offset]]"
               provide-count
               count="{{count}}"
               data="{{users}}">
</cuba-entities>

<template is="dom-repeat" items="[[users]]" as="user">
  <div>[[user.login]]</div>
</template>

<div class="paging">
  <button disabled$="[[!_prevButtonAvailable(offset)]]" on-tap="_prevPage">⯇</button>
  <button disabled$="[[!_nextButtonAvailable(offset, count)]]" on-tap="_nextPage">⯈</button>
  Count: [[count]]
</div>

```