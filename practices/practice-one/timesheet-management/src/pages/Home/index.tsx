import DropdownMenu from '../../components/DropdownMenu';
import { OPTIONS_RECORD } from '../../constants/dropdown-option';
import Header from '../../layouts/Header';

const Home = (): React.ReactElement => {
  return (
    <>
      <Header />
      <DropdownMenu options={OPTIONS_RECORD} />
    </>
  );
};

export default Home;
