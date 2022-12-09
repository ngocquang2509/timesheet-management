import DropdownMenu from '../../components/DropdownMenu';
import { DROPDOWN_OPTIONS } from '../../constants/dropdownOption';
import Header from '../../layouts/Header';

const Home = (): React.ReactElement => {
  return (
    <>
      <Header />
      <DropdownMenu options={DROPDOWN_OPTIONS} />
    </>
  );
};

export default Home;
