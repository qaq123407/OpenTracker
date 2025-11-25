import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import {
  Avatar,
  Badge,
  Dropdown,
  Input,
  Select,
  Space,
  DatePicker,
  Breadcrumb,
  Button,
  Layout,
  Menu,
  Typography,
  theme,
} from 'antd'
import {
  BellOutlined,
  CloseOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
  AppstoreOutlined,
  SolutionOutlined,
  LineChartOutlined,
  TabletOutlined,
  ContactsOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { removeToken } from '@/utils/token'

const { Header, Content, Footer, Sider } = Layout
const { Title } = Typography
const { RangePicker } = DatePicker

type MenuItem = Required<MenuProps>['items'][number]

const subItems: MenuItem[] = [
  {
    key: 'sub1',
    icon: <AppstoreOutlined />,
    label: '报表面板',
    children: [
      { key: 'sub11', label: 'option 1' },
      { key: 'sub12', label: 'option 2' },
    ],
  },
  {
    key: 'sub2',
    icon: <UserOutlined />,
    label: '访客分析',
    children: [
      { key: 'sub21', label: 'option 1' },
      { key: 'sub22', label: 'option 2' },
    ],
  },
  {
    key: 'sub3',
    icon: <SolutionOutlined />,
    label: '行为分析',
    children: [
      { key: 'sub31', label: 'option 1' },
      { key: 'sub32', label: 'option 2' },
    ],
  },
  {
    key: 'sub4',
    icon: <ContactsOutlined />,
    label: '获客分析',
    children: [
      { key: 'sub41', label: 'option 1' },
      { key: 'sub42', label: 'option 2' },
    ],
  },
  {
    key: 'sub5',
    icon: <CloseCircleOutlined />,
    label: '错误分析',
    children: [
      { key: 'sub51', label: 'option 1' },
      { key: 'sub52', label: 'option 2' },
    ],
  },
  {
    key: 'sub6',
    icon: <LineChartOutlined />,
    label: '性能分析',
    children: [
      { key: 'sub61', label: 'option 1' },
      { key: 'sub62', label: 'option 2' },
    ],
  },
  {
    key: 'sub7',
    icon: <TabletOutlined />,
    label: '白屏监控',
    children: [
      { key: 'sub71', label: 'option 1' },
      { key: 'sub72', label: 'option 2' },
    ],
  },
]

const AuthenticatedApp: React.FC = () => {
  const [currentKey, setCurrentKey] = useState('sub1')
  const navigate = useNavigate()
  const [showSearch, setShowSearch] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const handleLogout = () => {
    removeToken()
    navigate('/')
  }

  const onMenuClick: MenuProps['onClick'] = (e) => {
    setCurrentKey(e.key)
  }

  const handleSearchToggle = () => {
    setShowSearch(!showSearch)
    // 展开时清空搜索值
    if (!showSearch) {
      setSearchValue('')
    }
  }

  const handleSearch = () => {
    // 实现搜索逻辑
  }

  const handleCancelSearch = () => {
    setShowSearch(false)
    setSearchValue('')
  }
  return (
    <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#fff',
          padding: '0 24px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* 左侧：Logo和名称 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Title
            onClick={() => navigate('/')}
            level={4}
            style={{ margin: 0, color: '#1890ff', cursor: 'pointer' }}
          >
            主页
          </Title>

          {/* 主导航链接 */}
          <Space>
            <Button type="text">数据概览</Button>
            {/* 事件管理下拉菜单 */}
            <Dropdown
              menu={{
                items: [
                  { key: '1', label: '1' },
                  { key: '2', label: '2' },
                  { key: '3', label: '3' },
                  { key: '4', label: '4' },
                  { key: '5', label: '5' },
                ],
              }}
              placement="bottomLeft"
            >
              <Button type="text">事件管理</Button>
            </Dropdown>
            <Button type="text">报表分析</Button>
            <Button type="text">环境配置</Button>
          </Space>
        </div>

        {/* 右侧：功能区 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* 环境切换 */}
          <Select defaultValue="production" style={{ width: 120 }}>
            <Select.Option value="development">开发环境</Select.Option>
            <Select.Option value="production">生产环境</Select.Option>
          </Select>

          {/* 时间选择器 */}
          <RangePicker style={{ width: 240 }} />

          {/* 搜索框（点击展开的形式） */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {showSearch ? (
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '8px', position: 'relative' }}
              >
                <Input
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="输入搜索内容"
                  onPressEnter={handleSearch}
                  style={{ width: 200 }}
                  allowClear
                />
                <Button icon={<CloseOutlined />} type="text" onClick={handleCancelSearch} />
              </div>
            ) : (
              <Button type="text" icon={<SearchOutlined />} onClick={handleSearchToggle} />
            )}
          </div>

          {/* 通知中心 */}
          <Badge count={3} showZero>
            <Button type="text" icon={<BellOutlined />} />
          </Badge>

          {/* 用户信息 */}
          <Dropdown
            menu={{
              items: [
                { key: '1', label: <span>个人中心</span>, icon: <UserOutlined /> },
                { key: '2', label: <span>账户设置</span>, icon: <SettingOutlined /> },
                {
                  key: '3',
                  label: <span style={{ color: '#ff4d4f' }}>退出登录</span>,
                  onClick: handleLogout,
                },
              ],
            }}
            placement="bottomRight"
          >
            <Space style={{ cursor: 'pointer' }}>
              <Avatar icon={<UserOutlined />} />
              <span>管理员</span>
            </Space>
          </Dropdown>
        </div>
      </Header>
      <div style={{ flex: 1, padding: '0 48px', display: 'flex', flexDirection: 'column' }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
        />
        <Layout
          style={{
            flex: 1,
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            display: 'flex',
          }}
        >
          <Sider style={{ background: colorBgContainer, width: 200, flexShrink: 0 }}>
            <Menu
              mode="inline"
              onClick={onMenuClick}
              selectedKeys={[currentKey]}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={subItems}
            />
          </Sider>
          <Content style={{ padding: '0 24px', maxHeight: 684, overflow: 'auto' }}></Content>
        </Layout>
      </div>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default AuthenticatedApp
