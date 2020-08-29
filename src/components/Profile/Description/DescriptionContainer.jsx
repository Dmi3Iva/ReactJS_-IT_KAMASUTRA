import React from 'react';
import Description from "./Description";

class DescriptionContainer extends React.Component{
    state={
        editMode: false,
    }

    componentDidMount() {

    }

    onChangeAboutMe(){

    }

    setAboutMe(){

    }

    setEditMode = (editModeState) =>
    {
        this.setState({editMode:editModeState});
    }

    render() {
        return (
            <Description
                {...this.props}
                editMode={this.state.editMode}
                onChangeAboutMe={this.onChangeAboutMe}
                setAboutMe={this.setAboutMe}
                setEditMode={this.setEditMode}
            />
        );

    }

}

export default DescriptionContainer;
