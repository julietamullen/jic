import styles from "../styles/Featured.module.css"
import featured from "../featured.json"
import FeaturedCard from "../components/FeaturedCard"

export default function Featured () {
    
    return(
        <div className={styles.container}>
            <div className={styles.grid}>
                { featured.map(item => { // Por cada item en el JSON featured, devuelve una tarjeta cuya clase va a depender o no de la key "double"
                    return(
                        <FeaturedCard
                    title={item.title}
                    brand={item.brand}
                    img={item.img}
                    className={item.double ? styles.f1 : styles.f2}
                    double={item.double}/>
                    )
                })}
                </div>
            <p className={styles.p}>See all works <img src="/arrow.png" alt="See all works" className={styles.arrow}/></p>
        </div>
    )
}