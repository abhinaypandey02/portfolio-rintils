import {
  PortableText,
  PortableTextComponents,
  PortableTextProps,
  PortableTextReactComponents,
} from '@portabletext/react'

import SanityFeaturedText from '../../interfaces/SanityFeaturedText'
import SanityRichText from '../../interfaces/SanityRichText'
import { SanityImage } from '../../sanity/components'
import Container from '../atoms/Container'
import Wrapper from '../atoms/Wrapper'
const myPortableTextComponents: any = {
  types: {
    table: ({ value }: any) => (
      <div className={'body mt-8 mb-12 grid grid-cols-1 gap-x-6 gap-y-8  md:grid-cols-2'}>
        {value.rows.map((row: any) => (
          <div key={row._key}>
            <h2 className={'mb-4 text-h2'}>{row.heading}</h2>
            <p className={'text-grey'}>{row.description}</p>
          </div>
        ))}
      </div>
    ),
    images_container: ({ value }: any) => (
      <div className={'mt-14 mb-12 flex'}>
        {value.images.map((image: any) => (
          <div key={image._key}>
            <SanityImage image={image} />
          </div>
        ))}
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => <h1 className={'body my-8 text-h1'}>{children}</h1>,
    h2: ({ children }: any) => <h2 className={'body my-8 text-h2'}>{children}</h2>,
    h3: ({ children }: any) => <h3 className={'body my-8 text-h3'}>{children}</h3>,
    h4: ({ children }: any) => <h4 className={'body my-8 text-h3'}>{children}</h4>,
    h5: ({ children }: any) => <h5 className={'body my-8 text-h3'}>{children}</h5>,
    h6: ({ children }: any) => <h6 className={'body my-8 text-h3'}>{children}</h6>,
    normal: ({ children }: any) => <p className={'body my-8  text-grey'}>{children}</p>,
  },
}
export default function RichText(props: { rich_text: PortableTextProps<any>['value'] }) {
  console.log(props)
  return (
    <Wrapper>
      <Container>
        <PortableText
          value={props.rich_text}
          components={{
            types: {
              table: ({ value }) => (
                <div className={'body mt-8 mb-12 grid grid-cols-1 gap-x-6 gap-y-8  md:grid-cols-2'}>
                  {value.rows.map((row: any) => (
                    <div key={row._key}>
                      <h2 className={'mb-4 text-h2'}>{row.heading}</h2>
                      <p className={'text-grey'}>{row.description}</p>
                    </div>
                  ))}
                </div>
              ),
              images_container: ({ value }) => (
                <div className={'mt-14 mb-12 flex'}>
                  {value.images.map((image: any) => (
                    <div key={image._key}>
                      <SanityImage image={image} />
                    </div>
                  ))}
                </div>
              ),
            },
            block: {
              h1: ({ children }) => <h1 className={'body my-8 text-h1'}>{children}</h1>,
              h2: ({ children }) => <h2 className={'body my-8 text-h2'}>{children}</h2>,
              h3: ({ children }) => <h3 className={'body my-8 text-h3'}>{children}</h3>,
              h4: ({ children }) => <h4 className={'body my-8 text-h3'}>{children}</h4>,
              h5: ({ children }) => <h5 className={'body my-8 text-h3'}>{children}</h5>,
              h6: ({ children }) => <h6 className={'body my-8 text-h3'}>{children}</h6>,
              normal: ({ children }) => <p className={'body my-8  text-grey'}>{children}</p>,
            },
          }}
        />
      </Container>
    </Wrapper>
  )
}
