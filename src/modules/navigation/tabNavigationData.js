import HomeScreen from '../home/HomeViewContainer';
import NewsScreen from '../news/NewsViewContainer';
import GridsScreen from '../grids/GridsViewContainer';
import ContactsScreen from '../contacts/ContactsViewContainer';

const iconHome = require('../../../assets/images/tabbar/home.png');
const newsIcon = require('../../../assets/images/tabbar/newsIcon.png');
const iconPages = require('../../../assets/images/tabbar/pages.png');
const iconGrids = require('../../../assets/images/tabbar/grids.png');


const tabNavigationData = [
  {
    name: 'News',
    component: NewsScreen,
    icon: newsIcon,
  },
  {
    name: 'Home',
    component: HomeScreen,
    icon: iconHome
  },
  {
    name: 'Resources',
    component: ContactsScreen,
    icon: iconGrids,
  }
];

export default tabNavigationData;
