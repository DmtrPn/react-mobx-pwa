import * as React from 'react';
import { withRouter } from 'react-router';

import { Header, HeaderProps } from './Header';


interface Props extends HeaderProps {
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