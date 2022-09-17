import "./projects.scss"

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="slider">
        <div className="container">
        <div className="item">
          <div className="left">
            <div className="leftContainer">
              <div className="imgContainer">
                <img src="" alt="" />
              </div>
              <h2>Title</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Aspernatur id enim placeat veniam expedita eaque, deserunt pariatur ad quidem minus soluta iusto facilis sunt velit asperiores quas laborum laboriosam corrupti?</p>
            <span>Projects
            </span>
            </div>
          </div>
          <div className="right">
            <img src="assets/back.png" alt="" />
          </div>
        </div>
        </div>
        </div>
      <img src="assets/left-arrow.png" className="arrow left" alt="" />
      <img src="assets/right-arrow.png" className="arrow right" alt="" />
    </div>
  )
}
