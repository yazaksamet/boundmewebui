import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Users from "./users";
import { getUserMobileActivities } from "../services/mobileService";

const AnyReactComponent = ({ text }) => (
  <div style={{ color: "red" }}>{text}</div>
);

const defaultProps = {
  center: {
    lat: 40.85,
    lng: 29.29
  },
  zoom: 11
};

class Track extends Component {
  state = {
    mapPlaces: [],
    selectedUser: ""
  };

  handleUserChange = e => {
    let { value } = e.target;
    const selectedUser = value;
    console.log(selectedUser);
    this.setState({
      selectedUser
    });
  };

  showUserActivity = async e => {
    const mapPlaces = await getUserMobileActivities(this.state.selectedUser);
    this.setState({ mapPlaces });
  };

  render() {
    return (
      <React.Fragment>
        <Users handleUserChange={this.handleUserChange} />
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.showUserActivity}
        >
          Göster
        </button>
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            bootstrapURLKeys={{
              key: "",
              language: "tr",
              region: "tr"
            }}
          >
            {this.state.mapPlaces.map(place => (
              <AnyReactComponent
                key={place._id}
                lat={place.latitude}
                lng={place.longitude}
                text={place.dateRecorded}
              />
            ))}
          </GoogleMapReact>
        </div>
      </React.Fragment>
    );
  }
}

export default Track;
