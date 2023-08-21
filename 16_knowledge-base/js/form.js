var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('#form', {

  colorWrong: '#FF5C00',

  rules: {
    tel: {
      required: true,
      function: () => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    }
  },

  messages: {
    name: {
      required: 'Вы не ввели имя',
      minLength: 'Введите не менее 3х символов',
    },
    tel: {
      required: 'Вы не ввели телефон',
      function: 'Вы не заполнили поле',
    },
    email: {
      email: 'Укажите валидный email',
      required: 'Вы не ввели email',
    },
  },
})



