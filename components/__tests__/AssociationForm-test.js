// form.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AssociationForm from '../association/AssociationForm';

describe('AssociationForm', () => {
  it('should update input values on change', () => {
    const { getByPlaceholderText } = render(<AssociationForm />);
    const rnaInput = getByPlaceholderText('W123456789');
    const nameInput = getByPlaceholderText('Nom');
    const phoneInput = getByPlaceholderText('0623456789');
    const adresseInput = getByPlaceholderText('Adresse');
    const townInput = getByPlaceholderText('Ville');
    const postcodeInput = getByPlaceholderText('Code Postal');

    fireEvent.changeText(rnaInput, 'W123456789');
    fireEvent.changeText(nameInput, 'My Association');
    fireEvent.changeText(phoneInput, '0623456789');
    fireEvent.changeText(adresseInput, '123 Main St');
    fireEvent.changeText(townInput, 'City');
    fireEvent.changeText(postcodeInput, '12345');

    expect(rnaInput.props.value).toBe('W123456789');
    expect(nameInput.props.value).toBe('My Association');
    expect(phoneInput.props.value).toBe('0623456789');
    expect(adresseInput.props.value).toBe('123 Main St');
    expect(townInput.props.value).toBe('City');
    expect(postcodeInput.props.value).toBe('12345');
  });

  it('should submit the form on button press', () => {
    const { getByTestId } = render(<AssociationForm />);
    const submitButton = getByTestId('submit-button');

    fireEvent.press(submitButton);

    // Add your assertions here to check if the form was submitted successfully
    // For example, you can check if the state variables are reset or if an API request was made
  });
});
