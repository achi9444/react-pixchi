import React, { useEffect } from 'react'
import { workInfo, levelData } from '../data/workInfo'
import '../styles/Materialize.scss'
import CarouselStage from '../components/CarouselStage'
import { useLocation } from 'react-router-dom'

const Materialize = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // 到畫面最頂部
      window.scrollTo({ top: 0, behavior: 'auto' });

      // 到指定區域
      const target = document.querySelector(hash);
      if (target) {
        const yOffset = -70; // 預留navbar空間
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [hash]);

  const LevelSection = ({ title, desc, group, className, id }) => (
    <section id={id} className={className}>
      <div className='materTitle'>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      {group.map(({ tag, item }, i) => (
        <div className='workBox' key={i}>
          <div className='titleBox'>
            <h3>{tag}</h3>
          </div>
          <div className='cardList'>
            {item.map(work => (
              <div key={work.id} className="workCard">
                <img src={work.img} alt={work.title} loading="lazy" />
                <p>{work.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )

  return (
    <>
      <main className='materMain'>
        <header className='materHeader'>
          <CarouselStage />
        </header>
        <LevelSection {...levelData.level_1} id='level1' className='level1' />
        <LevelSection {...levelData.level_2} id='level2' className='level2' />
        <LevelSection {...levelData.level_3} id='level3' className='level3' />
      </main>
    </>
  )
}

export default Materialize