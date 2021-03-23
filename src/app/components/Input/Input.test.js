import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'react-jss';
import theme from '../../theme';
import Input from '.';

describe('Input', () => {
    test('should render input correctly', () => {
        const input = render(
            <ThemeProvider theme={theme}>
                <Input className="input" placeholder="Input" value="foo" />
            </ThemeProvider>,
        );

        expect(input).toMatchSnapshot();
    });

    test('should render textarea correctly', () => {
        const textarea = render(
            <ThemeProvider theme={theme}>
                <Input className="textarea" placeholder="textarea" isTextArea={true} value="foo" />
            </ThemeProvider>,
        );

        expect(textarea).toMatchSnapshot();
    });

    test('should render an input', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <Input className="input" placeholder="Input" value="foo" />
            </ThemeProvider>,
        );
        expect(container.firstChild.getAttribute('class')).toContain('input');
        expect(container.querySelector('input')).not.toBe(null);
        expect(container.querySelector('input').getAttribute('placeholder')).toBe('Input');
        expect(container.querySelector('input').value).toBe('foo');
    });

    test('should change its value', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <Input />
            </ThemeProvider>,
        );
        const htmlInput = container.querySelector('input');
        fireEvent.change(htmlInput, { target: { value: 'foo' } });
        expect(htmlInput.value).toBe('foo');
    });

    test('should be disabled', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <Input value="foo" disabled />
            </ThemeProvider>,
        );
        const htmlInput = container.querySelector('input');
        expect(htmlInput.value).toBe('foo');
        expect(htmlInput.hasAttribute('disabled')).toBe(true);
    });
});
