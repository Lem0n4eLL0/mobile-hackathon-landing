import styles from './About.module.css'

export const About = () => {
  return (
    <div id="about" className={styles['about__wrapper']}>
      <section className={styles['about']}>
        <p className={styles['about__description']}>
          Yandex Mobile Runtime&nbsp;&mdash; летний фестиваль практики и&nbsp;карьерного роста
          для&nbsp;мобильных разработчиков. Встречаемся mobile-сообществом, чтобы обменяться опытом
          и&nbsp;попробовать&nbsp;AI в&nbsp;реальных задачах.
        </p>
        <ul className={styles['about__list']}>
          <li className={styles['about__list-item']}>Воркшопы</li>
          <li className={styles['about__list-item']}>Карьерные консультации</li>
          <li className={styles['about__list-item']}>AI-хакатон</li>
          <li className={styles['about__list-item']}>Дискуссии</li>
          <li className={styles['about__list-item']}>Квиз</li>
          <li className={styles['about__list-item']}>Летний двор</li>
        </ul>
      </section>
    </div>
  )
}
