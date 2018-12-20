import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    };
};

// everytime change to redux store, this function will be call
const mapStateToProps = (state) => {
    return { songs: state.songs };
};

// wired up the Redux state to props AND
// wired up selectSong so that it knows there's a change in the state when we call action creator so it will 
// go to reducer and update state.
export default connect(mapStateToProps, { selectSong })(SongList);
