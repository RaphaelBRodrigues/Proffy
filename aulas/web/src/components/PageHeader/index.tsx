import React from 'react';
import { Link } from 'react-router-dom'; 
import logoImg from '../../images/icons/logo.svg';
import backIcon from '../../images/icons/back.svg';
import './styles';

interface PageHeaderProps {
    title: string;
}



const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return(
        <header className="page-headedr">
        <div className="top-bar-container">
            <Link to="/">
                <img src={logoImg} alt=""/>
            </Link>
            <img src={backIcon} alt=""/>
        </div>
        <div className="header-contetnt">
            <strong>
            {props.title}
            </strong>
        {props.children}
        </div>
    </header>
    );
}

export default PageHeader;