import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddFrom from '../post-add-form';
import './app.css';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React', important: true, like: false, id:1},
                {label: 'That is so good', important: true, like: false, id: 2},
                {label: 'I need a break', important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        };
        this.maxId = 4;
    }
    
    deleteItem = (id) => {
        this.setState( ({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
            
        });
    }

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState( ({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleImportant = (id) => {
        console.log(`Important ${id}`);
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
        
            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index)
                            , newItem, ...data.slice(index+1)];
            return {
                data: newArr
            }
        })
    }
    
    onToggleLiked = (id) => {
        console.log(`Like ${id}`);
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
        
            const old = data[index];
            const newItem = {...old, like: !old.like};
            const newArr = [...data.slice(0, index)
                            , newItem, ...data.slice(index+1)];
            return {
                data: newArr
            }
        })
    }

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        } 
        
        return items.filter((item) => {
                return item.label.indexOf(term) > -1
            });
        }

    onUpdateSearch = (term) => {
        this.setState({
            term: term
        })
    }

    filterPost = (items, filter) => {
        if(filter === 'like') {
            return items.filter(item => item.like)
        } else if (filter === 'important') {
            return items.filter(item => item.important)
        } else {
            return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({
            filter: filter
        })
    }
     
    render() {
        const {data, term, filter} = this.state;
        const importantLenght = data.filter(item => item.important).length;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter );
        

        return (
            <>  
                <div className="app">
                    <AppHeader 
                        liked={liked}
                        importantLenght={importantLenght}
                        allPosts={allPosts}
                    />
                    <div className='search-panel d-flex'>
                        <SearchPanel 
                            onUpdateSearch={this.onUpdateSearch}
                        />
                        <PostStatusFilter 
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                        />
                    </div>
                    <PostList 
                        posts={visiblePosts}
                        onDelete={this.deleteItem}
                        onToggleImportant={this.onToggleImportant}
                        onToggleLiked={this.onToggleLiked} 
                    />
                    <PostAddFrom
                        onAdd={this.addItem} />
                </div>
            </>
        )
    }
}


// let first = 262;
// let second = 2009;

// [first, second] = [second, first];

// const result = first;
// console.log(result);