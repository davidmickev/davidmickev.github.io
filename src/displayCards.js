// import githubData from "./gqlrequest";
import {
    Card, CardBody,
    CardTitle, CardSubtitle, CardText, Button } 
    from 'reactstrap';

import React from "react";
import './cards.scss';

class Ghdata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/users/davidmickev/repos?type=all&sort=updated&per_page=20').then(response => response.json()).then(response => {
            console.log(response)
            this.setState({
                cards: response,
            });
        });
    }
    
    // componentDidMount() {
    //     githubData.then(response => {
    //         console.log(response)
    //         this.setState({
    //             cards: response
    //         });
    //     });
    // }

    render() {
        const openInNewTab = (url) => {
            const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
            if (newWindow) newWindow.opener = null
        };   

        return (
            <div className = "grid">
                    {/* {console.log(this.state.cards)} can test branching with the console.log or cards.url*/} 
                    {this.state.cards.map((cards, index) =>
                        <Card className={cards.card} key={index} >
                            <CardTitle onClick={() => { openInNewTab(cards.html_url) }} tag = "h5" >{cards.name} </CardTitle>
                            {/* <CardImg top width="100%" src={"cards.name"} alt="" /> */}
                            <CardBody>
                                <CardSubtitle className="mb-2 text-muted">{cards.description}</CardSubtitle>
                                <CardText>{cards.language}</CardText>
                                <Button class="btn btn-secondary" onClick={() => { openInNewTab(cards.html_url) }}>Visit Project </Button>
                            </CardBody>
                        </Card>
                    )}
            </div>
        )
    }
}
export default Ghdata;