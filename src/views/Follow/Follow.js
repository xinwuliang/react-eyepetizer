import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import {
    detailsSelector,
    authorsSelector,
    searchListsSelector,
    followsSelector
} from '../../selector/eye.js'
import * as eyeAction from '../../redux/actions/eye.js'
import Tags from '../../components/Tags/Tags.js'
import {detail as detailLink} from '../../router/link.js'
import Search from '../../components/Search/Search.js'
import GoToTop from '../../components/GoToTop/GoToTop.js'
import Navigation from '../../components/Navigation/Navigation.js'
import Header from '../../components/Header/Header.js'


class Follow extends Component {
    static get propTypes() { 
        return { 
            location: PropTypes.obj.isRequired,
            history: PropTypes.obj.isRequired,
            match: PropTypes.obj.isRequired,
            authors: PropTypes.obj.isRequired,
            details: PropTypes.object,
            searchLists: PropTypes.object,
            follows: PropTypes.object,

            getAuthorData: PropTypes.func,
            getRelatedData: PropTypes.func,
            getRepliesData: PropTypes.func,
            getDetailData: PropTypes.func,
            getSearchData: PropTypes.func,
            getFollowData: PropTypes.func
            
        }
    }

     constructor (props) {
        super(props)
        this.state = {
           
        }
    }
    
    

    switchRoute(path, item) {
         const {history} = this.props
         if(item) {
           localStorage.itemList = JSON.stringify(item)
        }
         history.push(path)
        
    }

     _clearSearchData() {
       const {getSearchData} = this.props
       localStorage.searchLists = ''
       getSearchData('')
   }


    getDetail (id) {
        const {getDetailData, getRelatedData, getRepliesData, match} = this.props
        if(id) {
            getRelatedData(id)
            getRepliesData(id)
        }
        getDetailData(id)
    }

    render() {
        const {follows, history} = this.props

        if(follows) {
            console.log('follows: ', follows)
        }
       
        return (
            <div className="follow">
                <Header _this={this} subtitle={'全部作者'} title={'Subscription'} />
                
                <Navigation history={history} isShow={true} index={2}/>
                <GoToTop />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    authors: authorsSelector(state),
    details: detailsSelector(state),
    searchLists: searchListsSelector(state),
    follows: followsSelector(state)
})


export default withRouter(connect(
    mapStateToProps,
    eyeAction
)(Follow))