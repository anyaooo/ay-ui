import ayDialog from './dialog'

ayDialog.install = Vue => {
    Vue.component(ayDialog.name, ayDialog)
}

export default ayDialog