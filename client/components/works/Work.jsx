import React, { useState } from 'react';

function Work() {
  //used to decide which slide is set to, initial at 0
  const [slide, setSlider] = useState(0);
  const data = [
    {
      id: '1',
      icon: './assets/fullstack_icons/react.png',
      title: 'React',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      img: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930',
    },
    {
      id: '2',
      icon: './assets/globe.png',
      title: 'Mobile Application',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: 'https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg',
    },
    {
      id: '3',
      icon: './assets/writing.png',
      title: 'Branding',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: 'https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg',
    },
  ];
  const handleClick = (direction) => {
    direction === 'left' ? setSlider(slide > 0 ? slide - 1 : 2) : setSlider(slide < data.length - 1 ? slide + 1 : 0);
  };
  return (
    <div className="work">
      <div className="work-slider" id="work" style={{ transform: `translateX(-${slide * 100}vw)` }}>
        {data.map((d) => (
          <div className="work-container">
            <div className="work-container-item">
              <div className="work-left">
                <div className="work-leftContainer">
                  <div className="work-imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2 className="work-title">{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="work-right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <img src="assets/arrow.png" className="work-arrow work-left" alt="" onClick={() => handleClick('left')} />

      <img src="assets/arrow.png" className="work-arrow work-right" alt="" onClick={() => handleClick()} />
    </div>
  );
}

export default Work;
