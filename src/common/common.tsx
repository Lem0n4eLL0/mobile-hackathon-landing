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
