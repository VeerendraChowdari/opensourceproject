import React, { useState } from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import './Layout.css';
import Logo from "../assets/logo.avif";

import Counter from '../Counter/Counter';
import RichTextEditor from '../RichText/RichTextEditor';
import UserForm from '../Userform/UserForm';

const Layout: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="container">
            <div className="header">
                <img src={Logo} alt="logo" />
                <h3>React Project Assignment</h3>
                <Link
                    to="https://www.linkedin.com/in/veerendra-kumar-chowdari-1a7238252/"
                    target="_blank"
                    className="sidebar-icon"
                >
                    <i className="fab fa-linkedin"></i>
                </Link>
            </div>

            <div className="layoutbody">
                {/* Sidebar */}
                <div className="sidebar">
                    <div className="sidebar-icons">
                        <Link to="/counter" className="sidebar-icon">
                            <i className="fas fa-tachometer-alt"></i>
                            <span>Counting</span>
                        </Link>
                        <Link to="/form" className="sidebar-icon">
                            <i className="fas fa-edit"></i>
                            <span>Form</span>
                        </Link>
                        <Link to="/font-style" className="sidebar-icon">
                            <i className="fas fa-font"></i>
                            <span>Font Style</span>
                        </Link>
                        <Link to="#" className="sidebar-icon" onClick={handleModalToggle}>
                            <i className="fas fa-info-circle"></i>
                            <span>About</span>
                        </Link>
                    </div>
                </div>

                <div className="mainbody">
                    <Routes>
                        <Route path="/" element={<Navigate to="/counter" />} />
                        <Route path="/counter" element={<Counter />} />
                        <Route path="/form" element={<UserForm />} />
                        <Route path="/font-style" element={<RichTextEditor />} />
                    </Routes>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={handleModalToggle}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2> Thank You for the Opportunity!</h2>
                        <p> I wanna thank you for shortlisted my profile and I am excited to be part of this assessment. </p>
                        <h5>Looking forward for your valuable response.</h5>
                        <button onClick={handleModalToggle}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Layout;
