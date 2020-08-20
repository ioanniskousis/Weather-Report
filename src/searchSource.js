import { gel } from './utils';

function showSearchSource(index) {
  gel('searchCity').style.visibility = (index === 0 ? 'visible' : 'hidden');
  gel('searchCity').style.display = (index === 0 ? 'flex' : 'none');
  gel('searchCountry').style.visibility = (index === 1 ? 'visible' : 'hidden');
  gel('searchCountry').style.display = (index === 1 ? 'flex' : 'none');
}

export default showSearchSource;
