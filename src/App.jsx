import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import { Purchase } from './pages/PurchasePage/Purchase'
import { AdminPage } from './pages/AdminPage/AdminPage'
import { SalesByProduct } from './pages/SalesByProduct'

function App() {
  return (
		<>
			<div className="app-wrapper"> {/* было container*/}
				<Header />
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/purchase/:productId" element={<Purchase />} />
					<Route path="/admin" element={<AdminPage />} />
					{/* <Route path="/sales_by_product/:productId" element={<SalesByProduct />} /> */}
				</Routes>
				<Footer />
			</div>
		</>
  )
}

export default App
