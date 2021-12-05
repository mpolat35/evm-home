import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AboutPage from './pages/about/About';
import ContactPage from './pages/contact/Contact';
import HomePage from './pages/home/Home';
import Layout from './layout/Layout';
import {createBrowserHistory} from 'history';
import Koltuktakimi from './pages/koltuk/KoltukTakimi';
import YemekOdasiPage from './pages/YemekOdasiPage';

export const history = createBrowserHistory();

function App() {
  return (
    <div className="">
      <Router history={history}>
        <div className="">
          <Layout history={history}>
              <Route path="/" exact component={HomePage}/>
              <Route path="/hakkimizda" component={AboutPage}/>
              <Route path="/iletisim" component={ContactPage}/>
              <Route path="/koltuk-takimi" component={Koltuktakimi}/>
              <Route  path="/yemek-odasi" component={YemekOdasiPage}/> 
          </Layout>
        </div>
      </Router>
    </div>
  );
}

export default App;