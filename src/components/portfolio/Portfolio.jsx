import "./portfolio.scss"
import { useEffect,useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  featuredPortfolio
} from "../../data";

export default function Portfolio() {

const [selected,setSelected] = useState("featured");
const [data, setData] = useState([]);

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
  ];

  useEffect(()=>{
      /*
    Just So I dont forget later:
    To Add more tabs to the portfolio access the "data.js" file in src, it contains all the data for these things.

    Just copy and paste the already made files and it will help create new parts to the site.

    At the time of making this you I will probably only have The pokemon unpacker up because all my other sites are not published (including the noise map world generator)

  */
    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break
      default:
        setData(featuredPortfolio);
    }
  },[selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item=>(
          <PortfolioList title={item.title} active={selected===item.id} setSelected={setSelected} id={item.id}/>
        ))}
      </ul>
      <div className="container">
        {data.map(d=>(
        <div className="item">
          <img src={d.img} alt=""/>
          <h3> <a href={d.src}> {d.title}</a></h3>
        </div>
        ))}
      </div>
    </div>
  )
}
