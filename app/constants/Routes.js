
import Home from '../components/Home';
import About from '../components/About';
import Help from '../components/Help';

const
  RouteKeys = {
    HOME : 'Home',
    ABOUT : 'About',
    HELP : 'Help',
  },
  RouteMap = {
    [RouteKeys.HOME] : {
      key : RouteKeys.HOME,
      title : 'Home',
      component : Home,
    },
    [RouteKeys.ABOUT] : {
      key : RouteKeys.ABOUT,
      title : 'About',
      component : About,
    },
    [RouteKeys.HELP] : {
      key : RouteKeys.HELP,
      title : 'Contact Us',
      component : Help,
    },
  };

export default {
  RouteMap,
  RouteKeys,
};
