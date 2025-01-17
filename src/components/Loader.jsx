import { Spinner } from "react-bootstrap"

const Loader = function (){
    return(
        <div className="text-center">
              <Spinner animation="border" variant="white" />
              <span className="text-white ">Loading...</span>
            </div>
    )
}
export default Loader