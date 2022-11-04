import { BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom'
import logo from "../../img/logo.png"

const menus = [
    {
        id: 1,
        path: "/",
        text: "Top Page"
    },
    {
        id: 2,
        path: "/columns",
        text: "Columns"
    },
    {
        id: 3,
        path: "/record",
        text: "Record"
    }
];

function Header () {
    return (
        <div className='header'>
            

            <Breadcrumb>
                {
                    menus.map((x, index) => (
                        <BreadcrumbItem key={index}>
                            <Link to={x.path}>{x.text}</Link>
                        </BreadcrumbItem>
                    ))
                }
            </Breadcrumb>
        </div>
    );
}

export default Header;