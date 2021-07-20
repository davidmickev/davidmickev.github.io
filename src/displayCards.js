import githubData from "./gqlrequest";
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button } 
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
        githubData.then(response => {
            console.log(response)
            this.setState({
                cards: response
            });
        });
    }

    render() {
        const openInNewTab = (url) => {
            const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
            if (newWindow) newWindow.opener = null
        };

        return (
            <div className = "grid">
                    {/* {console.log(this.state.cards)} */}
                    {this.state.cards.map((cards, index) =>
                        <Card className={cards.card} key={index} >
                            {console.log(this.state.cards[index].languages.nodes.slice(0,3))}
                            <CardTitle onClick={() => { openInNewTab(cards.url) }} tag = "h5" >{cards.name} </CardTitle>
                            {/* <CardImg top width="100%" src={"cards.name"} alt="" /> */}
                            <CardBody>
                                <CardSubtitle className="mb-2 text-muted">{cards.description}</CardSubtitle>
                                {/* <CardText>{cards.languages.nodes[0].name}</CardText> */}
                                <Button class="btn btn-secondary" onClick={() => { openInNewTab(cards.url) }}>Visit Project </Button>
                            </CardBody>
                        </Card>
                    )}
            </div>
        )
    }
}
export default Ghdata;