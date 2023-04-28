import { FieldValues, useForm } from 'react-hook-form'

import SanityFeaturedText from '../../interfaces/SanityFeaturedText'
import SanityForm from '../../interfaces/SanityForm'
import Container from '../atoms/Container'
import Wrapper from '../atoms/Wrapper'

export default function Form(props: SanityForm) {
  const { register, handleSubmit } = useForm()
  function onSubmit(data: FieldValues) {
    alert(JSON.stringify(data))
  }
  return (
    <Wrapper>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          {props.fields.map((field) => (
            <div key={field.id}>
              <label>{field.label}</label>

              {field.type === 'textarea' ? (
                <textarea
                  {...register(field.id, { required: field.required })}
                  placeholder={field.placeholder}
                />
              ) : (
                <input
                  type={field.type}
                  {...register(field.id, { required: field.required })}
                  placeholder={field.placeholder}
                />
              )}
            </div>
          ))}
        </form>
      </Container>
    </Wrapper>
  )
}
