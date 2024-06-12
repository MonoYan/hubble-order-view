import React from 'react';
import {
    DashboardFilled,
    DropboxCircleFilled,
    FileTextFilled,
    CodeSandboxCircleFilled,
    QuestionCircleFilled,
    SettingFilled,
    BellFilled,
    MailFilled,
} from '@ant-design/icons';
import { Layout, Menu, Avatar } from 'antd';
import styles from './MainLayout.module.scss'
import OrderDetails from '../pages/OrderDetails'

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const sideItems = [
    getItem('Dashboard', '1', <DashboardFilled />),
    getItem('Inventory', '2', <DropboxCircleFilled />),
    getItem('Production', '3', <FileTextFilled />),
    getItem('Order', '4', <CodeSandboxCircleFilled />),
    getItem('Support', '5', <QuestionCircleFilled />),
    getItem('Setting', '6', <SettingFilled />),
];


const App = () => {
    return (
        <Layout className={styles.container} >
            <Sider className={styles.left} theme='light'>
                <div className={styles['demo-logo-vertical']}>
                    <h2>Hubble</h2>
                </div>
                <Menu className={styles.menu} theme="light" defaultSelectedKeys={['4']} mode="inline" items={sideItems} />
            </Sider>

            <Layout className={styles.right}>
                <Header className={styles.header}>
                    <div className={styles['header-button']}>
                        <MailFilled />
                        <BellFilled />
                    </div>
                    <div className={styles['header-avatar']}>
                        {/* // Mock */}
                        <Avatar src='https://api.dicebear.com/8.x/notionists/svg?seed=Aneka' />
                    </div>
                </Header>

                <Content className={styles.content}>
                    <OrderDetails orderId={'12312341234-SDO12345XXXXXXX'} />
                </Content>

                <Footer className={styles.footer}>
                    Created by MonoYan
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;