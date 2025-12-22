This file contains my personal notes about this project and anything I learned that I want to remember.

# Sass

To override Bootstrap Sass variables, first remove the Bootstrap import from your main `.js` or `.jsx` file. Then create a custom `.scss` file and format it like the following code block:

```
@use "bootstrap/scss/bootstrap" with (
    $primary: #0072c6
);
```

Then import that file in your main `.js` or `.jsx` file. Normally `.scss` files need to be compiled in to CSS before they are used, but Vite will do that for me automatically.

# TODO

- ELO System?

# Misc. Notes

Using a `checked` attribute on a `radio` or `checkbox` html input will lock the input. To mark it as default and allow the user to edit it, use the `defaultChecked` attribute.