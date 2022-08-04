import { Component } from "react";

//Mui
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';

class Customer extends Component {
    render() {
        return (
            <div>
                <TableRow>
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell><img src={this.props.image} alt="profile"></img> </TableCell>
                    <TableCell>{this.props.name}</TableCell>
                    <TableCell>{this.props.birthday}</TableCell>
                    <TableCell>{this.props.gender}</TableCell>
                    <TableCell>{this.props.job}</TableCell>
                </TableRow>

            </div>
        );
    }
}



export default Customer;