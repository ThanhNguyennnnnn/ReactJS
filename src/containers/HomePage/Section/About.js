import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';




class About extends Component {

    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói gì về giá trị của sức khỏe
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/GyC6R221T8Y" title="Có sức khỏe là có tất cả | VTV24" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className='content-right'>
                        <p>Sức khỏe là tài sản quý giá nhất, vì nó không chỉ tạo ra niềm vui mà còn là nền tảng cho sự phát triển cá nhân và xã hội. Thời gian, yếu tố thứ hai quan trọng không kém, là cần thiết cho mọi hoạt động trong cuộc sống. Tận dụng thời gian là quyết định sáng tạo và quan trọng.</p>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};
// dinh nghia cho ben appReduce
const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
