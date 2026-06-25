import juryImg1 from '@/assets/jury/Artur_Vasilov.png'
import juryImg2 from '@/assets/jury/Alexey_Panchenko.png'
import juryImg3 from '@/assets/jury/Sergey_Koltsov.png'
import juryImg4 from '@/assets/jury/Anna_Zharkova.png'
import juryImg5 from '@/assets/jury/Dmitry_Movchan.png'
import juryImg6 from '@/assets/jury/Timur_Gasimov.png'
import juryImg7 from '@/assets/jury/Gena_Evstratov.png'

/* Types */

export type BaseActivity = {
  title: string
  description: string
  number?: string
}

export type PersonBase = {
  name: string
  imgPath?: string
  post?: string
  company?: never
}

export type PersonWithPost = {
  name: string
  imgPath?: string
  post: string
  company: string
}

export type Person = PersonBase | PersonWithPost

/* Header */

export const BURGER_MENU_APPEARANCE_WIDTH = 1023

export type HeaderMenuLink = {
  lable: string
  href: string
}
export type HeaderMenuLinks = Array<HeaderMenuLink>

export const BASE_HEADER_MENU_LINKS: HeaderMenuLinks = [
  {
    lable: 'О\u00A0мероприятии',
    href: '##',
  },
  {
    lable: 'AI-хакатон',
    href: '##',
  },
  {
    lable: 'Что ещё вас ждёт',
    href: '##',
  },
  {
    lable: 'Жюри',
    href: '##',
  },
  {
    lable: 'Программа',
    href: '##',
  },
]

/* Activities */

export const BASE_ACTIVITIES_CARDS_CONTENT: Array<BaseActivity> = [
  {
    title: 'Воркшопы по\u00A0разработке',
    description:
      'Пробуем в\u00A0реальном времени написать MPC для\u00A0мобильного разработчика, исправить ошибки и\u00A0сделать приложение быстрее, а\u00A0ещё почувствовать себя в\u00A0роли разработчика карт.',
  },
  {
    title: 'Воркшопы по\u00A0разработке',
    description:
      'Пробуем в\u00A0реальном времени написать MPC для\u00A0мобильного разработчика, исправить ошибки и\u00A0сделать приложение быстрее, а\u00A0ещё почувствовать себя в\u00A0роли разработчика карт.',
  },
  {
    title: 'Воркшопы по\u00A0разработке',
    description:
      'Пробуем в\u00A0реальном времени написать MPC для\u00A0мобильного разработчика, исправить ошибки и\u00A0сделать приложение быстрее, а\u00A0ещё почувствовать себя в\u00A0роли разработчика карт.',
  },
  {
    title: 'Воркшопы по\u00A0разработке',
    description:
      'Пробуем в\u00A0реальном времени написать MPC для\u00A0мобильного разработчика, исправить ошибки и\u00A0сделать приложение быстрее, а\u00A0ещё почувствовать себя в\u00A0роли разработчика карт.',
  },
  {
    title: 'Воркшопы по\u00A0разработке',
    description:
      'Пробуем в\u00A0реальном времени написать MPC для\u00A0мобильного разработчика, исправить ошибки и\u00A0сделать приложение быстрее, а\u00A0ещё почувствовать себя в\u00A0роли разработчика карт.',
  },
  {
    title: 'Воркшопы по\u00A0разработке',
    description:
      'Пробуем в\u00A0реальном времени написать MPC для\u00A0мобильного разработчика, исправить ошибки и\u00A0сделать приложение быстрее, а\u00A0ещё почувствовать себя в\u00A0роли разработчика карт.',
  },
]

/* Jury */

export const BASE_JURY_CARDS_CONTENT: Array<Person> = [
  {
    imgPath: juryImg1.src,
    name: 'Артур Василов',
    post: 'Руководитель мобильной разработки',
    company: 'Яндекс Браузер',
  },
  {
    imgPath: juryImg2.src,
    name: 'Алексей Панченко',
    post: 'Разработчик мобильной инфраструктуры',
    company: 'Яндекс',
  },
  {
    imgPath: juryImg3.src,
    name: 'Сергей Кольцов',
    post: 'Руководитель мобильной core-команды',
    company: 'Яндекс Про',
  },
  {
    imgPath: juryImg4.src,
    name: 'Анна Жаркова',
    post: 'Руководитель практики по\u00A0мобильной разработке',
    company: 'Usetech',
  },
  {
    imgPath: juryImg5.src,
    name: 'Дмитрий Мовчан',
    post: 'Руководитель мобильной разработки',
    company: 'Дзен',
  },
  {
    imgPath: juryImg6.src,
    name: 'Тимур Гасымов',
    post: 'Руководитель изменений в\u00A0VK',
    company: 'Компания',
  },
  {
    imgPath: juryImg7.src,
    name: 'Геннадий Евстратов',
    post: 'Руководитель проектов',
    company: 'Яндекс',
  },
]
