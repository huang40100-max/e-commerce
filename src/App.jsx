import './App.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">S</div>
        <div>
          <h1>SORA Wear</h1>
          <span>管理後台</span>
        </div>
      </div>

      <div className="nav-title">主選單</div>
      <div className="nav-item active">
        <span style={{ fontSize: '18px' }}>📊</span> 儀表板
      </div>
      <div className="nav-item">
        <span style={{ fontSize: '18px' }}>🛒</span> 訂單管理
      </div>
      <div className="nav-item">
        <span style={{ fontSize: '18px' }}>🛍️</span> 商品管理
      </div>
      <div className="nav-item">
        <span style={{ fontSize: '18px' }}>👥</span> 顧客列表
      </div>
      
      <div className="nav-title">設定</div>
      <div className="nav-item">
        <span style={{ fontSize: '18px' }}>⚙️</span> 商店設定
      </div>
      <div className="nav-item">
        <span style={{ fontSize: '18px' }}>📈</span> 數據中心
      </div>
    </aside>
  );
};

const Header = () => {
  return (
    <header className="navbar">
      <div>
        <h2>總覽</h2>
        <p>歡迎回來，今日的商店營運狀況如下</p>
      </div>
      <div className="toolbar">
        <div className="search">
          <input type="text" placeholder="搜尋訂單、商品..." />
        </div>
        <button className="btn secondary">🔔 通知</button>
        <button className="btn">匯出報表</button>
      </div>
    </header>
  );
};

const MetricCards = () => {
  return (
    <div className="cards">
      <div className="card">
        <div className="metric-label">今日營業額</div>
        <div className="metric-value">NT$ 124,500</div>
        <div className="metric-trend">↑ 12.5% 較昨日</div>
      </div>
      <div className="card">
        <div className="metric-label">訂單數量</div>
        <div className="metric-value">86</div>
        <div className="metric-trend">↑ 5.2% 較昨日</div>
      </div>
      <div className="card">
        <div className="metric-label">平均客單價</div>
        <div className="metric-value">NT$ 1,447</div>
        <div className="metric-trend" style={{ color: 'var(--danger)' }}>↓ 1.2% 較昨日</div>
      </div>
      <div className="card">
        <div className="metric-label">待出貨</div>
        <div className="metric-value">42</div>
        <div className="metric-trend" style={{ color: 'var(--warning)' }}>需盡快處理</div>
      </div>
    </div>
  );
};

const RevenueChart = () => {
  return (
    <div className="card">
      <div className="section-title">
        <h3>營收趨勢</h3>
        <select>
          <option>本週</option>
          <option>本月</option>
        </select>
      </div>
      <div className="chart">
        <div className="bar-wrap"><div className="bar" style={{ height: '40%' }}></div><span>一</span></div>
        <div className="bar-wrap"><div className="bar" style={{ height: '60%' }}></div><span>二</span></div>
        <div className="bar-wrap"><div className="bar" style={{ height: '55%' }}></div><span>三</span></div>
        <div className="bar-wrap"><div className="bar" style={{ height: '80%' }}></div><span>四</span></div>
        <div className="bar-wrap"><div className="bar" style={{ height: '100%' }}></div><span>五</span></div>
        <div className="bar-wrap"><div className="bar" style={{ height: '45%' }}></div><span>六</span></div>
        <div className="bar-wrap"><div className="bar" style={{ height: '30%' }}></div><span>日</span></div>
      </div>
    </div>
  );
};

const OrderStatus = () => {
  return (
    <div className="card">
      <div className="section-title">
        <h3>訂單狀態</h3>
      </div>
      <div className="status-list">
        <div className="status-row">
          <span className="status-name">📦 待出貨</span>
          <span className="status-count">42</span>
        </div>
        <div className="status-row">
          <span className="status-name">🚚 運送中</span>
          <span className="status-count">128</span>
        </div>
        <div className="status-row">
          <span className="status-name">✅ 已完成</span>
          <span className="status-count">856</span>
        </div>
        <div className="status-row">
          <span className="status-name">↩️ 退換貨</span>
          <span className="status-count">3</span>
        </div>
      </div>
    </div>
  );
};

const LatestOrders = () => {
  const orders = [
    { id: '#ORD-2026-001', customer: '陳小明', avatar: '陳', date: '2026-05-22 10:30', amount: 'NT$ 2,450', status: '待出貨', badge: 'warning' },
    { id: '#ORD-2026-002', customer: '林雅惠', avatar: '林', date: '2026-05-22 09:15', amount: 'NT$ 1,280', status: '已完成', badge: 'success' },
    { id: '#ORD-2026-003', customer: '張大衛', avatar: '張', date: '2026-05-21 16:42', amount: 'NT$ 3,600', status: '處理中', badge: 'primary' },
  ];

  return (
    <div className="orders-panel">
      <div className="section-title">
        <h3>最新訂單</h3>
        <button className="btn secondary">查看全部</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>訂單編號</th>
            <th>顧客</th>
            <th>日期</th>
            <th>金額</th>
            <th>狀態</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <tr key={idx}>
              <td>{order.id}</td>
              <td>
                <div className="user-info">
                  <div className="avatar">{order.avatar}</div>
                  <span>{order.customer}</span>
                </div>
              </td>
              <td>{order.date}</td>
              <td>{order.amount}</td>
              <td><span className={`badge ${order.badge}`}>{order.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <Header />
        <div className="content">
          <MetricCards />
          <div className="grid">
            <RevenueChart />
            <OrderStatus />
          </div>
          <LatestOrders />
        </div>
      </main>
    </div>
  );
}
