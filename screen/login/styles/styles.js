import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    gradientContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    linear_container: {
        flex: 1,
        alignItems: 'center'
    },
    form_container: {
        position: 'absolute',
        height: '50%',
        width: '100%',
        bottom: 0
    },
    form_container_flex: {
        flex: 1,
        alignItems: 'center'
    },
    form_container_flex__title: {
        fontSize: 24,
        fontWeight: '500',
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
    input_with_image_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input_with_image__icon: {
        width: 24, 
        height: 24
    },
    input_with_image__input: {
        padding: 12
    }
})