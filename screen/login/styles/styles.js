import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    gradient_container: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    linear_container: {
        flex:1,
        alignItems: 'center'
    },
    form_container: {
        position: 'absolute',
        height: '50%',
        width: '100%',
        bottom: 0
    },
    form_container_flex: {
        flex:1,
        alignItems: 'center'
    },
    form_container_flex__title: {
        fontSize: 24,
        fontWeight: '500'
    },
    form_input_container: {
        width: '80%',
        marginTop: 24
    },
    input_container: {
        borderRadius: 30,
        backgroundColor: '#F7F7F7',
        padding: 24
    },
    input_with_icon_container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input_with_icon_container__icon:{
        width:24,
        height: 24
    },
    input_with_icon_container__input: {
        height: 42,
        padding: 8
    }
})