import { useState } from 'react';
import Details from './Details'
import ShowDetails from './ShowDetails';

const Results = ({ list, search }) => {
    const [target, setTarget] = useState([])
    const [show, setShow] = useState(false)


    const countries = list.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))

    const handleClick = (country) => {
        setTarget(country)
        setShow(!show)
    }
    const handleBack = () => {
        setShow(!show)
        setTarget([])
    }

    if (countries.length == 1) {
        return <Details countries={countries} />
    } else if (show) {
        return (
            <>
            <button onClick={() => handleBack({})}>back</button>
            <ShowDetails countries={target.country} />
            </>
        )
    } else if (countries.length <= 10) {
        return (
            <>
                <div>
                    {countries.map((country, index) =>
                        <p key={index}>
                            {country.name.common}
                            <button onClick={() => handleClick({country})}>show</button>
                        </p>
                    )}
                </div>
            </>
        )
    } else {
        return null
    }
}

export default Results