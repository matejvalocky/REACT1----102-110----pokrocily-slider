import "./OneMovieSlider.css"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useState, useEffect } from "react"
import data from "../data"

const OneMovieSlider = () => {
    const [index, setIndex] = useState(0)



    return <section className="all-movies">
        <div className="all-movies-content">
            
             {data.map ( (oneMovie, oneMovieIndex) => {
                const {id, image, title, age, tags, description} = oneMovie

                let mainClass = "next-slide"

                if (oneMovieIndex === index){
                    mainClass = "active-slide"
                } 

                if (oneMovieIndex === index - 1 || (index === 0 && oneMovieIndex === data.length -1)){
                    mainClass = "last-slide"
                }



                return <article key={id} className={mainClass}>
                    <img src={image} alt="" />
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>{tags}</p>
                    <p>{age}</p>
                </article>
             })}
        </div>
        <button>
            <FaArrowCircleLeft />
        </button>
        <button>
        <   FaArrowCircleRight />  
        </button>
        
    </section>
}

export default OneMovieSlider
