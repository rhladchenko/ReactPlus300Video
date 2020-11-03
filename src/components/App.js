import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';
import VideoList from './VideoList';

class App extends React.Component {
    state = { videos: [] };

    onTermSubmit = async (term) => {
        const response = await Youtube.get('/search', {
            params: {
                q: term,
            },
        });

        this.setState({ videos: response.data.items });
    };

    render() {
        return (
            <div className='app ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="videos-list">
                   {<VideoList videos={this.state.videos} />}
                </div>
            </div>
        );
    }
}

export default App;
