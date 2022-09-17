import "./references.scss"

export default function References() {

  const data = [
    {
      name: "Ravogan",
      img: "https://pbs.twimg.com/profile_images/1552523337124851713/jJ5JXBH0_400x400.jpg",
      desc: "Displayed great Luau knowledge and amazing asset designing skills.",
      title: "Roblox Game Manager"
    },
    {
      name: "Chase McCarty",
      img: "https://media-exp1.licdn.com/dms/image/C5603AQFcKFLdMRh7hA/profile-displayphoto-shrink_800_800/0/1605311178654?e=1665014400&v=beta&t=E6QSJrY9O2DUpfHjpStEKUE82-KHtocAtBQ02ApjW3Q",
      desc: "Very eager to learn new technologies and using them creatively",
      title: "Software Enginner at Roblox",
      feature: true
    },
    {
      name: "Sandip Mishra",
      img: "https://avatars.githubusercontent.com/u/61094468?v=4",
      desc: "I told him REACT is important, so he learnt it the week after. ",
      title: "Web Developer, GFX Designer"
    }
  ];

  return (
    <div className="references" id="references">
        <h1>References</h1>
        <div className="container">
          {data.map((d) =>(
          <div className={d.feature ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/left-arrow.png" className="left" alt="" />
              <img src={d.img} className="user" alt="" />
              <img src="assets/right-arrow.png" className="right"  alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
          ))}
        </div>
    </div>
  )
}
