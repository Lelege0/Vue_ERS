import Vue from 'vue'
import { Button, Form,FormItem,Input, Message, MessageBox,
    Container, Header, Aside, Main,
     Menu, Submenu, MenuItem, MenuItemGroup,
     Breadcrumb,BreadcrumbItem,Card, Dropdown,
    DropdownMenu,DropdownItem, Select, Option,
    Row, Col, Table, TableColumn, DatePicker,
    Pagination, Carousel, CarouselItem, Switch,
    Dialog, Radio,Footer} from 'element-ui'

Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Select)
Vue.use(Option)
Vue.use(Col)
Vue.use(Row)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(Pagination)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Switch)
Vue.use(Dialog)
Vue.use(Radio)
Vue.use(Footer)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
