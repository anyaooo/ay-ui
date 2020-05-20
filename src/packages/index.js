import ayButton from './button'
import ayDialog from './dialog'
import ayInput from './input'
import ayTable from './table'
const components = {
    ayButton,
    ayDialog,
    ayInput,
    ayTable
}

const install = Vue => {
    Object.keys(components).forEach(key => {
        const component = components[key]
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default Object.assign({ install }, components)
