import React from 'react';
import Header from '../header';
import Content from './content';

export const Dashboard = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Header />
                <Content />
            </div>
        </div>
    )
}

export default Dashboard;