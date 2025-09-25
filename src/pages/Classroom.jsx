import React from 'react'
import "../styles/Classroom.scss"
import PerlerSimulator from '../components/PerlerSimulator'
const Classroom = () => {
  return (
    <>
      <main className='classMain'>
        <header className="perler-header">
          <h2>拼豆模擬器</h2>
          <p>
            歡迎使用拼豆模擬器！你可以自訂格數、選擇顏色、使用畫筆或橡皮擦進行創作。<br />
            完成後還能匯出 PNG 圖片，並選擇是否顯示格線。
          </p>
        </header>
        <section className="perler-main">
          <PerlerSimulator />
        </section>
      </main>
    </>
  )
}

export default Classroom