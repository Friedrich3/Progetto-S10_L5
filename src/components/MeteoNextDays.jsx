/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

const MeteoNextDays = function (props) {
  // eslint-disable-next-line no-unused-vars
  const [citta, setCitta] = useState({});
  const [listaMeteo, setListaMeteo] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (props.search === "") {
      fetchLocationData();
    } else {
      fetchSearchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.search]); //DIDMOUNT

  const fetchLocationData = async function () {
    //const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.location.city},${props.location.countryCode}&appid=ddc0cf03218fcced7c3d841c79b3f14f`
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.location.city}&appid=ddc0cf03218fcced7c3d841c79b3f14f`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setCitta(data);
        setListaMeteo(data.list);
        setIsVisible(true);
      } else {
        throw new Error("ErroreFetch");
      }
    } catch (error) {
      console.log("Errore", error);
      setIsVisible(false);
    }
  };

  const fetchSearchData = async function () {
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.search}&appid=ddc0cf03218fcced7c3d841c79b3f14f`
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.search}&appid=ddc0cf03218fcced7c3d841c79b3f14f`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setCitta(data);
        setListaMeteo(data.list);
        setIsVisible(true);
      } else {
        throw new Error("ErroreFetch");
      }
    } catch (error) {
      console.log("Errore", error);
      setIsVisible(false);
    }
  };

  const getTemp = (element) => {
    return Math.floor(element - 273.15);
  };

  return (
    <>
      {isVisible && (
        <Container>
          <Row className=" justify-content-center">
            <h2 className="text-center">Next Days Meteo</h2>
            <Col xs={12} md={6}>
              <ListGroup>
                {listaMeteo.map((e) => {
                  return (
                    <ListGroup.Item key={e.dt}>
                      <div>
                        <h4>{e['dt_txt']}</h4>
                        <div>
                        <img
                            src={`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`}
                            alt="weatherIcon"
                            style={{ width: "60px" }}
                          />
                          <span className=" fs-1 align-self-center">
                            {getTemp(e.main.temp)}°
                          </span>
                        </div>
                        <p className="fw-bold">{e.weather[0].main}</p>
                      </div>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
export default MeteoNextDays;
