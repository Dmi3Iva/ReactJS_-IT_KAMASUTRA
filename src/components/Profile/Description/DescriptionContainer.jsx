import React from 'react';
import Description from "./Description";
import {connect} from "react-redux";
import {getStatus, updateStatus} from "../../../redux/profile-reducer";

class DescriptionContainer extends React.Component{
    state={
        editMode: false,//!this.props.status,
        status: this.props.status
    }

    componentDidMount() {
        this.props.getStatus(this.props.profile.userId)
        this.setState((state, props) =>({
            status: props.status
        }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status)
        {
            this.setState({
                status: this.props.status
            })
        }
    }

    onChangeStatus =(status) =>{
        this.setState({status})
    }

    setAboutMe = () =>{
        this.props.updateStatus(this.state.status);
        this.setEditMode(false);
    }

    setEditMode = (editModeState) =>
    {
        this.setState({editMode:editModeState});
    }

    render() {
        return (
            <Description
                profile={this.props.profile}
                status={this.state.status}
                editMode={this.state.editMode}
                onChangeStatus={this.onChangeStatus}
                setStatus={this.setAboutMe}
                setEditMode={this.setEditMode}
            />
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status
    }
};
export default connect(mapStateToProps, {getStatus, updateStatus})(DescriptionContainer);
