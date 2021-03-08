export const Schema = {
  schema: {
    title: 'This is Totally Dynamic Form Title',
    description: 'A simple form Description.',
    type: 'object',
    required: ['firstName', 'lastName'],
    properties: {
      firstName: {
        type: 'string',
        title: 'First name',
        default: 'Omar',
      },
      lastName: {
        type: 'string',
        title: 'Last name',
      },
      age: {
        type: 'integer',
        title: 'Age',
      },
      checkbox: {
        type: 'boolean',
        title: 'CheckBox',
        default: false,
      },
      dropdownList: {
        type: 'string',
        title: 'DropDown',
        enum: ['option one', 'option two', 'option three'],
      },
      radioButton: {
        type: 'string',
        title: 'Radio button',
        enum: ['Option 1', 'Option 2', 'Option 3'],
        widget: {
          formlyConfig: {
            type: 'radio',
          },
        },
      },
    },
  },
};
