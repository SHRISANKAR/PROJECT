import {useEffect, useState} from "react"
function Main() {

   const [articles, setArticles]= useState([]);
   const [search, setSearch] = useState("")

    useEffect(()=>{
        let url = "https://newsapi.org/v2/everything?q=Microsoft&apiKey=4eddb66d8cd443e0995b0d1030a1ccb0"

        fetch(url)
        .then((response)=>response.json())
        .then((news)=>{
            console.log(news.articles);
            setArticles(news.articles);
        })
    },[])
    function readValue(value) {
        setSearch(value);
    }

    function searchNews(){
        let url = `https://newsapi.org/v2/everything?q=${search}&apiKey=4eddb66d8cd443e0995b0d1030a1ccb0`
        fetch(url)
        .then((response)=>response.json())
        .then((news)=>{
            setArticles(news.articles);
        })

    }

    return(

        <div className="container">
            <div className="padd">
            <div className="filter">
                <input type="search" onchange={(event)=>{readValue(event.targrt.value)}} placeholder="Enter your topic"> 
                    <button className="btn" onclick={searchNews}>search your news</button>
                 </input>
            </div>
            <h1>ALL NEWS</h1>
                {

                    articles.length===0?<h2>no data found</h2>:articles.map((article,index)=>
                    {
                       return(<div key={index} className="article">
                        <div className="padd-article">
                        <div className="news-img">
                            <img src={article.urlToImage} alt=""/>
                        </div>
                        <div className="news-details">
                            <h2>{article.title}</h2>
                            <p>{article.author}</p>
                            <p>{article.description}</p>
                            <p>
                            <a href={article.url} target="blank">
                            <button className="btn" >Read full Article</button>
                            </a>
                               
                            </p>
                        </div>

                        </div>

                        </div>
                        )
                    })
                }
            </div>
        </div>
        
    )
}
export default Main