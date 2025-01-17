import { Alert } from "react-bootstrap"

const Error = function (){
    return(
        <>
        <Alert variant="danger">
          <Alert.Heading>
            Oh snap! The city you are searching for is unavailable!
          </Alert.Heading>
          <p>
            It seems you&apos;ve entered an incorrect city. Please try again!
          </p>
        </Alert>
      </>
    )
}
export default Error