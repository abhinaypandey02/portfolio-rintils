import React from 'react'

export default function Slicer({ sections, components }: { sections: any[]; components: any }) {
  return (
    <div>
      {/*<div className={'mb-48 w-full'}/>*/}
      {sections?.map((section: any) => (
        <React.Fragment key={section._key}>
          {components[section._type] && React.createElement(components[section._type], section)}
        </React.Fragment>
      ))}
    </div>
  )
}
