const el = document.querySelector('#selectCustom');

const choices = new Choices (el, {
    searchEnabled: false,
    shouldSort: false,
    choices: [
        {
            value: 'option_one',
            label: 'Древесина',
            selected: true,
            disabled: false,
        },
        {
            value: 'option_two',
            label: 'Металл',
            selected: true,
            disabled: false,
        },
        {
            value: 'option-three',
            label: 'Камень',
            selected: true,
            disabled: false,
        },
        {
            value: 'option-four',
            label: 'Пластик',
            selected: true,
            disabled: false,
        },
        {
            value: 'option-five',
            label: 'Композит',
            selected: true,
            disabled: false,
        },
        {
            value: 'option-six',
            label: 'Гипс',
            selected: true,
            disabled: false,
        },
        {
            value: 'option-saven',
            label: 'Материал',
            selected: true,
            disabled: false,
        },
    ],

    renderChoiceLimit: 6,
});