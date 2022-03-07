import OriginLayout from './layout.vue';
import Content from './content.vue';
import Footer from './footer.vue';
import Header from './header.vue';
import Sider from './sider.vue';

interface LayoutType {
    Header?: typeof Header;
    Footer?: typeof Footer;
    Content?: typeof Content;
}

// TODO: use the correct Type
const Layout = OriginLayout as LayoutType & typeof OriginLayout;

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Sider = Sider;

export { Header, Footer, Content, Layout, Sider };

export default Layout;
