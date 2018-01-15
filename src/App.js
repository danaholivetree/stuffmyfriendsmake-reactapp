import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginContainer from './containers/LoginContainer'
import SellItemContainer from './containers/SellItemContainer'
import ItemsForSaleContainer from './containers/ItemsForSaleContainer'
import NavBar from './components/nav/NavBar'
import BuyOrSell from './components/nav/BuyOrSell'
import Items from './routes/Items'
import BookmarksRoute from './routes/BookmarksRoute'
import Cart from './routes/Cart'
import { connect } from 'react-redux'
import Blah from './components/Blah'


class App extends Component {


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <LoginContainer />

            {this.props.loggedIn ?
              <div>

                <NavBar />

                <Switch>
                  <Route exact path='/' component={BuyOrSell} />
                  <Route path='/sell' component={SellItemContainer} />
                  <Route path='/saleitems' component={ItemsForSaleContainer} />
                  <Route path='/shoppingcart' component={Cart} />
                  <Route path='/bookmarks' component={BookmarksRoute} />
                  <Route path='/shoppingfeed' component={Items} />
                </Switch>
              </div>

              :

              <Blah />
            }

          </div>
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return (
    {loggedIn: state.loggedIn}
  )
}
export default connect(mapStateToProps, null)(App)
