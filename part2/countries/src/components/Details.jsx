
import Weather from "./Weather"


const Details = ({ countries }) => {
    if (countries) {
        return (
            <>
                <h1>{countries[0].name.common}</h1>
                <p>Capital: {countries[0].capital[0]}</p>
                <p>Area: {countries[0].area}</p>
                <p><strong>languages</strong></p>
                <ul>
                    {Object.values(countries[0].languages)
                        .map((language, index) =>
                            <li key={index}>{language}</li>
                        )}
                </ul>
                <img src={countries[0].flags.png}></img>
                <Weather country={countries[0].name.common} lat={countries[0].latlng[0]} lon={countries[0].latlng[1]} />
            </>
        )
    }
}



export default Details