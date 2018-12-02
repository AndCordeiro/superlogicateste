import {
	createStackNavigator,
	createAppContainer
} from 'react-navigation';

import Login from './screens/Login';
import Todos from './screens/Todos';
import Todo from './screens/Todo';

const Routes = createStackNavigator({
	Login,
	Todos,
	Todo
});
const App = createAppContainer(Routes);

export default App;