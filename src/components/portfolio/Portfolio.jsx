import "./portfolio.scss"

export default function Portfolio() {

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "template",
      title: "Template",
    }
  ]

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        
      </ul>
      <div className="container">
        <div className="item">
          <img src="/assets/unpacker-logo.png" alt=""/>
          <h3>Pokemon Pack Opener</h3>
        </div>
        <div className="item">
          <img src="/assets/unpacker-logo.png" alt=""/>
          <h3>Pokemon Pack Opener</h3>
        </div>
        <div className="item">
          <img src="/assets/unpacker-logo.png" alt=""/>
          <h3>Pokemon Pack Opener</h3>
        </div>
        <div className="item">
          <img src="/assets/unpacker-logo.png" alt=""/>
          <h3>Pokemon Pack Opener</h3>
        </div>
      </div>
    </div>
  )
}
