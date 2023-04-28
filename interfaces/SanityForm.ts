export default interface SanityForm {
  fields: {
    label: string
    placeholder: string
    type: 'email' | 'text' | 'textarea'
    id: string
    required: boolean
  }[]
}
