import style from './style.module.scss'

export default function Work({ company, position, start, end }) {
  return (
    <div className={style.work}>
      <div className="flex flex-row">
        <div className="group">
          <h3 className={style.company}>{company}</h3>
          <span className={style.position}>{position}</span>
        </div>
        <span className={style.date}>{start}-{end}</span>
      </div>
    </div>
  )
}