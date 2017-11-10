import React from 'react';
import { FieldGroup, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import mPostSetRequest from '../../action/mPost-action';


class MPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState = ({
            title: e.target.value,
            description: e.target.value
        });
    }

    handleSubmit() {
        mPostSet(this.state);
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h1>This is the post container</h1>

                <form
                    onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="name"
                        defaultValue={this.state.title}
                        onChange={this.handleChange} />
                    <br />

                    <textarea
                        placeholder="Describe your mushroom"
                        name="description"
                        defaultValue={this.state.description}
                        onChange={this.handleChange}>
                    </textarea>


                </form>
                <Button bsStyle='primary' type="submit">Submit</Button>
            </div >
        )
    }



}

let mapStateToProps = state => ({

})

let mapDispatchToProps = dispatch => ({
    mPostSet: (post) => dispatch(mPostSetRequest(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(MPost);