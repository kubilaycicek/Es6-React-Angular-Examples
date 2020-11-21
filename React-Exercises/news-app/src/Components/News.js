import React, { Component } from 'react';
import NewsItem from './NewsItem.js';
import PropTypes from 'prop-types';
import NewsForm from './NewsForm.js';



export default class News extends Component {

    static propTypes = {
        news: PropTypes.array.isRequired
    }
        /*
        static propTypess = {
            news: PropTypes.shape({
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired
            })
        }
        */

    render() {
        console.log(this.props.addNews)
        //const elements =  this.props.news.map(item => <NewsItem key={item.id} title={item.title} content={item.content} />);
        return (
            <div>
                {
                    this.props.news.map(item => <NewsItem key={item.id} title={item.title}  content={item.content} />)
                }
                <NewsForm addNews={this.props.addNews}      ></NewsForm>
            </div>
        )
    }
}
