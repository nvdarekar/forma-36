import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import TextField from './TextField';

storiesOf('Components|TextField', module)
  .addParameters({
    propTypes: TextField['__docgenInfo'],
  })
  .add('default', () => (
    <TextField
      className={text('className', '')}
      isRequired={boolean('isRequired', false)}
      formLabelProps={{
        requiredText: text('requiredText', undefined),
      }}
      name="emailInput"
      id="emailInput"
      labelText={text('labelText', 'Label')}
      value={text('value', '123456')}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      textInputProps={{
        withCopyButton: boolean('withCopyButton', false),
        isDisabled: boolean('isDisabled', false),
        placeholder: text('placeholder', 'Placeholder text'),
        maxLength: number('maxLength', 50),
        type: select(
          'type',
          {
            'Text (default)': 'text',
            password: 'password',
            email: 'email',
            number: 'number',
            url: 'url',
            search: 'search',
          },
          'text',
        ),
        width: select(
          'width',
          {
            'Full (default)': 'full',
            large: 'large',
            medium: 'medium',
            small: 'small',
          },
          'full',
        ),
      }}
      helpText={text('helpText', '')}
      validationMessage={text('validationMessage', '')}
    />
  ))
  .add('with Textarea', () => (
    <TextField
      className={text('className', '')}
      isTextarea
      isRequired={boolean('isRequired', false)}
      formLabelProps={{
        requiredText: text('requiredText', undefined),
      }}
      name="emailInput"
      id="emailInput"
      labelText={text('labelText', 'Label')}
      value={text('value', '123456')}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      textInputProps={{
        isDisabled: boolean('isDisabled', false),
        placeholder: text('placeholder', 'Placeholder text'),
        maxLength: number('maxLength', 50),
        rows: number('rows', 2),
        type: select(
          'type',
          {
            'Text (default)': 'text',
            password: 'password',
            email: 'email',
            number: 'number',
            url: 'url',
            search: 'search',
          },
          'text',
        ),
        width: select(
          'width',
          {
            'Full (default)': 'full',
            large: 'large',
            medium: 'medium',
            small: 'small',
          },
          'full',
        ),
      }}
      helpText={text('helpText', '')}
      validationMessage={text('validationMessage', '')}
    />
  ))
  .add('with TextLink', () => (
    <TextField
      className={text('className', '')}
      isTextarea
      isRequired={boolean('isRequired', false)}
      formLabelProps={{
        requiredText: text('requiredText', undefined),
      }}
      labelText={text('labelText', 'Label')}
      textLinkProps={{
        icon: text('icon', 'Lock'),
        text: text('text', 'Unlock to edit'),
        onClick: action('onClick'),
      }}
      name="emailInput"
      id="emailInput"
      value={text('Value', '123456')}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      textInputProps={{
        isDisabled: boolean('isDisabled', false),
        placeholder: text('placeholder', 'Placeholder text'),
        maxLength: number('maxLength', 50),
        rows: number('rows', 2),
        type: select(
          'type',
          {
            'Text (default)': 'text',
            password: 'password',
            email: 'email',
            number: 'number',
            url: 'url',
            search: 'search',
          },
          'text',
        ),
        width: select(
          'width',
          {
            'Full (default)': 'full',
            large: 'large',
            medium: 'medium',
            small: 'small',
          },
          'full',
        ),
      }}
      helpText={text('helpText', '')}
      validationMessage={text('validationMessage', '')}
    />
  ))
  .add('with Character count', () => (
    <TextField
      countCharacters={boolean('countCharacters', true)}
      className={text('className', '')}
      isRequired={boolean('isRequired', false)}
      formLabelProps={{
        requiredText: text('requiredText', undefined),
      }}
      labelText={text('labelText', 'Label')}
      name="emailInput"
      id="emailInput"
      value={text('value', '123456')}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      textInputProps={{
        isDisabled: boolean('isDisabled', false),
        placeholder: text('placeholder', 'Placeholder text'),
        maxLength: number('maxLength', 20),
        rows: number('rows', 2),
        type: select(
          'type',
          {
            'Text (default)': 'text',
            password: 'password',
            email: 'email',
            number: 'number',
            url: 'url',
            search: 'search',
          },
          'text',
        ),
        width: select(
          'width',
          {
            'Full (default)': 'full',
            large: 'large',
            medium: 'medium',
            small: 'small',
          },
          'full',
        ),
      }}
      helpText={text('helpText', '')}
      validationMessage={text('validationMessage', '')}
    />
  ));
