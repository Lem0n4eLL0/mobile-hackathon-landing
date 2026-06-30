import juryImg1 from '@/assets/jury/Artur_Vasilov.png'
import juryImg2 from '@/assets/jury/Alexey_Panchenko.png'
import juryImg3 from '@/assets/jury/Sergey_Koltsov.png'
import juryImg4 from '@/assets/jury/Anna_Zharkova.png'
import juryImg5 from '@/assets/jury/Dmitry_Movchan.png'
import juryImg6 from '@/assets/jury/Timur_Gasimov.png'
import juryImg7 from '@/assets/jury/Gena_Evstratov.png'

import moulinRougeSpeakerArturVasilov from '@/assets/speakers/moulin_rouge_hall/Artur_Vasilov.png'
import moulinRougeSpeakerMarkDubko from '@/assets/speakers/moulin_rouge_hall/Mark_Dubko.png'
import moulinRougeSpeakerNikitaShapovalov from '@/assets/speakers/moulin_rouge_hall/Nikita_Shapovalov.png'
import moulinRougeSpeakerNikolayPuchko from '@/assets/speakers/moulin_rouge_hall/Nikolay_Puchko.png'
import moulinRougeSpeakerOlegBelyankov from '@/assets/speakers/moulin_rouge_hall/Oleg_Belyankov.png'

import peerLabSpeakerAlexanderVerestnikov from '@/assets/speakers/peerlab_from_city_services/Alexander_Verestnikov.png'
import peerLabSpeakerEgorGubanovfrom from '@/assets/speakers/peerlab_from_city_services/Egor_Gubanov.png'
import peerLabSpeakerKonstantinLargin from '@/assets/speakers/peerlab_from_city_services/Konstantin_Largin.png'
import peerLabSpeakerLevBondarenko from '@/assets/speakers/peerlab_from_city_services/Lev_Bondarenko.png'
import peerLabSpeakerMikhailChernikov from '@/assets/speakers/peerlab_from_city_services/Mikhail_Chernikov.png'
import peerLabSpeakerNikitaVasilchenko from '@/assets/speakers/peerlab_from_city_services/Nikita_Vasilchenko.png'

import { ReactNode } from 'react'

export const TYPO = {
  NDASH: `\u2013`,
  EMDASH: `\u2014`,
  NBSP: `\u00A0`,
  QUOTE_LEFT: `\u201C`,
  QUOTE_RIGHT: `\u201D`,
  LAQUO: `\u00AB`,
  RAQUO: `\u00BB`,
} as const

/* Types */

export type BaseActivity = {
  title: string
  description: string
  number?: string
}

export type BaseTiming = {
  title: string
  description: string
  timing: string
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
    lable: `О${TYPO.NBSP}мероприятии`,
    href: `##`,
  },
  {
    lable: `AI-хакатон`,
    href: `##`,
  },
  {
    lable: `Что ещё вас ждёт`,
    href: `##`,
  },
  {
    lable: `Жюри`,
    href: `##`,
  },
  {
    lable: `Программа`,
    href: `##`,
  },
]

/* Activities */

