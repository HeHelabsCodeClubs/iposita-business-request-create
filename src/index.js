import React, { Component } from 'react';
import './style.css';

class IpositaBusinessRequestCreate extends Component {
    constructor(props) {
        super(props);
    }

    render (){
        const { 
            loader,
            createForm,
            addPackageClick,
            addPackageText,
            submitClick,
            submitDisableState,
            submitBtnText
        } = this.props;

        return (
            <div className="row reset-row create-wrapper orderWrapper">
                {loader}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset">
                    <div className="create-content shadow-box">
                        <div className="create-header">
                            <span className="create-title">Create a Request</span>
                        </div>
                        <div className="row reset-row create-form form-container">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset">
                                {createForm}
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 addpackage">
                                <button className="authBtnTwo"
                                onClick={() => addPackageClick()}
                                >{addPackageText}</button>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit-button form-component">
                                <a href="/orders"><button type="cancel" className="authBtnTwo">Cancel</button></a>
                                <button 
                                onClick={() => submitClick()}
                                className="authBtn"
                                disabled={submitDisableState}>
                                {submitBtnText}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default IpositaBusinessRequestCreate;