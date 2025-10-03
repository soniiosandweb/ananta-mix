import smartHomes from '../../../assests/images/amenities/smart-home.png';
import sketch from '../../../assests/images/amenities/sketch.png';
import projects from '../../../assests/images/amenities/check-list.png';
import stadium from '../../../assests/images/amenities/stadium.png';
import park from '../../../assests/images/amenities/park.png';
import swimming from '../../../assests/images/amenities/swimming-pool.png';
import powerStation from '../../../assests/images/amenities/power-station.png';
import security from '../../../assests/images/amenities/secure-shield.png';
import tableTennis from '../../../assests/images/amenities/Table-Tennis.png';
import weight from '../../../assests/images/amenities/weight.png';
import badminton from '../../../assests/images/amenities/badminton.png';
import volleyball from '../../../assests/images/amenities/volleyball.png';
import skate from '../../../assests/images/amenities/skate.png';
import poolTable from '../../../assests/images/amenities/pool-table.png';
import spa from '../../../assests/images/amenities/massage.png';
import waterSupply from '../../../assests/images/amenities/water-supply.png';
import backup from '../../../assests/images/amenities/backup.png';
import fireSystem from '../../../assests/images/amenities/extinguisher.png';
import coffee from '../../../assests/images/amenities/coffee.png';
import earthquake from '../../../assests/images/amenities/earthquake.png';
import { Col, Container, Row } from 'react-bootstrap';

const Amenities = () => {

    const amenitiesItems = [
        {
            title: "Fully automated smart homes",
            image: smartHomes,
        },
        {
            title: "MIVAN Construction",
            image: sketch,
        },
        {
            title: "Dual Core Project",
            image: projects,
        },
        {
            title: "Cricket Pitch",
            image: stadium,
        },
        {
            title: "Children’s Play Area",
            image: park,
        },
        {
            title: "Zen Garden & Water Body",
            image: swimming,
        },
        {
            title: "EV Charging Point",
            image: powerStation,
        },
        {
            title: "3 Tier Security System",
            image: security,
        },
        {
            title: "Table tennis room",
            image: tableTennis,
        },
        {
            title: "Gymnasium, Yoga and Aerobics",
            image: weight,
        },
        {
            title: "Lawn tennis & Badminton court",
            image: badminton,
        },
        {
            title: "Volleyball court",
            image: volleyball,
        },
        {
            title: "Skating rink",
            image: skate,
        },
        {
            title: "Billiards room",
            image: poolTable,
        },
        {
            title: "Spa/ Salon",
            image: spa,
        },
        {
            title: "24/7 Water Supply",
            image: waterSupply,
        },
        {
            title: "24/7 Power Backup",
            image: backup,
        },
        {
            title: "Fire Fighting System",
            image: fireSystem,
        },
        {
            title: "Coffee Shop",
            image: coffee,
        },
        {
            title: "Earthquake Resistant Structure",
            image: earthquake,
        }
    ]

    return(
        <section className="amenities_section padding-top padding-bottom" id="amenities">
            <Container>
                <Row>
                    <Col>
                        <h2 className="main_heading">Amenities</h2>
                        <div className="max-w-5xl m-auto pt-5 text-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-flow-row gap-3.5 md:gap-7">
                            {amenitiesItems.map((item, i) => (
                                <div key={i} className='p-5 bg-primary-brown rounded-2xl text-white cursor-pointer aminities-group' style={{boxShadow : "0px 3px 20px 0px rgba(0, 0, 0, 0.30196078431372547)"}}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className='w-60 mx-auto mb-3.5 animate-wobble'
                                    />
                                    <p className='text-sm capitalize font-norms leading-snug mb-0'>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}

export default Amenities