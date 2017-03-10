`cuba-entities` and `cuba-query` elements provides the following capabilities for typical paging:
 * `provide-count` — if set then total amount of entities will be queried and provided via `count` property
 * `limit` and `offset` properties — elements will react on changes and reload entities accordingly

```html
<cuba-entities id="data"
               entity-name="sec$User"
               view="_local"
               sort="createTs"
               limit="[[limit]]"
               offset="[[offset]]"
               provide-count
               count="{{count}}"
               data="{{users}}">
</cuba-entities>

<template is="dom-repeat" items="[[users]]" as="user">
  <div>[[user.name]]</div>
</template>

<div class="paging">
  <button hidden$="[[!_prevButtonAvailable(offset)]]" on-tap="_prevPage">←</button>
  <button hidden$="[[!_nextButtonAvailable(limit, count)]]" on-tap="_nextPage">→</button>
  Count: [[count]]
</div>

```