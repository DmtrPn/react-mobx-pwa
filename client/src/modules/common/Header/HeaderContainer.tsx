import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Header, HeaderProps } from './Header';


interface Props extends RouteComponentProps, HeaderProps {
}

interface State {
}

class HeaderContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {

        };
    }

    public render() {
        return (
            <Header />
        );
    }
}


const withRouterHeaderContainer = withRouter(HeaderContainer);

export { withRouterHeaderContainer as HeaderContainer };
