require('../../src/client/assets/css/react-widgets.css');
require('../../src/client/assets/css/bootstrap.css');
require('../../src/client/assets/css/font-awesome.css');
require('../../src/client/assets/css/app.css');
require('../../src/client/assets/js/bootstrap.js');
var Moment = require('moment');
var momentLocalizer = require('react-widgets/lib/localizers/moment');
momentLocalizer(Moment);
var numberLocalizer = require('react-widgets/lib/localizers/simple-number');
numberLocalizer();
module.exports = {
    Router: {
        Link: require('react-router').Link,
        IndexLink: require('react-router').IndexLink
    },
    Bootstrap: {
        Grid: require('react-bootstrap').Grid,
        Row: require('react-bootstrap').Row,
        Col: require('react-bootstrap').Col,
        ButtonToolbar: require('react-bootstrap').ButtonToolbar,
        ButtonGroup: require('react-bootstrap').ButtonGroup,
        Button: require('react-bootstrap').Button,
        DropdownButton: require('react-bootstrap').DropdownButton,
        SplitButton: require('react-bootstrap').SplitButton,
        MenuItem: require('react-bootstrap').MenuItem,
        Panel: require('react-bootstrap').Panel,
        PanelGroup: require('../../src/client/components/Bootstrap').PanelGroup,
        Input: require('react-bootstrap').Input,
        Table: require('react-bootstrap').Table,
        Tabs: require('../../src/client/components/Bootstrap').Tabs,
        Tab: require('react-bootstrap').Tab,
        Carousel: require('react-bootstrap').Carousel,
        CarouselItem: require('react-bootstrap').CarouselItem,
        Image: require('react-bootstrap').Image,
        Thumbnail: require('react-bootstrap').Thumbnail,
        ProgressBar: require('react-bootstrap').ProgressBar,
        Breadcrumb: require('react-bootstrap').Breadcrumb,
        BreadcrumbItem: require('react-bootstrap').BreadcrumbItem,
        Pagination: require('react-bootstrap').Pagination,
        Pager: require('react-bootstrap').Pager,
        PageItem: require('react-bootstrap').PageItem,
        ListGroup: require('react-bootstrap').ListGroup,
        ListGroupItem: require('react-bootstrap').ListGroupItem,
        Label: require('react-bootstrap').Label,
        Badge: require('react-bootstrap').Badge,
        Well: require('react-bootstrap').Well,
        Alert: require('react-bootstrap').Alert,
        Jumbotron: require('react-bootstrap').Jumbotron,
        PageHeader: require('react-bootstrap').PageHeader,
        AlertDismissable: require('../../src/client/components/Bootstrap').AlertDismissable
    },
    BootstrapNavigation: {
        Navbar: require('react-bootstrap').Navbar,
        NavbarCollapsible: require('../../src/client/components/BootstrapNavigation').NavbarCollapsible,
        Nav: require('react-bootstrap').Nav,
        NavItem: require('react-bootstrap').NavItem,
        NavDropdown: require('react-bootstrap').NavDropdown
    },
    Widgets: {
        DropdownList: require('react-widgets').DropdownList,
        Combobox: require('react-widgets').Combobox,
        Multiselect: require('react-widgets').Multiselect,
        NumberPicker: require('react-widgets').NumberPicker,
        SelectList: require('react-widgets').SelectList,
        CalendarWrapper: require('../../src/client/components/Widgets/CalendarWrapper.jsx'),
        DateTimePickerWrapper: require('../../src/client/components/Widgets/DateTimePickerWrapper.jsx')
    },
    todo: {
        TodoItem: require('../../src/client/components/todo/TodoItem.jsx'),
        TodoItems: require('../../src/client/components/todo/TodoItems.jsx')
    },
    todos: {
        Item: require('../../src/client/components/todos/Item.jsx'),
        TdHead: require('../../src/client/containers/todos/TdHead.jsx'),
        THead: require('../../src/client/containers/todos/THead.jsx'),
        TBody: require('../../src/client/containers/todos/TBody.jsx'),
        TFoot: require('../../src/client/containers/todos/TFoot.jsx'),
        TFoots: require('../../src/client/containers/todos/TFoots.jsx'),
        TDFoot: require('../../src/client/containers/todos/TDFoot.jsx')
    }
};