import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import PropTypes from 'prop-types';

const {
    width
} = Dimensions.get('window');

class Button extends Component {
    render() {
        const {
            onPress,
            buttonStyle,
            titleStyle,
            title
        } = this.props;

        return (
            <TouchableOpacity onPress={onPress} style={buttonStyle}>
                <Text style={titleStyle}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    }
}

Button.propTypes = {
    buttonStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    title: PropTypes.string.isRequired,
    titleStyle: PropTypes.object,
    onPress: PropTypes.func.isRequired
};

Button.defaultProps = {
    buttonStyle: {
        backgroundColor: '#191970',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#191970',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: (width / 2)
    },
    titleStyle: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#fff'
    }
};

export default Button;