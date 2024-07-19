import React from "react";
// Importing the logo
import logo from "../../assets/main-website-logo.webp";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    Bars4Icon,
    UserGroupIcon,
    UsersIcon,
    UserCircleIcon
} from "@heroicons/react/24/solid";

//? navListMenuItems is an array containing menu items, each item is an object with three properties: (title, description, and icon.)
//! Where each item has a title, a description, and an icon associated with it. 
//! This data structure could be used, for example, to dynamically render a navigation menu in a web application.

const navListMenuItems = [
    {
        title: "Executive Team",
        link: "https://www.federationskatingclub.ca/pages/club-page/board-members/",
        description: "Learn how we can help you achieve your goals.",
        icon: UsersIcon,
    },
    {
        title: "Coaching Team",
        link : "https://www.federationskatingclub.ca/pages/club-page/undefined/",
        description: "Meet our team of professional coaches.",
        icon: UserGroupIcon,
    },
    {
        title: "Recommended Vendors & Funding Assistance",
        link: "https://www.federationskatingclub.ca/pages/club-page/links/",
        description: "Explore our network of trusted partners.",
        icon: Bars4Icon,
    },
    {
        title: "Parental Information",
        link: "https://www.federationskatingclub.ca/pages/club-page/links/",
        description: "Find the perfect solution for your needs.",
        icon: UserCircleIcon,
    },
];

function NavListMenu() {
    
    // ? is Menu Open is the current state value, its initialized to false
    // ? setIsMenuOpen is the function that will be used to update the state value
    
    //! In our situation isMenuOpen is defaulted to false, if we want to update the ismenu open state we will call setIsMenuOpen with the new value
    
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    
    // ? renderItems is a variable that contains the JSX code that will be rendered in the browser
    // ? navListMenuItems.map is a function that will iterate over the navListMenuItems array and for each item in the array it will return a JSX element
    
    const renderItems = navListMenuItems.map(
        ({ icon, title, description, link }, key) => (
            <a href={link} key={key}>
                <MenuItem className="flex items-center ">
                    <div className="flex items-center justify-center !bg-blue-gray-50 p-2 mr-2 ">
                        {""}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div>
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </a>
        ),
    );

    return (
        <React.Fragment>
                <div style={{
                    backgroundImage: 'linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
                }}>
                    <Menu
                        open={isMenuOpen}
                        handler={setIsMenuOpen}
                        offset={{mainAxis: 20}}
                        placement="bottom"
                        allowHover={true}
                    >
                        <MenuHandler>
                            <Typography as="div" variant="small" className="font-medium">
                                <ListItem
                                    className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                                    selected={isMenuOpen || isMobileMenuOpen}
                                    onClick={() => setIsMobileMenuOpen((cur) => !cur)}>
                                    About Us
                                    <ChevronDownIcon
                                        strokeWidth={2.5}
                                        className={`hidden h-3 w-3 transition-transform lg:block ${
                                            isMenuOpen ? "rotate-180" : ""
                                        }`}/>
                                    <ChevronDownIcon
                                        strokeWidth={2.5}
                                        className={`block h-3 w-3 transition-transform lg:hidden ${
                                            isMobileMenuOpen ? "rotate-180" : ""
                                        }`}/>
                                </ListItem>
                            </Typography>
                        </MenuHandler>
                        <MenuList className="hidden max-w-screen-xl lg:block">
                            <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                                {renderItems}
                            </ul>
                        </MenuList>
                    </Menu>
                    <div className="block lg:hidden">
                        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
                    </div>
                </div>
</React.Fragment>
);}

function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <NavListMenu/>

            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    Events
                </ListItem>
            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    Schedule
                </ListItem>
            </Typography>

            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    News
                </ListItem>
            </Typography>

            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    Contact Us
                </ListItem>
            </Typography>
        </List>
    );
}

export function GlobalNavbar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <div className="sticky top-0 fsc-navbar bg-white">
            <Navbar style={{ height: '6rem', borderRadius: 0  }} className=" max-w-screen-xl px-4 py-2">
                    <div className="flex items-center justify-between text-blue-gray-900">
                        <Typography
                            as="a"
                            href="#"
                            variant="h6"
                            className="mr-4 cursor-pointer py-1.5 lg:ml-2">
                            <img src={logo} width={60} alt="Main Website Logo"/>
                        </Typography>
                        <div className="hidden lg:block">
                            <NavList/>
                        </div>
                        <div className="hidden gap-2 lg:flex">
                            <a href="https://www.federationskatingclub.ca/registration/" target="_blank"
                               rel="noopener noreferrer">
                                <Button size="sm" className="btn-12">
                                    Register
                                </Button>
                            </a>
                        </div>
                        <IconButton
                            variant="text"
                            color="blue-gray"
                            className="lg:hidden"
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <XMarkIcon className="h-6 w-6" strokeWidth={2}/>
                            ) : (
                                <Bars3Icon className="h-6 w-6" strokeWidth={2}/>
                            )}
                        </IconButton>
                </div>

                <Collapse open={openNav}>
                    <div className="bg-background-primary">
                        <NavList/>
                        <div className="register-btn-group flex w-full flex-nowrap items-center gap-2 lg:hidden">
                            <Button className="btn-12" variant="gradient" size="sm" fullWidth>
                                Register
                            </Button>
                        </div>
                    </div>
                </Collapse>
            </Navbar>
        </div>
    );
}