const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }   
    render() {
        if (this.state.liked) {
            return 'Hello world!';
        }

    return e(
    'button',
    { onClick: () => this.setState({ liked: true }) },
    'Click'
);
}
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

document.querySelectorAll('.like_button_container')
    .forEach(domContainer => {
        const commentID = parseInt

    });