import styles from './ContactListElement.module.css';
import PropTypes from 'prop-types';

export default function ContactListElement({ contactList, onDeleteContact }) {
  return contactList.map(({ id, name, number }) => (
    <li className={styles.contact__item} key={id}>
      <p className={styles.contact__name}>
        {name}: {number}
      </p>
      <button
        className={styles.contact__button}
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  ));
}

ContactListElement.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
