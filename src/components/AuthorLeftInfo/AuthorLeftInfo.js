import React, { Component } from 'react'
import AuthorLeftInfoDiv from '../../styled/AuthorLeftInfo.js'
import moment from 'moment'
import {author as authorLink} from '../../router/link.js'



export default class AuthorLeftInfo extends Component {
    static get propTypes() { 
        return { 
           item: PropTypes.object,
           _this: PropTypes.object,
           
        }
    }




    render() {
        const {item, _this} = this.props

        return (
            <AuthorLeftInfoDiv onClick={() => {_this.switchRoute(`${authorLink}/${item.id}`)}}>
                 <img className="iconImg" src={item.icon} />
                    <div className="message">
                        {
                            item.name ? <h3 className="name">{item.name}</h3> : (
                                item.title ? <h3 className="name">{item.name}</h3> : null
                            )
                        }    
                        {
                            item.latestReleaseTime ?
                            <span className="lastTime">最新更新时间  {moment(item.latestReleaseTime).format(`YYYY-M-D hh:mm`)}</span>
                            : null
                        }
                        <p className="des">{item.description}</p>              
                    </div>
                    {   
                       item.videoNum ?
                       <span className="videoNum">视频数 {item.videoNum}</span> 
                       : null
                    }
            </AuthorLeftInfoDiv>
        )
    }
}
