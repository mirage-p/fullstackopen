import Weather from "./Weather"

const ShowDetails = ({ countries }) => {
    if (countries) {
        return (
            <>
                <h1>{countries.name.common}</h1>
                <p>Capital: {countries.capital}</p>
                <p>Area: {countries.area}</p>
                <p><strong>languages</strong></p>
                <ul>
                    {Object.values(countries.languages)
                        .map((language, index) =>
                            <li key={index}>{language}</li>
                        )}
                </ul>
                <img src={countries.flags.png}></img>
                <Weather country={countries.name.common} lat={countries.latlng[0]} lon={countries.latlng[1]} />
            </>
        )
    }
}

export default ShowDetails