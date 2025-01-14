import React from 'react';
import backgroundImage from '../../../assets/banner-05.f607f14abcebc9afc311.png';
import './PageFive.css';

export const PageFive = () => {
    return (
        <div
            className="page5-container"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className="page5-content">
                {/* Company */}
                <div className="page5-section">
                    <h2 className="section-title">Company.</h2>
                    <div className="contact-item">
                        <p className="contact-text">support@maxius.io</p>
                        <p className="contact-icon">✉️</p>
                    </div>
                </div>

                {/* Warranty */}
                <div className="page5-section">
                    <h2 className="section-title">Warranty.</h2>
                    <p className="learn-more">Learn more &gt;</p>
                </div>

                {/* Technical Support */}
                <div className="page5-section">
                    <h2 className="section-title">Technical support.</h2>
                    <div className="contact-item">
                        <p className="contact-text">support@maxius.io</p>
                        <p className="contact-icon">✉️</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
