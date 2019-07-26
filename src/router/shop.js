const index = () => import('@/pages/home/Index');
const Product = () => import('@/pages/home/Product');
const Car = () => import('@/pages/home/Car');
const Search = () => import('@/pages/home/Search');
const ProductList = () => import('@/pages/home/ProductList');
const HomeLogin = () => import('@/pages/home/Login');
//===== 个人中心
const Person = () => import('@/pages/home/Person');
const UserInfo = () => import('@/pages/home/person/UserInfo');  //个人信息
const OrderContainer = () => import('@/pages/home/person/OrderContainer');  //订单
const MyCar = () => import('@/pages/home/person/MyCar');  //购物车
const MyMessage = () => import('@/pages/home/person/MyMessage');  //消息
const MessageDetails = () => import('@/pages/home/person/MessageDetails');  //消息
const Address = () => import('@/pages/home/person/Address');  //地址
const Security = () => import('@/pages/home/person/Security'); //安全中心
const Other = () => import('@/pages/home/person/Other');//订单
const Authentication = () => import('@/pages/home/person/Authentication');//
const Evaluate = () => import('@/pages/home/person/Evaluate');
const Coupon = () => import('@/pages/home/person/Coupon');
const Settlement = () => import('@/pages/home/Settlement');
const Pay = () => import('@/pages/home/Pay');
const AfterSale = () => import('@/pages/home/person/AfterSale');  //消息
const Server = () => import('@/pages/home/person/Server');  //消息
//=========================================================================
const Admin = () => import('@/pages/admin/index/Admin');         //后台首页
const Login = () => import('@/pages/admin/index/Login');         //后台登录
const Register = () => import('@/pages/admin/index/Register');   //后台注册
const SAdmin = () => import('@/pages/admin/components/SAdmin');  //后台管理员
const SDepartment = () => import('@/pages/admin/components/SDepartment');  //组
const SPower = () => import('@/pages/admin/components/SPower');  //权限
const SRole = () => import('@/pages/admin/components/SRole');  //角色
const SProduct = () => import('@/pages/admin/components/SProduct');  //商品
const SUser = () => import('@/pages/admin/components/SUser');        //用户
const SNav = () => import('@/pages/admin/components/SNav');        //用户
const Photo = () => import('@/pages/admin/resources/Photo');         //图片
const AddProduct = () => import('@/pages/admin/product/AddProduct'); //地址
const SClassification = () => import('@/pages/admin/components/SClassification');
const SBanner = () => import('@/pages/admin/components/SBanner');

const shopArray = [
    {
        path: "",
        component: index
    },
    {
        path: "/shop",
        component: index
    },
    {
        path: "/shop/person",
        component: Person,
        children: [
            {
                path: "order",
                component: OrderContainer,
            },
            {
                path: "car",
                component: MyCar,
            },
            {
                path: "message",
                component: MyMessage
            },
            {
                path: "message/details",
                component: MessageDetails
            },
            {
                path: "address",
                component: Address
            },
            {
                path: "security",
                component: Security
            },
            {
                path: "other",
                component: Other
            },
            {
                path: "authentication",
                component: Authentication
            },
            {
                path: "evaluate",
                component: Evaluate
            },
            {
                path: "coupon",
                component: Coupon
            },
            {
                path: "aftersale",
                component: AfterSale
            },
            {
                path: "server",
                component: Server
            },
            {
                path: "",
                component: UserInfo,
            }
        ]
    },
    {
        path: "/shop/product/:id?",
        component: Product
    },
    {
        path: "/shop/settlement/:idArr?",
        component: Settlement
    },
    {
        path: "/shop/car",
        component: Car
    },
    {
        path: "/shop/search",
        component: Search
    },
    {
        path: "/shop/productList/:classification?",
        component: ProductList
    },
    {
        path: "/shop/login/:type?",
        component: HomeLogin
    },
    {
        path: "/shop/pay",
        component: Pay
    },


    {
        path: '/shop/admin',
        component: Admin
    },
    {
        path: '/shop/admin/index',
        component: Admin
    },
    {
        path: '/shop/admin/login',
        component: Login
    },
    {
        path: '/shop/admin/register',
        component: Register
    },
    {
        path: '/shop/admin/product',
        component: SProduct
    },
    {
        path: '/shop/admin/product/add',
        component: AddProduct
    },
    {
        path: '/shop/admin/source/photo',
        component: Photo
    },
    // //======================================================================================================
    {
        path: '/shop/admin/SAdmin',
        component: SAdmin
    },
    {
        path: '/shop/admin/SDepartment',
        component: SDepartment
    },
    {
        path: '/shop/admin/SPower',
        component: SPower
    },
    {
        path: '/shop/admin/SRole',
        component: SRole
    },
    {
        path: '/shop/admin/SUser',
        component: SUser
    },
    {
        path: '/shop/admin/product/classification',
        component: SClassification
    },
    {
        path: '/shop/admin/SBanner',
        component: SBanner
    },
    {
        path: '/shop/admin/SNav',
        component: SNav
    },


];
export default shopArray;
