/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";



const MeteoAttuale = function (props) {
  const [citta, setCitta] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetchLocationData();
  }, []); //DIDMOUNT

  const fetchLocationData = async function () {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.location.city},${props.location.countryCode}&appid=ddc0cf03218fcced7c3d841c79b3f14f`
    

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setCitta(data);
        setIsVisible(true)
      } else {
        throw new Error("ErroreFetch");
      }
    } catch (error) {
      console.log("Errore", error);
      setIsVisible(false)
    }
  };

  const getTemp = (element) => {
    return Math.floor(element - 273.15);
  };
  const getTime = (element) => {
    const sunTimer = new Date(element * 1000);
    const sunTime = `${sunTimer
      .getHours()
      .toString()
      .padStart(2, "0")}:${sunTimer.getMinutes().toString().padStart(2, "0")}`;
    return sunTime;
  };
    const getweatherImg = function(element){
        return element.replaceAll(' ','-')
    }

  return (
    <>
    {isVisible &&
      <Container fluid style={{ height: "35vh" }}>
        <Row xs={12} className="h-100">
          <Col className="h-100">
            <Card className="bg-dark text-white fw-bold">
              <Card.Img
                src={`public/${getweatherImg(citta.weather[0].description)}.jpg`}
                alt="WeatherInfo"
                style={{ height: "35vh" }}
              />
              <Card.ImgOverlay>
                <Card.Title className="fs-1">
                  {citta.name} - {citta.sys.country}
                </Card.Title>

                <Card.Text className="d-flex">
                  <img
                    src={`https://openweathermap.org/img/wn/${citta.weather[0].icon}@2x.png`}
                    alt="weatherIcon"
                  />
                  <span className=" fs-1 align-self-center">
                    {getTemp(citta.main.temp)}°
                  </span>
                </Card.Text>
                <Card.Text>{citta.weather.description}</Card.Text>
                <Card.Text>
                  Min. {getTemp(citta.main.temp_min)}° - Max.
                  {getTemp(citta.main.temp_max)}°
                </Card.Text>
                <Card.Text>Humidity: {citta.main.humidity}%</Card.Text>
                <Card.Text>
                  Sunrise {getTime(citta.sys.sunrise)} - Sunset
                  {getTime(citta.sys.sunset)}
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
}
    </>
  );
};
export default MeteoAttuale;
