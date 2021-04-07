import * as actions from '../../actions/vehicleAction'

import { Button, Container, Paper, Typography } from '@material-ui/core';
import React, { Component } from 'react'

import Alert from '@material-ui/lab/Alert';
import { VehicleNavBar } from "./VehicleNavBar"
import { connect } from 'react-redux';

class AddVehicle extends Component {

    constructor() {
        super();
        this.vehicleNumber = React.createRef();
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.type = React.createRef();
        this.category= React.createRef();
        this.description= React.createRef();
        this.location= React.createRef();
        this.capacity= React.createRef();
        this.chargesPerKm= React.createRef();
        this.fixedCharges= React.createRef();
        this.applicationId = React.createRef();
        this.state = { message: "" };
    }

    componentDidUpdate(prevProps) {
        if (this.props.message !== prevProps.message) {
            this.props.message ? this.setState({ displayAlert: true }): this.setState({ displayAlert: false });
        }
    }
    

    addVehicle(event) {
        var vehicle = {
            vehicleNumber: this.vehicleNumber.current.value,
          firstName: this.firstName.current.value,
          lastName: this.lastName.current.value,
          
          type: this.type.current.value,
          category: this.category.current.value,
          description: this.description.current.value,
          location: this.location.current.value,
          capacity: this.capacity.current.value,
          chargesPerKm: this.chargesPerKm.current.value,
          fixedCharges : this.fixedCharges.current.value
        };

        this.props.onAddVehicle(vehicle)


    }

    render() { 
        return (
            <div>
                 <VehicleNavBar/>
                {this.state.displayAlert &&  <Alert variant="filled" severity="success" style={{justifyContent:"center"}}>
                    {this.props.message}
                </Alert>}
                <Container maxWidth="sm" style={{ marginTop: 15 }}>
                    <Paper elevation={5} style={{ padding: 8, justifyContent: "center", display: "flex" }} >
                        <form>

                        <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Vehicle Number</Typography>
                            <input type="text" ref={this.vehicleNumber} placeholder="Enter firstName" name="firstName" required /><br></br><br></br>
                            <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Vehicle driver</Typography>
                            <input type="text" ref={this.firstName} placeholder="Enter lastName" name="lastName" required /><br></br><br></br>
                            <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Vehicle driver</Typography>
                            <input type="text" ref={this.lastName} placeholder="Enter lastName" name="lastName" required /><br></br><br></br>
                            <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Vehicle Type</Typography>
                            <input type="text" ref={this.type} placeholder="Enter emailId" name="emailId" required /><br></br><br></br>
                            <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Vehicle Category</Typography>
                            <input type="text" ref={this.category} placeholder="Enter mobileNumber" name="mobileNumber" required /><br></br><br></br>
                            <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Discription</Typography>
                            <input type="text" ref={this.description} placeholder="Enter address" name="address" required /><br></br><br></br>
                            <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Location</Typography>
                            <input type="text" ref={this.location} placeholder="Enter address" name="address" required /><br></br><br></br>
                            <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Capacity</Typography>
                            <input type="text" ref={this.capacity} placeholder="Enter address" name="address" required /><br></br><br></br>
                            <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>chargesPerKm</Typography>
                            <input type="text" ref={this.chargesPerKm} placeholder="Enter address" name="address" required /><br></br><br></br>
                            <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>fixedCharges</Typography>
                            <input type="text" ref={this.fixedCharges} placeholder="Enter address" name="address" required /><br></br><br></br>
                            <Button style={{ align: "center" }} variant="contained" onClick={this.addVehicle.bind(this)} color="primary">Add Vehicle</Button>
                        </form>
                    </Paper>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onAddVehicle: (payload) => dispatch(actions.addVehicle(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToState)(AddVehicle);