export const BASE_ACTIVITIES_CARDS_CONTENT: Array<BaseActivity> = [
  {
    title: `Воркшопы по${TYPO.NBSP}разработке`,
    description: `Пробуем в${TYPO.NBSP}реальном времени написать MPC для${TYPO.NBSP}мобильного разработчика, исправить ошибки и${TYPO.NBSP}сделать приложение быстрее, а${TYPO.NBSP}ещё почувствовать себя в${TYPO.NBSP}роли разработчика карт.`,
  },
  {
    title: `Воркшопы по${TYPO.NBSP}разработке`,
    description: `Пробуем в${TYPO.NBSP}реальном времени написать MPC для${TYPO.NBSP}мобильного разработчика, исправить ошибки и${TYPO.NBSP}сделать приложение быстрее, а${TYPO.NBSP}ещё почувствовать себя в${TYPO.NBSP}роли разработчика карт.`,
  },
  {
    title: `Воркшопы по${TYPO.NBSP}разработке`,
    description: `Пробуем в${TYPO.NBSP}реальном времени написать MPC для${TYPO.NBSP}мобильного разработчика, исправить ошибки и${TYPO.NBSP}сделать приложение быстрее, а${TYPO.NBSP}ещё почувствовать себя в${TYPO.NBSP}роли разработчика карт.`,
  },
  {
    title: `Воркшопы по${TYPO.NBSP}разработке`,
    description: `Пробуем в${TYPO.NBSP}реальном времени написать MPC для${TYPO.NBSP}мобильного разработчика, исправить ошибки и${TYPO.NBSP}сделать приложение быстрее, а${TYPO.NBSP}ещё почувствовать себя в${TYPO.NBSP}роли разработчика карт.`,
  },
  {
    title: `Воркшопы по${TYPO.NBSP}разработке`,
    description: `Пробуем в${TYPO.NBSP}реальном времени написать MPC для${TYPO.NBSP}мобильного разработчика, исправить ошибки и${TYPO.NBSP}сделать приложение быстрее, а${TYPO.NBSP}ещё почувствовать себя в${TYPO.NBSP}роли разработчика карт.`,
  },
  {
    title: `Воркшопы по${TYPO.NBSP}разработке`,
    description: `Пробуем в${TYPO.NBSP}реальном времени написать MPC для${TYPO.NBSP}мобильного разработчика, исправить ошибки и${TYPO.NBSP}сделать приложение быстрее, а${TYPO.NBSP}ещё почувствовать себя в${TYPO.NBSP}роли разработчика карт.`,
  },
]

/* Jury */

export const BASE_JURY_CARDS_CONTENT: Array<Person> = [
  {
    imgPath: juryImg1.src,
    name: `Артур Василов`,
    post: `Руководитель мобильной разработки`,
    company: `Яндекс Браузер`,
  },
  {
    imgPath: juryImg2.src,
    name: `Алексей Панченко`,
    post: `Разработчик мобильной инфраструктуры`,
    company: `Яндекс`,
  },
  {
    imgPath: juryImg3.src,
    name: `Сергей Кольцов`,
    post: `Руководитель мобильной core-команды`,
    company: `Яндекс Про`,
  },
  {
    imgPath: juryImg4.src,
    name: `Анна Жаркова`,
    post: `Руководитель практики по${TYPO.NBSP}мобильной разработке`,
    company: `Usetech`,
  },
  {
    imgPath: juryImg5.src,
    name: `Дмитрий Мовчан`,
    post: `Руководитель мобильной разработки`,
    company: `Дзен`,
  },
  {
    imgPath: juryImg6.src,
    name: `Тимур Гасымов`,
    post: `Руководитель изменений в${TYPO.NBSP}VK`,
    company: `Компания`,
  },
  {
    imgPath: juryImg7.src,
    name: `Геннадий Евстратов`,
    post: `Руководитель проектов`,
    company: `Яндекс`,
  },
]

/* Timing */

export const BASE_TIMING_CARDS_CONTENT: Array<BaseTiming> = [
  {
    title: `Регистрация\nкоманды`,
    timing: `До${TYPO.NBSP}10${TYPO.NBSP}августа`,
    description: `Участвовать могут от${TYPO.NBSP}1${TYPO.NBSP}до${TYPO.NBSP}5${TYPO.NBSP}человек. Команду регистрирует капитан, одна команда${TYPO.NBSP}\u2014 одна заявка.`,
  },
  {
    title: `Результаты\nотбора`,
    timing: `В${TYPO.NBSP}течение 7${TYPO.NDASH}10 дней`,
    description: `Вам на${TYPO.NBSP}почту придёт ответ по${TYPO.NBSP}участию и${TYPO.NBSP}с${TYPO.NBSP}вами свяжется куратор из${TYPO.NBSP}Яндекса${TYPO.NBSP}\u2014 можно будет задать любые вопросы.`,
  },
  {
    title: `Напоминание${TYPO.NBSP}+\nподтверждение`,
    timing: `15${TYPO.NDASH}20 августа`,
    description: `Мы${TYPO.NBSP}пришлём вам письмо на${TYPO.NBSP}почту, в${TYPO.NBSP}котором попросим подтвердить участие вашей команды в${TYPO.NBSP}AI-хакатоне.`,
  },
]

