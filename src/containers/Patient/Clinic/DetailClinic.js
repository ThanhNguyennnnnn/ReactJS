import React, { Component } from 'react';
import { connect } from "react-redux";
import './DetailClinic.scss';
import { FormattedMessage } from 'react-intl';
import HomeHeader from '../../HomePage/HomeHeader';
import DoctorSchedule from '../Doctor/DoctorSchedule';
import DoctorExtraInfor from '../Doctor/DoctorExtraInfor';
import ProfileDoctor from '../Doctor/ProfileDoctor';
import { getAllDetailClinicById, getAllCodeService } from '../../../services/userService'
import _ from 'lodash';
import { LANGUAGES } from '../../../utils';



class DetailClinic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrDoctorID: [],
            dataDetailClinic: {},
        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;

            let res = await getAllDetailClinicById({
                id: id
            });
            // console.log("check res: ", res)
            if (res && res.errCode === 0) {
                let data = res.data;
                let arrDoctorID = []
                console.log('check data: ', data)
                if (data && !_.isEmpty(data)) {
                    let arr = data.doctorClinic;
                    if (arr && !_.isEmpty(arr)) {
                        arr.map(item => {
                            arrDoctorID.push(item.doctorID)
                        })
                    }
                }

                this.setState({
                    dataDetailClinic: res.data,
                    arrDoctorID: arrDoctorID,
                })
            }
        }
    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }

    }



    render() {
        let { arrDoctorID, dataDetailClinic } = this.state;
        let { language } = this.props
        console.log("check state: ", this.state)
        return (
            <div className='detail-specialty-container'>
                <HomeHeader />
                <div className='detail-specialty-body'>
                    <div className='description-specialty'>
                        {dataDetailClinic && !_.isEmpty(dataDetailClinic)
                            &&
                            <>
                            <div>
                                {dataDetailClinic.name}
                            </div>
                                <div dangerouslySetInnerHTML={{ __html: dataDetailClinic.descriptionHTML }}>

                                </div>
                            </>
                        }
                    </div>

                    {arrDoctorID && arrDoctorID.length > 0 &&
                        arrDoctorID.map((item, index) => {
                            return (
                                <div className='each-doctor' key={index}>
                                    <div className='dt-content-left'>
                                        <div className='profile-doctor'>
                                            <ProfileDoctor
                                                doctorID={item}
                                                isShowDescriptionDoctor={true}
                                                isShowLinkDetail={true}
                                                isShowPrice={false}
                                            />
                                        </div>
                                    </div>
                                    <div className='dt-content-right'>
                                        <div className='doctor-schedule'>
                                            <DoctorSchedule
                                                doctorIDFromParent={item}
                                            />
                                        </div>
                                        <div className='doctor-extra-infor'>
                                            <DoctorExtraInfor
                                                doctorIDFromParent={item}
                                            />
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailClinic);
