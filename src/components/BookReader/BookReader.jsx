import Iframe from "react-iframe";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {setCurrentBookAC} from "../../redux/bookReaderReducer";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";

const BookReader = (props) => {
    if (props.match.params.bookId) {
        let url = `http://localhost:3001/library/book-reader/${props.match.params.bookId}`;
        props.setBookUrl(url);
        return (
            <div>
                <Iframe url={url}
                        width="975px"
                        height="1000px"
                    //display="initial"
                    //position="relative"
                />
            </div>
        );
    } else if (!props.bookUrl) {
        return <Redirect to={'/library'}/>
    } else {
        //console.log(props.bookUrl);
        return (
            <div>
                <Iframe url={props.bookUrl}
                        width="975px"
                        height="1000px"
                    //display="initial"
                    //position="relative"
                />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    bookUrl: state.bookReaderPage.currentBookUrl,
});

let mapDispatchToProps = {
    setBookUrl: setCurrentBookAC,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    WithAuthRedirect,
)(BookReader);