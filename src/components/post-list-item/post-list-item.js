import React, {Component} from 'react';
import './post-list-item.css'

export default class PostListItem extends Component {
    //  state = {
    //      important: false,
    //      like: false
    //  }

    //  onImportant = () => {
    //      this.setState(state => ({
    //          important: !state.important
    //         }))
    //  }

    //  onLike = () => {
    //      this.setState(({like}) => ({
    //          like: !like
    //      }))
    //  }

    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
        // const {important, like} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between important';
        let spanClassNames = 'app-list-item-label-two';
        if (important) {
            classNames =' app-list-item d-flex justify-content-between';
            spanClassNames = 'app-list-item-label';
        }
        if (like) {
            classNames += ' like'
        }

        
            return (
                <div className={classNames}>
                    <span 
                        className={spanClassNames}
                        onClick={onToggleLiked}>
                        {label}
                    </span>
                    <div className='d-flex justify-content-center
                                                    align-items-center'>
                        <button 
                        type='button' 
                        className="btn-star btn-sm"
                        onClick={onToggleImportant}>
                            <i className="fa fa-star"></i>
                        </button>
                        <button 
                        type='button' 
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                        <i className="fa fa-heart"></i>
                    </div>
                </div>
            )
    }
}