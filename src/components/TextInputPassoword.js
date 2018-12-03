import React, { Component } from 'react';
import {
    View,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-fontawesome';

const {
    width
} = Dimensions.get('window');

class TextInputPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render() {
        const {
            containerStyle
        } = this.props;

        return (
            <View style={containerStyle}>
                {this.renderInput()}
                {this.renderIcon()}
            </View>
        );
    }

    renderInput() {
        const {
            inputStyle,
            value,
            placeholder,
            returnKeyType,
            onSubmitEditing,
            onChangeText
        } = this.props;

        return (
            <TextInput
                style={inputStyle}
                autoCapitalize='none'
                autoCorrect={false}
                ref={(ref) => this.inputRef = ref}
                placeholder={placeholder}
                returnKeyType={returnKeyType}
                onSubmitEditing={onSubmitEditing}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={!this.state.show}
            />
        );
    }

    renderIcon() {
        return (
            <Icon
                name={this.state.show ? 'eye' : 'eye-slash'}
                color={this.state.show ? '#000' : '#C7C7Cd'}
                containerStyle={styles.containerIconStyle}
                onPress={() => this.setState({
                    show: !this.state.show
                }, () => {
                    if (Platform.OS === 'android') {
                        this.inputRef.setNativeProps({
                            text: this.props.value
                        });
                        setTimeout(() => this.setLastPositionCursor(), 0);
                    } else {
                        this.setFirstPositionCursor();
                        this.setLastPositionCursor();
                    }
                }
                )}
            />
        );
    }

    focus() {
        this.inputRef.focus();
    }

    setFirstPositionCursor() {
        this.inputRef.setNativeProps({
            selection: {
                start: 0,
                end: 0
            }
        });
    }

    setLastPositionCursor() {
        this.inputRef.setNativeProps({
            selection: {
                start: this.props.value.length,
                end: this.props.value.length
            }
        });
    }
}


TextInputPassword.propTypes = {
    inputStyle: PropTypes.object,
    placeholder: PropTypes.string,
    returnKeyType: PropTypes.string,
    onSubmitEditing: PropTypes.func,
    onChangeText: PropTypes.func,
    value: PropTypes.string.isRequired
};

TextInputPassword.defaultProps = {
    inputStyle: {
        flex: 1,
        paddingRight: 50,
        ...Platform.select({
            ios: {
                height: 30
            }
        })
    },
    containerStyle: {
        width: (width / 2) + 80,
        ...Platform.select({
            ios: {
                borderBottomColor: '#c4cbd4',
                borderBottomWidth: 1
            }
        }),
        height: 45,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center'
    },
    returnKeyType: 'done',
    placeholder: 'Senha'
};

export default TextInputPassword;

const styles = StyleSheet.create({
    containerIconStyle: {
        position: 'absolute',
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 35
    }
});