import React from 'react';

export const Contacts = props => {
  return (
      <div className="footer__contacts footer__block">
          <h4 className={'footer__contacts-title'}>Contact Us</h4>
          <a className={'footer__contacts-telephone footer__contacts-item'} href={`tel:${ props.tel }`}>{ props.tel }</a>
          <address className={'footer__contacts-address footer__contacts-item'}>
              { props.address }
          </address>
          <a className={'footer__contacts-email footer__contacts-item'} href={`mailto:${props.email}`}>{ props.email }</a>
      </div>
  )
};

Contacts.defaultProps = [
    '855-5564-65651',
    'Address streets City',
    'your.mail@domains.com'
];