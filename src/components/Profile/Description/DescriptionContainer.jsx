import React from 'react';
import Description from "./Description";
import {connect} from "react-redux";
import {getStatus, updateStatus} from "../../../redux/profile-reducer";

class DescriptionContainer extends React.Component{
    state={
        editMode: !this.props.status,
        status: this.props.status
    }


    componentDidMount() {
        this.props.getStatus(this.props.Auth.userId)
        debugger;
    }

    onChangeAboutMe =(status) =>{
        this.setState({status})
    }

    setAboutMe = (status) =>{
        this.props.updateStatus(status);
        this.setEditMode(false);
    }

    setEditMode = (editModeState) =>
    {
        this.setState({editMode:editModeState});
    }

    render() {
        debugger;
        return (
            <Description
                {...this.props.ProfilePage}
                editMode={this.state.editMode}
                onChangeStatus={this.onChangeAboutMe}
                setStatus={this.setAboutMe}
                setEditMode={this.setEditMode}
            />
        );

    }

}

const mapStateToProps = (state)=>{
    return {
        ...state
    }
};
export default connect(mapStateToProps, {getStatus, updateStatus})(DescriptionContainer);
