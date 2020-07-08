import React from 'react'
import styles from './Cards.module.css'
import Card from 'react-bootstrap/Card';
import CountUp from 'react-countup';
import Loader from '../Loader';
const Cards = () => {
    const [deaths, setdeaths] = React.useState(0);
    const [cases, setcases] = React.useState(0);

    const [recovered, setrecovered] = React.useState(0);
    const [time, setTime] = React.useState(0);

    React.useEffect(() => {
        fetch('https://corona.lmao.ninja/v2/all?')
            .then(result => result.json())
            .then(data => {

                console.log(`cases active ${data.cases}`);
                console.log(`death cases ${data.deaths}`);
                console.log(`recovered ${data.recovered}`);
                setcases(data.cases);
                setdeaths(data.deaths);
                setrecovered(data.recovered);
            })


    }, [])

    setTimeout(() => {
        setTime(2)
    }, 3000)

    if (time !== 0) {
        return (
            <div className={styles.horizontalLine}>
                <Card className={styles.confirmedDesign}>
                    <Card.Body className={styles.title}>
                        <Card.Title className={styles.title_text}>Total Confirm Cases</Card.Title>
                        <Card.Text className={styles.description}>
                            <CountUp
                                start={0}
                                end={Number(cases)}
                                duration={1} />
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className={styles.confirmedDesign}>
                    <Card.Body className={styles.title}>
                        <Card.Title className={styles.title_text}>Total Death cases</Card.Title>
                        <Card.Text className={styles.description}>
                            <CountUp
                                start={0}
                                end={Number(deaths)}
                                duration={1} />
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className={styles.confirmedDesign}>
                    <Card.Body className={styles.title}>
                        <Card.Title className={styles.title_text}>Total Recovered cases</Card.Title>
                        <Card.Text className={styles.description}>
                            <CountUp
                                start={0}
                                end={Number(recovered)}
                                duration={1} />
                        </Card.Text>


                    </Card.Body>
                </Card>



            </div>


        )

    }

    return (
        <Loader />
    );

}

export default Cards