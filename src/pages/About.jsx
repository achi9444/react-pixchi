import React, { useState } from "react";
import "../styles/About.scss";

const About = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 這裡可以接 API 或 Email 發送功能
        console.log(formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <>
            <main className="about-main">
                <section className="about-contact">
                    <div className="about-me">
                        <h2>關於我</h2>
                        <p>平日是學校與家的兩點一線，假日不出門，<br />
                            沒有機會探索外面的世界，這是我的成長背景。<br />
                            線上遊戲《新楓之谷》成了我的生活樂趣、最熟悉的宇宙。<br />
                            現實生活裡，我靜靜地過日子；在像素構築的世界裡，<br />
                            我可以在不同地圖穿梭，打怪、解任務、升級裝備，像是自己也充滿了活力。<br />
                            那些角色不是我，但卻是我嚮往的樣子。<br />
                            我不會畫畫，也沒有藝術細胞，但拼豆，卻是我能夠掌握的創作方式。<br />
                            猶豫了很久，我才下定決心買了整套的拼豆用具。<br />
                            家人的反應也如我所想：「你買這個幹嘛？浪費錢」<br />
                            他們不理解我為什麼花那麼多時間坐在桌前，只為了玩這個無聊的「玩具」。<br />
                            但一顆一顆的，一點一點的，是在拼湊心情，還是拼湊想像中的自己？<br />
                            顏色不搭？那就換一個顏色；排列不順？那就調換位置。<br />
                            它們是我靜靜地陪伴自己，藏進角色裡的語言。<br />
                            現在，我把這些都放在這裡，也把曾經被質疑的我，放在這裡。<br />
                            如果你剛好停下腳步看看，也許你會拼湊出新的自己。</p>
                    </div>

                    <div className="contact-form">
                        <h2>聯絡我</h2>
                        {submitted ? (
                            <p className="success-message">謝謝你的訊息！<br />我會盡快回覆你^^</p>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <label>
                                    名字
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <label>
                                    Email
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <label>
                                    訊息
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <button type="submit">送出</button>
                            </form>
                        )}
                    </div>
                </section>
            </main>
        </>
    );
};

export default About;
