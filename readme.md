# Staccato
Staccato is a simple set of guidelines for writing React code.


1. Components are written in arrow function with the keyword `const`.
2. Components receive custom prop data through a single prop - in camelCase - written as the name of the Component suffixed by `Data`, eg. `myComponentData`.
3. Components never contain hardcoded ids, classes or inline styling. Instead, they need to be passed as part of the data prop and always conform to the following:
- `style` - The object containing inline styling.
- `id` - The string used for the `id` attribute. 
- `className` - The string used for the attribute `className` in React or `class` in Html.

Example:
``` javascript
const Form = ({formData}) => (
  <form action="" className={formData.className} id={formData.id} style={formData.style}>
    <fieldset>
      <legend>{formData.legend}</legend>
      {
        formData.fields.map(field => (
          <Field fieldData={field.data}/>
        ))
      }
    </fieldset>
  </form>
)
```