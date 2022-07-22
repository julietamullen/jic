export default {
    name: 'sections',
    title: 'Secciones',
    type: 'array',
    of: [{
        type: 'reference',
        to: [{type: 'section'}]
    }]
}
