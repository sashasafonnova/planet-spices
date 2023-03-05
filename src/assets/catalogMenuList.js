
const catalogMenuList = [
   {
      name: "Все товары",
      item: "Все товары",
      param: "",
      value: "",
   },
   {
      name: "Хиты продаж",
      item: "Хиты продаж",
      param: "category",
      value: "Хит",
   },
   {
      name: "Скидки",
      item: "Скидки",
      param: "category",
      value: "Скидка",
   },
   {
      name: "Новинки",
      item: "Новинки",
      param: "category",
      value: "New",
   },
   {
      name: "Пряности и специи",
      item: "Перец и паприка",
      param: "type",
      value: "paprika-perec",
      types: [
         {
            name: "Перец и паприка",
            item: "Перец и паприка",
            param: "type",
            value: "paprika-perec",
         },
         {
            name: "Классические приправы",
            item: "Классические приправы",
            param: "type",
            value: "classic",
         },
         {
            name: "Пряные травы и овощи",
            item: "Пряные травы и овощи",
            param: "type",
            value: "herbs",
         },
         {
            name: "Смеси приправ",
            item: "Смеси приправ",
            param: "type",
            value: "mix",
         },
      ]
   },
   {
      name: "Основные блюда",
      item: "Основные блюда",
      param: "dishes",
      value: "Основные",
   },
   {
      name: "Для выпечки",
      item: "Для выпечки",
      param: "dishes",
      value: "Выпечка",
   },
   {
      name: "Для напитков",
      item: "Для напитков",
      param: "dishes",
      value: "Напитки",
   },
   {
      name: "Для консервации",
      item: "Для консервации",
      param: "dishes",
      value: "Консервация",
   },
]


export default catalogMenuList;