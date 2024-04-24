import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils'
import { changeLanguageApp } from '../../store/actions/appActions';
import { last } from 'lodash';


class HomeHeader extends Component {

    changeLanguage= (language) => {
        this.props.changeLanguageAppRedux(language)
        console.log('hi ',this.props.changeLanguageAppRedux(language))

        // fire redux event: actions
    }

        render() {

            // console.log('check props: ', this.props)
            let language = this.props.language;
            return (
                <React.Fragment>
                    <div className='home-header-container'>
                        <div className='home-header-content'>
                            <div className='left-content'>
                                <i className="fas fa-bars"></i>
                                <div className='header-logo'></div>
                            </div>
                            <div className='center-content'>
                                <div className='child-content'>
                                    <div>
                                        <b> <FormattedMessage id="home-header.specialty" /></b>
                                    </div>
                                    <div className='subs-title'><FormattedMessage id="home-header.search-doctor" /></div>
                                </div>
                                <div className='child-content'>
                                    <div>
                                        <b><FormattedMessage id="home-header.health-facility" /></b>
                                    </div>
                                    <div className='subs-title'><FormattedMessage id="home-header.select-room" /></div>
                                </div>
                                <div className='child-content'>
                                    <div>
                                        <b><FormattedMessage id="home-header.doctor" /></b>
                                    </div>
                                    <div className='subs-title'><FormattedMessage id="home-header.select-doctor" /></div>
                                </div>
                                <div className='child-content'>
                                    <div>
                                        <b><FormattedMessage id="home-header.fee" /></b>
                                    </div>
                                    <div className='subs-title'><FormattedMessage id="home-header.check-health" /></div>
                                </div>
                            </div>
                            <div className='right-content'>
                                <div className='support'>
                                    <i className="fas fa-question-circle"></i>
                                    <FormattedMessage id="home-header.support" />
                                </div>
                                <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}>
                                    <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span>
                                </div>
                                <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}>
                                    <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='home-header-banner'>
                        <div className='content-up'>
                            <div className='title1'>
                                <FormattedMessage id="banner.title1" />
                            </div>
                            <div className='title2'>
                                <FormattedMessage id="banner.title2" />
                            </div>
                            <div className='search'>
                                <i className="fas fa-search"></i>
                                <input type='text' placeholder='Tìm chuyên khoa khám bệnh...' />
                            </div>
                        </div>
                        <div className='content-down'>
                            <div className='options'>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="far fa-hospital"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.Specialized-examination" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-mobile-alt"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.Remote-examination" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-hospital-alt"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.General-examination" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-flask"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.Medical-tests" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-user-md"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.Mental-health" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-notes-medical"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.Dental-examination" /></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }

    }

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};
// dinh nghia cho ben appReduce
const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