/* Program */

export type TProgramEvent = {
  timeInterval: string
  title: string
  type?: string
  presenters?: Array<Person>
}

export type TProgram = {
  lable: string
  events: Array<TProgramEvent>
}

export type TButtonTypes = 'pink' | 'black'
export type TButton = {
  lable: ReactNode
  link: string
  type: TButtonTypes
}

export type TProgramBlock = {
  program: TProgram
  buttons: Array<TButton>
}

export const BASE_PROGRAM_TABS_CARDS_CONTENT: Array<TProgramBlock> = [
  {
    program: {
      lable: `Зал ${TYPO.LAQUO}Экстрополис${TYPO.RAQUO}`,
      events: [
        {
          timeInterval: `11:00${TYPO.NDASH}11:30`,
          title: `Регистрация и${TYPO.NBSP}сбор команд на${TYPO.NBSP}хакатон`,
        },
        {
          timeInterval: `11:30${TYPO.NDASH}12:00`,
          title: `Открытие хакатона и${TYPO.NBSP}распределение задач`,
        },
        {
          timeInterval: `12:00${TYPO.NDASH}17:00`,
          title: `Время для${TYPO.NBSP}разработки${TYPO.NBSP}/ активной работы${TYPO.NBSP}/ хакатона`,
          type: `Хакатон`,
        },
        {
          timeInterval: `17:00${TYPO.NDASH}17:30`,
          title: `Стоп разработки и${TYPO.NBSP}подготовка к${TYPO.NBSP}финальной презентации`,
          type: `Хакатон`,
        },
        {
          timeInterval: `17:30${TYPO.NDASH}18:30`,
          title: `Презентация результатов проектов`,
          type: `Хакатон`,
        },
        {
          timeInterval: `18:30${TYPO.NDASH}19:00`,
          title: `Перерыв`,
        },
        {
          timeInterval: `19:00${TYPO.NDASH}19:30`,
          title: `Результаты и${TYPO.NBSP}награждение`,
          type: `Хакатон`,
        },
        {
          timeInterval: `19:30${TYPO.NDASH}20:00`,
          title: `Перерыв`,
        },
        {
          timeInterval: `20:00${TYPO.NDASH}21:30`,
          title: `Квиз про${TYPO.NBSP}мобильную разработку`,
          type: `Хакатон`,
        },
        {
          timeInterval: `21:30`,
          title: `DJ-сет`,
        },
      ],
    },
    buttons: [
      {
        lable: `Регистрация на${TYPO.NBSP}хакатон`,
        link: `##`,
        type: `black`,
      },
      {
        lable: `Кодить на${TYPO.NBSP}AI-хакатоне`,
        link: `##`,
        type: `pink`,
      },
    ],
  },
  {
    program: {
      lable: `Зал ${TYPO.LAQUO}Мулен Руж${TYPO.RAQUO}`,
      events: [
        {
          timeInterval: `11:00${TYPO.NDASH}12:00`,
          title: `Сбор гостей, регистрация и${TYPO.NBSP}кофе-брейк`,
        },
        {
          timeInterval: `12:00${TYPO.NDASH}12:15`,
          title: `Открытие`,
        },
        {
          timeInterval: `12:30${TYPO.NDASH}14:00`,
          title: `Воркшоп ${TYPO.LAQUO}Пишем MCP для${TYPO.NBSP}мобильных разработчиков${TYPO.RAQUO}`,
          type: `Ивент`,
          presenters: [
            {
              name: `Николай Пучко`,
              imgPath: moulinRougeSpeakerNikolayPuchko.src,
              post: `Руководитель федерации мобильного CX${TYPO.NBSP}Путешествий`,
            },
          ],
        },
        {
          timeInterval: `14:00${TYPO.NDASH}14:30`,
          title: `Обед`,
        },
        {
          timeInterval: `14:30${TYPO.NDASH}16:00`,
          title: `Воркшоп ${TYPO.LAQUO}Ускорение приложений${TYPO.RAQUO}`,
          type: `Ивент`,
          presenters: [
            {
              name: `Никита Шаповалов`,
              imgPath: moulinRougeSpeakerNikitaShapovalov.src,
              post: `Руководитель группы технологий скорости в${TYPO.NBSP}Яндекс Маркете`,
            },
          ],
        },
        {
          timeInterval: `16:00${TYPO.NDASH}16:10`,
          title: `Перерыв`,
        },
        {
          timeInterval: `16:10${TYPO.NDASH}17:30`,
          title: `Воркшоп ${TYPO.LAQUO}Почувствуй себя разработчиком карт${TYPO.RAQUO}`,
          type: `Ивент`,
          presenters: [
            {
              name: `Олег Белянков`,
              imgPath: moulinRougeSpeakerOlegBelyankov.src,
              post: `Разработчик в${TYPO.NBSP}Яндекс Картах`,
            },
            {
              name: `Марк Дубков`,
              imgPath: moulinRougeSpeakerMarkDubko.src,
              post: `Разработчик в${TYPO.NBSP}Яндекс Картах`,
            },
          ],
        },
        {
          timeInterval: `17:30${TYPO.NDASH}17:40`,
          title: `Перерыв`,
        },
        {
          timeInterval: `17:40${TYPO.NDASH}19:00`,
          title: `Мобильная разработка 2025+: тренды и${TYPO.NBSP}вызовы`,
          type: `Ивент`,
          presenters: [
            {
              name: `Артур Василов`,
              imgPath: moulinRougeSpeakerArturVasilov.src,
              post: `Руководитель мобильной разработки в${TYPO.NBSP}Яндекс Браузере`,
            },
          ],
        },
      ],
    },
    buttons: [
      {
        lable: `Регистрация на${TYPO.NBSP}хакатон`,
        link: `##`,
        type: `black`,
      },
      {
        lable: `Кодить на${TYPO.NBSP}AI-хакатоне`,
        link: `##`,
        type: `pink`,
      },
    ],
  },
  {
    program: {
      lable: `PeerLab от${TYPO.NBSP}Городских сервисов`,
      events: [
        {
          timeInterval: `12:30${TYPO.NDASH}14:00`,
          title: `BDUI`,
          type: `Ивент`,
          presenters: [
            {
              name: `Егор Губанов`,
              imgPath: peerLabSpeakerEgorGubanovfrom.src,
              post: `iOS-разработчик в${TYPO.NBSP}Яндекс Маркете`,
            },
            {
              name: `Александр Верестников`,
              imgPath: peerLabSpeakerAlexanderVerestnikov.src,
              post: `Руководитель подгруппы в${TYPO.NBSP}команде Яндекс${TYPO.NBSP}Go`,
            },
          ],
        },
        {
          timeInterval: `14:30${TYPO.NDASH}16:00`,
          title: `ADR, System Design и${TYPO.NBSP}глобальные рефакторинги`,
          type: `Ивент`,
          presenters: [
            {
              name: `Константин Ларгин`,
              imgPath: peerLabSpeakerKonstantinLargin.src,
              post: `Руководитель мобильной разработки Яндекс Еды`,
            },
            {
              name: `Лев Бондаренко`,
              imgPath: peerLabSpeakerLevBondarenko.src,
              post: `iOS-разработчик в${TYPO.NBSP}Яндекс Еде`,
            },
          ],
        },
        {
          timeInterval: `16:00${TYPO.NDASH}17:30`,
          title: `Метрики мобильных приложений`,
          type: `Ивент`,
          presenters: [
            {
              name: `Никита Васильченко`,
              imgPath: peerLabSpeakerNikitaVasilchenko.src,
              post: `Руководитель группы скорости в${TYPO.NBSP}Go`,
            },
            {
              name: `Михаил Черников`,
              imgPath: peerLabSpeakerMikhailChernikov.src,
              post: `Руководитель мобильной разработки покупки в${TYPO.NBSP}Яндекс Маркете`,
            },
          ],
        },
      ],
    },
    buttons: [
      {
        lable: `Регистрация на${TYPO.NBSP}фестиваль`,
        link: `##`,
        type: `pink`,
      },
    ],
  },
]
