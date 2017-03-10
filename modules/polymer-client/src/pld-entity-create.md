```html
<cuba-entity-form id="entityForm"
                  entity-name="sec$User"
                  entity="[[user]]"
                  on-cuba-form-response="_handleFormResponse"
                  on-cuba-form-error="_handleFormError">
                  
  <label>Login: <input type="text" name="login" value="{{user.login::input}}"></label>
  <label>Name: <input type="text" name="login" value="{{user.name::input}}"></label>
  <button on-tap="_submit">Submit</button>

</cuba-entity-form>

<paper-toast id="successToast">Entity created</paper-toast>
<paper-toast id="errorToast">Entity creation error</paper-toast>
```    

Invoke `submit` method in order to send data:
```javascript
_submit: function() {
  this.$.entityForm.submit();
},
_handleFormResponse: function() {
  this.user = getUserStub();
  this.$.successToast.open();
},
_handleFormError: function() {
  this.$.errorToast.open();
}
```