/* global chrome */

import React, { Component } from 'react';
import '../styles/App.css';
import { REDDIT_URL, URL_LIST, COMMENT_SPACE } from '../config';
import { formatText } from '../helpers';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            tab: null,
            subTab: null,
            data: [],
            comments: [],
            isDataLoading: false,
            isCommentsLoading: false,
        }
        this.loadData = this.loadData.bind(this);
        this.loadComments = this.loadComments.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        this.loadData(URL_LIST[0].key, URL_LIST[0].items[0].key, URL_LIST[0].items[0].url);
    }
    loadData(tab, subTab, url) {
        this.setState({ tab, subTab, id: null, data: [], comments: [], isDataLoading: true }, () =>
            fetch(url, {method: 'get'})
                .then(response => response.json())
                .then(({data}) => this.setState({data: data.children, isDataLoading: false}))
                .catch(error => console.error(error))
        );
    }
    loadComments(permalink) {
        const url = REDDIT_URL + permalink + '.json';
        this.setState({ comments: [], isCommentsLoading: true }, () =>
            fetch(url, {method: 'get'})
                .then(response => response.json())
                .then(([, { data }]) => this.setState({comments: data.children, isCommentsLoading: false}))
                .catch(error => console.error(error))
        );
    }
    handleClick(selectedId, permalink) {
        const { id } = this.state;
        if (id !== selectedId) {
            this.setState({ id: selectedId, comments: [] }, () => this.loadComments(permalink));
        }       
    }
    renderMenu() {
        const { tab, subTab, id } = this.state;
        return (
            <nav className='menu'>
                <ul>
                    {id && 
                        <li key={'back'}
                            onClick={() => this.setState({id: null, comments: []})}
                            className={'back'}
                        >
                           <div className='title'>&larr;</div>
                        </li>
                    }
                    {!id && URL_LIST.map(o => 
                        <li key={o.key}
                            className={o.key === tab ? 'selected' : ''}
                        >
                            <div className='title'>{o.title}</div>
                            <ul>
                                {o.items.map(e => 
                                    <li key={e.key}
                                        className={e.key === subTab ? 'selected' : ''}
                                        onClick={() => this.loadData(o.key, e.key, e.url)}
                                    >
                                        <div className='subtitle'>{e.title}</div>
                                    </li>
                                )}
                            </ul>
                        </li>
                    )}
                </ul>
            </nav>
        );
    }
    renderComments(comments, isFirst) {
        const { isCommentsLoading } = this.state;
        return (
            <div>
                {isCommentsLoading && <div className='spinner' />}
                {comments.map(e => {
                    const { id, body, replies } = e.data;
                    const text = body ? formatText(body) : '';
                    return (
                        <div key={id} style={{paddingLeft: isFirst ? 0 : COMMENT_SPACE}} className={isFirst ? 'first-comment' : 'comment'}>
                            <div>{text}</div>
                            <div>{replies && this.renderComments(replies.data.children, false)}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
    renderPosts() {
        const { data, isDataLoading, id: selectedId } = this.state;
        return(
            <div className='posts'>
                {isDataLoading && <div className='spinner' />}
                {data.map(o => {
                    const { id, title, selftext, permalink, thumbnail, thumbnail_height, thumbnail_width } = o.data;
                    if (selectedId && id !== selectedId) {
                        return null;
                    }
                    return (      
                        <div key={id} className='post'>
                            <div className='head' onClick={() => this.handleClick(id, permalink)}>
                                <div className='link' 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        chrome && chrome.tabs && chrome.tabs.create({ url: REDDIT_URL + permalink });
                                    }}
                                >
                                    &#9741;
                                </div>
                                <div className='title'>{title}</div>
                            </div>
                            <div className='body'>
                                {thumbnail && thumbnail !== 'default' && thumbnail !== 'self' && 
                                    <div className='image'>
                                        <img 
                                            src={thumbnail}
                                            alt={''}
                                            height={thumbnail_height}
                                            width={thumbnail_width}
                                        />
                                    </div>
                                }
                                {selectedId &&
                                    <div className='text'>
                                        {formatText(selftext)}
                                    </div>
                                }
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
    render() { 
        const { id, comments } = this.state;
        return (
            <div className='App'>
                {this.renderMenu()}
                {this.renderPosts()}
                {id && 
                    <div className={'comments'}>
                        {this.renderComments(comments, true)}
                    </div>
                }
            </div>
        );
    }
}

export default App;
