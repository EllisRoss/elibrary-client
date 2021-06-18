import React from "react";
import {addBookThunkCreator} from "../../redux/libraryReducer";
import {connect} from "react-redux";

class AddBookForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            year: '',
            about: '',
            keyWords: '',
            ISBN: '',
            bookFile: null,

            titleErr: null,
            authorErr: null,
            yearErr: null,
            aboutErr: null,
            keyWordsErr: null,
            ISBNErr: null,
            bookFileErr: null,
            err: null,
        };

        this.titleHandleChange = this.titleHandleChange.bind(this);
        this.authorHandleChange = this.authorHandleChange.bind(this);
        this.yearHandleChange = this.yearHandleChange.bind(this);
        this.aboutHandleChange = this.aboutHandleChange.bind(this);
        this.keyWordsHandleChange = this.keyWordsHandleChange.bind(this);
        this.ISBNHandleChange = this.ISBNHandleChange.bind(this);
        this.fileHandleChange = this.fileHandleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    titleHandleChange(event) {
        this.setState({title: event.target.value});
        this.setState({titleErr: null});
    }

    authorHandleChange(event) {
        this.setState({author: event.target.value});
        this.setState({authorErr: null});
    }

    yearHandleChange(event) {
        if (/[0-9]/.test(event.target.value)) {
            this.setState({year: event.target.value});
        }
        this.setState({yearErr: null});
    }

    aboutHandleChange(event) {
        this.setState({about: event.target.value});
        this.setState({aboutErr: null});
    }

    keyWordsHandleChange(event) {
        this.setState({keyWords: event.target.value});
        this.setState({keyWordsErr: null});
    }

    ISBNHandleChange(event) {
        if (/[0-9]/.test(event.target.value)) {
            this.setState({ISBN: event.target.value});
        }
        this.setState({ISBNErr: null});
    }

    fileHandleChange(event) {
        this.setState({
            bookFile: event.target.files[0]
        });
        this.setState({bookFileErr: null});
    }

    handleSubmit(event) {
        event.preventDefault();

        if (!this.state.bookFile) {
            this.setState({bookFileErr: 'Attach a \'file\''});
        }
        if (!this.state.title) {
            this.setState({titleErr: 'Please enter \'title\''});
        }
        if (!this.state.author) {
            this.setState({authorErr: 'Please enter \'author\''});
        }
        if (!this.state.year) {
            this.setState({yearErr: 'Please enter \'year\''});
        }
        if (!this.state.about) {
            this.setState({aboutErr: 'Please fill \'about\''});
        }
        if (!this.state.ISBN) {
            this.setState({ISBNErr: 'Please fill \'ISBN\''});
        }
        if (!this.state.keyWords) {
            this.setState({keyWordsErr: 'Please fill \'key words\''});
        }

        if (this.state.bookFile && this.state.title
            && this.state.author && this.state.year
            && this.state.about && this.state.keyWords
            && this.state.ISBN) {
            const formData = new FormData();
            formData.append('bookFile', this.state.bookFile);
            formData.append('title', this.state.title);
            formData.append('author', this.state.author);
            formData.append('year', this.state.year);
            formData.append('about', this.state.about);
            formData.append('keyWords', this.state.keyWords);
            formData.append('ISBN', this.state.ISBN);
            //console.log(formData);
            this.props.addBook(formData);
        } else {
            this.setState({err: 'Some error'});
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} encType={'enctype multipart/form-data'}>
                {this.state.err && <div>{this.state.err}</div>}
                {this.state.bookFileErr && <div>{this.state.bookFileErr}</div>}
                {this.state.titleErr && <div>{this.state.titleErr}</div>}
                {this.state.authorErr && <div>{this.state.authorErr}</div>}
                {this.state.yearErr && <div>{this.state.yearErr}</div>}
                {this.state.aboutErr && <div>{this.state.aboutErr}</div>}
                {this.state.ISBNErr && <div>{this.state.ISBNErr}</div>}
                {this.state.keyWordsErr && <div>{this.state.keyWordsErr}</div>}
                <div>
                    <div>Title</div>
                    <input type="text" value={this.state.title} onChange={this.titleHandleChange}/>
                </div>
                <div>
                    <div>Author</div>
                    <input type="text" value={this.state.author} onChange={this.authorHandleChange}/>
                </div>
                <div>
                    <div>Year</div>
                    <input type="text" value={this.state.year} onChange={this.yearHandleChange}/>
                </div>
                <div>
                    <div>About</div>
                    <textarea type="text" value={this.state.about} onChange={this.aboutHandleChange}/>
                </div>
                <div>
                    <div>Key words(through a commas)</div>
                    <input type="text" value={this.state.keyWords} onChange={this.keyWordsHandleChange}/>
                </div>
                <div>
                    <div>ISBN</div>
                    <input type="text" value={this.state.ISBN} onChange={this.ISBNHandleChange}/>
                </div>
                <br/>
                <div>
                    <input name="bookFile" type="file" onChange={this.fileHandleChange}/>
                </div>
                <br/>
                <div>
                    <input type="submit" value="Add book"/>
                </div>
            </form>
        );
    }
}

let mapDispatchToProps = {
    addBook: addBookThunkCreator,
}

export default connect(null, mapDispatchToProps)(AddBookForm);