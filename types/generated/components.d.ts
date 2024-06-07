import type { Schema, Attribute } from '@strapi/strapi';

export interface AddressContactAddress extends Schema.Component {
  collectionName: 'components_address_contact_addresses';
  info: {
    displayName: 'contact_address';
    icon: 'pinMap';
    description: '';
  };
  attributes: {
    address_line_1: Attribute.String;
    city: Attribute.String;
    area: Attribute.String;
    pin_code: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 6;
        maxLength: 12;
      }>;
    state: Attribute.String;
    address_type: Attribute.Enumeration<['General', 'Billing', 'Shipping']> &
      Attribute.DefaultTo<'General'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'address.contact-address': AddressContactAddress;
    }
  }
}
