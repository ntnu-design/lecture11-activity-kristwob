import React from "react";
import CoffeeButton from "./CoffeeButton";
import Thermos from "./Thermos";
import "./CoffeeControl.css";

export default function CoffeeControl({ litersBrewed, onClick }) {
  return (
    <div className="CoffeeControl">
      <Thermos litersBrewed={litersBrewed} />

      <div className="flex-columns">
        <CoffeeButton litersToBrew="2.2" onClick={onClick} />
        <CoffeeButton litersToBrew="1.1" onClick={onClick} />
        <CoffeeButton litersToBrew="0.5" onClick={onClick} />
      </div>
    </div>
  );
}

CoffeeControl.defaultProps = {
    litersBrewed: '2.2',
    onClick: () => {}
}

/* class CoffeeControl extends Component {
    constructor(props) {
        super(props);
        //Careful! This is an anti-pattern (more in the future)
        this.state = { ...props }
    }

    handleOnClick = (newLiters) => {
        console.log(newLiters);
        this.setState({ litersBrewed: newLiters });
    }

    render() {
        return (
            <div className="CoffeeControl">
                <Thermos {...this.state} />

                <div className="flex-columns">
                    <CoffeeButton litersToBrew='2.2' onClick={this.handleOnClick}/>

                    <CoffeeButton litersToBrew='1.1' onClick={this.handleOnClick}/>

                    <CoffeeButton litersToBrew='0.5' onClick={this.handleOnClick}/>
                </div>
            </div>
        );
    }
} */

//export default CoffeeControl;
