import React from 'react';

export const Contacts = props => {
  return (
      <div className="footer__contacts">
          <h4>Contact Us</h4>
          <a href={`tel:${ props.tel }`}>{ props.tel }</a>
          <address>
              { props.address }
          </address>
          <a href={`mailto:${props.email}`}>{ props.email }</a>
      </div>
  )
};

Contacts.defaultProps = [
    '855-5564-65651',
    'Address streets City',
    'your.mail@domains.com'
];