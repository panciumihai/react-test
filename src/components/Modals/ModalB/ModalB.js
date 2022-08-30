import { US_COUNTRY_ID } from '../../../utils/constants';
import ContactsModal from '../ContactsModal/ContactsModal';
const ModalB = (props) => {
  return (
    <ContactsModal
      countryId={US_COUNTRY_ID}
      title={'Modal B - US'}
      {...props}
    />
  );
};

export default ModalB;
