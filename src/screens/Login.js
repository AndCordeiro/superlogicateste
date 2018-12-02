import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';


class Login extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>
					Init
				</Text>
			</View>
		)
	}
}

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	}
});