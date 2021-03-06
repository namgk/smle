

import { Component } from 'angular2/core';
import { FormBuilder, AbstractControl, ControlArray, ControlGroup } from 'angular2/common';
import { Address } from '../../../../model/iso/gmd/Address';
import { AbstractComponent } from '../../AbstractEditorComponent';
import { AddressComponent } from './AddressComponent';

class AddressList {
  addresses: Address[] = [];
  name: string;
}

@Component({
  selector: 'isoAddressList',
  template: require('./AddressListComponent.html'),
  directives: [AddressComponent]
})
export class AddressListComponent extends AbstractComponent<AddressList> {

  public onAdd() {
    this.model.addresses.push(new Address());
  }

  public onRemove(index: number): void {
    this.model.addresses.splice(index, 1);
  }

  protected createModel() {
    return new AddressList();
  }

  protected createModelItem(): Address {
    return new Address();
  }

}
